unit untORM;

interface
uses
  untDB,
  untLog,
  Spring.Services;

type
  TPrimaryKey = class(TCustomAttribute);

  TTableName = class(TCustomAttribute)
  public
    Name : string;
    constructor Create(const ATableName : string);
  end;

  TMyORM = class
  private
    [Inject]
    FDataBase : IDataBase;
    [Inject]
    FLog : ILog;
  public
    function Get(const AId : Integer):Boolean;
  end;

implementation

uses
  Classes,
  System.SysUtils,
  RTTI,
  DataSnap.DBClient,
  Data.DB,
  System.TypInfo;

{ TMyORM }

function TMyORM.Get(const AId: Integer): Boolean;
const
  C_QUERY = 'SELECT %s FROM %s WHERE %s=%d';
var
  rCtx : TRttiContext;
  rTyp : TRttiType;
  sQuery: string;
  sPkName: string;
  oCds : TClientDataSet;

  function _GetFieldsNames():string;
  var
    rFld  : TRttiField;
  begin
    Result := EmptyStr;
    for rFld in rTyp.GetFields do
    begin
      if rFld.Visibility = mvPublic then
      begin
        if Result = EmptyStr then      
          Result := rFld.Name
        else
          Result := Concat(Result,', ',rFld.Name)
      end;
    end;
  end;

  function _GetPrimaryKeyName():string;
  var
    rFld : TRttiField;
    oCA  : TCustomAttribute;
  begin
    Result := EmptyStr;
    for rFld in rTyp.GetFields do
    begin
      for oCA in rFld.GetAttributes do
      begin
        if oCA is TPrimaryKey then
        begin
          Result := rFld.Name;
          Break;
        end;
      end;
    end;  
  end;

  function _PopulateFields():Boolean;
  var
    I: Integer;
    rFld : TRttiField;
  begin
    if (not oCds.Active) or (oCds.RecordCount = 0) then
      Exit(False);

    for I := 0 to oCds.FieldDefs.Count - 1 do
    begin
      rFld := rTyp.GetField(oCds.FieldDefs[I].Name);
      case oCds.FieldDefs[i].DataType of
        ftString:
          rFld.SetValue(Self,TValue.From<string>(oCds.Fields[I].AsString));
        ftInteger:
          rFld.SetValue(Self,TValue.From<integer>(oCds.Fields[I].AsInteger));    
      end;          
    end;
    Result := True;
  end;

  function _GetTableName():String;
  var
    oCT : TCustomAttribute;
  begin
    Result := EmptyStr;
    for oCT in rTyp.GetAttributes do
    begin
      if oCT is TTableName then
      begin
        Result := TTableName(oCT).Name;
        Break;
      end;
    end;  
  end;

begin
  if not Self.FDataBase.Connected() then
  begin
    Self.FLog.WriteLogFmt('Connection close',[Self.FDataBase.TypeDescription]);
    Exit(False);
  end;

  oCds := nil;
  rCtx := TRttiContext.Create();
  try
    rTyp := rCtx.GetType(Self.ClassType);
    sPkName := _GetPrimaryKeyName();
    sQuery := Format(C_QUERY,[_GetFieldsNames(), _GetTableName(), sPkName, AId]);

    Self.FLog.WriteLogFmt('query generated: [%s]',[sQuery]);
    oCds := Self.FDataBase.OpenQuery(sQuery);
    Result := _PopulateFields();
  finally
    rCtx.Free;
    if Assigned(oCds) then
      oCds.Free;
  end;
end;

{ TTableName }

constructor TTableName.Create(const ATableName: string);
begin
  Self.Name := ATableName;
end;

end.