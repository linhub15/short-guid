import { decode, encode } from "./mod.ts";

const uuid = crypto.randomUUID();
const suid = encode(uuid);

Deno.bench("encode()", () => {
  encode(uuid);
});

Deno.bench("decode()", () => {
  decode(suid);
});