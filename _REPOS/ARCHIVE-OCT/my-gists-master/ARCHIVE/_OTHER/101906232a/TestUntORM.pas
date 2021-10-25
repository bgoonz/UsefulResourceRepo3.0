unit TestUntORM;

interface

uses
  TestFramework,
  untORM,
  untDB,
  untLog,
  Delphi.Mocks;

type
  [TTableName('tblPerson')]
  TPerson = class(TMyORM)
  public
    [TPrimaryKey]
    Id   : integer;
    Name : String;
    Nick : String;
  end;

  TestTMyORM = class(TTestCase)
  strict private
    FMyORM: TPerson;
    FDataBaseMock : TMock<IDataBase>;
    FLogStub : TStub<ILog>;
  public
    procedure SetUp; override;
    procedure TearDown; override;
    procedure AfterConstruction; override;
  published
    procedure TestGet;
  end;

implementation
uses
  DataSnap.DBClient,
  System.Rtti,
  Data.DB,
  Spring.Container;

procedure TestTMyORM.AfterConstruction;
begin
  inherited;
  Self.FDataBaseMock := TMock<IDataBase>.Create();
  Self.FDataBaseMock.Setup.WillReturn(True).When.Connected();

  Self.FLogStub := TStub<ILog>.Create();

  GlobalContainer.RegisterType<TPerson>;
  GlobalContainer.RegisterType<IDataBase>.DelegateTo(Self.FDataBaseMock.Instance);
  GlobalContainer.RegisterType<ILog>.DelegateTo(Self.FLogStub.Instance);
  GlobalContainer.Build;
end;

procedure TestTMyORM.SetUp;
begin
  FMyORM := GlobalContainer.Resolve<TPerson>;
end;

procedure TestTMyORM.TearDown;
begin
  FMyORM.Free;
  FMyORM := nil;
end;

procedure TestTMyORM.TestGet;
var
  ReturnValue: Boolean;
  AId: Integer;

  procedure _PrepareMock();
  begin
    Self.FDataBaseMock.Setup.WillReturnDefault('OpenQuery', TClientDataSet.Create(nil));
    Self.FDataBaseMock.Setup.WillExecute(
      function (const args : TArray<TValue>; const ReturnType : TRttiType) : TValue
      begin
        Result := TValue.From<TClientDataSet>(TClientDataSet.Create(nil));
        with TClientDataSet(Result.AsObject) do
        begin
          FieldDefs.Add('Id', ftInteger);
          FieldDefs.Add('Name', ftString, 20);
          FieldDefs.Add('Nick', ftString, 20);
          CreateDataSet();

          Append();

          FieldByName('Id').Value := AId;
          FieldByName('Name').Value := 'Diego';
          FieldByName('Nick').Value := 'drgarcia1986';

          post();
        end;
      end
    ).When.OpenQuery('SELECT Id, Name, Nick FROM tblPerson WHERE Id=1')
  end;
begin
  AId := 1;
  _PrepareMock();

  ReturnValue := Self.FMyORM.Get(AId);

  CheckTrue(ReturnValue, 'Success on Orm.Get');
  CheckEquals(AId, Self.FMyORM.Id, 'Check Equals ID');
  CheckEqualsString('Diego', Self.FMyORM.Name, 'Check Equals Name');
  CheckEqualsString('drgarcia1986', Self.FMyORM.Nick, 'Check Equals Nick');

  ReturnValue := Self.FMyORM.Get(2);
  CheckFalse(ReturnValue, 'Expected False because the mock is not prepared to id 2');
end;

initialization
  ReportMemoryLeaksOnShutdown := true;
  RegisterTest(TestTMyORM.Suite);
end.
