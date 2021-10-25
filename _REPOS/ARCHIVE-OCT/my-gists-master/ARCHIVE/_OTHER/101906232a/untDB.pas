unit untDB;

interface
uses
  Classes,
  DataSnap.DBClient;

type
  {$M+}
  IDataBase = Interface
  ['{D197017B-8417-4364-9AED-B3CC00E7B04C}']
    function OpenQuery(const AQuery : string):TClientDataSet;
    function Connected():Boolean;
    function TypeDescription():string;
  end;
  {$M-}

implementation

end.