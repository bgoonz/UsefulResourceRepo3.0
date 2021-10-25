program Strategy;

{$R *.res}

uses
  System.SysUtils,
  Strategy.Interfaces in 'Strategy.Interfaces.pas',
  Strategy.Text in 'Strategy.Text.pas',
  Strategy.Concrete.Lower in 'Strategy.Concrete.Lower.pas',
  Strategy.Concrete.Reverse in 'Strategy.Concrete.Reverse.pas';

var
  oText : IText;
  oFormatter : IFormatter;
  s : string;
begin
  ReportMemoryLeaksOnShutdown := True;
  if ParamStr(1) = 'lower' then
    oFormatter := TFormatterLower.Create()
  else
    oFormatter := TFormatterReverse.Create();

  oText := TText.Create(oFormatter);
  try
    Write('Enter text: ');
    Readln(s);
    oText.SetText(s);
    oText.Format();

    Write(Format('Formatted text: %s',[oText.GetText()]));
    Readln;
  except
    on E: Exception do
      Writeln(E.ClassName, ': ', E.Message);
  end;
end.