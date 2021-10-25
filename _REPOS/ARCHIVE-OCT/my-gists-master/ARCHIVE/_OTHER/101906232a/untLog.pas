unit untLog;

interface

type
  {$M+}
  ILog = interface
  ['{B4B12D81-6B1C-4742-A9A8-AFFC758FC239}']
    procedure WriteLogFmt(AFormat : string; AArgs : Array of TVarRec);
    procedure WriteLog(AMsg : string);
  end;
  {$M-}

implementation

end.