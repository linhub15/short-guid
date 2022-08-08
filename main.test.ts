import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";
import { encode } from "./main.ts";

Deno.test("guid encodes to suid", () => {
  const guid = "c9a646d3-9c61-4cb7-bfcd-ee2522c8f633";
  const suid = encode(guid);
  assertEquals(suid, "00amyWGct0y_ze4lIsj2Mw");
});

Deno.test("suid decodes to original guid", () => {

});
