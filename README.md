# Typescript port of CSharpVitamins.ShortGuid

C# Equivalent <https://github.com/csharpvitamins/CSharpVitamins.ShortGuid>

Use this if you need to generate ShortGuids on the client and want to convert
them back to `Guid` on the server using CSharpVitamins.ShortGuid.

Can only be used with Deno for now.

### Usage - Deno

```typescript
import { decode, encode } from "https://raw.githubusercontent.com/linhub15/short-guid/main/mod.ts";

console.log(encode()); // 00amyWGct0y_ze4lIsj2Mw
console.log(decode(shortGuid)); // "c9a646d3-9c61-4cb7-bfcd-ee2522c8f633"
```

### Tests

`deno test`

### Benchmarks

`deno bench`

```
cpu: Intel(R) Core(TM) i5-9600K CPU @ 3.70GHz
runtime: deno 1.28.3 (x86_64-unknown-linux-gnu)

benchmark      time (avg)             (min … max)       p75       p99      p995
------------------------------------------------- -----------------------------
encode()     6.18 µs/iter     (6.01 µs … 6.66 µs)   6.25 µs   6.66 µs   6.66 µs
decode()     1.42 µs/iter     (1.37 µs … 1.62 µs)   1.42 µs   1.62 µs   1.62 µs
```
