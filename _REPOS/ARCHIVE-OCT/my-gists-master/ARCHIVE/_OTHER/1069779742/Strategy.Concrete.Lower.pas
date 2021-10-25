unit Strategy.Concrete.Lower;

interface
uses
  Strategy.Interfaces;

type
  TFormatterLower = class(TInterfacedObject, IFormatter)
  public
    function GetFormattedText(AText: IText): string;
  end;

implementation

uses
  System.SysUtils;

{ TFormatterLower }

function TFormatterLower.GetFormattedText(AText: IText): string;
begin
  Result := AnsiLowerCase(AText.GetText());
end;

end.
