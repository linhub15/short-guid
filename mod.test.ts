import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";
import { decode, encode } from "./mod.ts";

Deno.test("guid encodes to suid", () => {
  const guid = "c9a646d3-9c61-4cb7-bfcd-ee2522c8f633";
  const suid = encode(guid);
  assertEquals(suid, "00amyWGct0y_ze4lIsj2Mw");
});

Deno.test("guid encodes to suid", () => {
  const guid = "540c2d5f-a9ab-4414-bd36-9999f5388773";
  const suid = encode(guid);
  assertEquals(suid, "Xy0MVKupFES9NpmZ9TiHcw");
});

Deno.test("suid decodes to original guid", () => {
  const suid = "Xy0MVKupFES9NpmZ9TiHcw";
  const guid = decode(suid);
  assertEquals(guid, "540c2d5f-a9ab-4414-bd36-9999f5388773");
});

Deno.test("suid decodes to original guid", () => {
  const suid = "00amyWGct0y_ze4lIsj2Mw";
  const guid = decode(suid);
  assertEquals(guid, "c9a646d3-9c61-4cb7-bfcd-ee2522c8f633");
});
