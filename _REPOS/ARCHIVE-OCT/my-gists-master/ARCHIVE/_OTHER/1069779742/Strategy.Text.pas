unit Strategy.Text;

interface

uses Strategy.Interfaces;

type
  TText = class(TInterfacedObject, IText)
  strict private
    FFormatter : IFormatter;
    FStr : string;
  public
    procedure Format;
    function GetText: string;
    procedure SetText(const AValue: string);
    constructor Create(AFormatter : IFormatter);
  end;

implementation

{ TText }

constructor TText.Create(AFormatter: IFormatter);
begin
  Self.FFormatter := AFormatter;
end;

procedure TText.Format;
var
  s : string;
begin
  s := Self.FFormatter.GetFormattedText(Self);
  Self.SetText(s);
end;

function TText.GetText: string;
begin
  Result := Self.FStr;
end;

procedure TText.SetText(const AValue: string);
begin
  Self.FStr := AValue;
end;

end.