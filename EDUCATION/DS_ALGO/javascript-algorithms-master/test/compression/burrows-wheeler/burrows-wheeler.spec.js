import { burrowsWheeler as bw } from "../../../src/compression/burrows-wheeler/burrows-wheeler";

describe("Burrows Wheeler", () => {
  "use strict";

  it('should return "annnnb$aaaaa" for the entry "ananabanana"', () => {
    expect(bw.encode("ananabanana")).toEqual("annnnb$aaaaa");
  });

  it('should return "ananabanana" for the entry "annnnb$aaaaa"', () => {
    expect(bw.decode("annnnb$aaaaa")).toEqual("ananabanana");
  });
});
