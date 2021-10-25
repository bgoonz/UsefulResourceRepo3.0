unit Strategy.Interfaces;

interface

type
  IText = interface
  ['{79217AFB-BCA0-4095-90E2-124109EE203D}']
    function GetText() : String;
    procedure SetText(const AValue : string);
    procedure Format();
  end;

  IFormatter = interface
  ['{206E22B4-626F-4163-A796-8D07C6B87FA3}']
    function GetFormattedText(AText : IText):String;
  end;

implementation

end.