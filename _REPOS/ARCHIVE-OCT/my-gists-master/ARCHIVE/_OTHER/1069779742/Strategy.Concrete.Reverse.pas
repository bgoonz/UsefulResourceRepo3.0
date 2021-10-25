unit Strategy.Concrete.Reverse;

interface
uses
  Strategy.Interfaces;

type
  TFormatterReverse = class(TInterfacedObject, IFormatter)
  public
    function GetFormattedText(AText: IText): string;
  end;

implementation
uses
  System.StrUtils;

{ TFormatterReverse }

function TFormatterReverse.GetFormattedText(AText: IText): string;
begin
  Result := ReverseString(AText.GetText());
end;

end.
