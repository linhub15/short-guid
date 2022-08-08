UUID first three sections are big endian representations, but x86 architecture
is little-endian, so we need to switch the byte order.
https://datatracker.ietf.org/doc/html/rfc4122#section-4.1.2

```
uuid    = '27b40832-9344-4110-ace8-1e6bf277219f';
flipped = '3208b427-4493-1041-ace8-1e6bf277219f';
```

We don't need to switch the `clock_seq_hi_andreserved` or `clock_seq_low`
because they are a `UInt8`. They just happen to be grouped together in the
string representation.

We also don't switch the `node` value because it is an unsigned 48 bit integer
separated into 6 nodes.

Use URL and Filename Safe Alphabet in Base64
https://datatracker.ietf.org/doc/html/rfc4648#section-5

ShortGuid C# implementation
https://github.com/csharpvitamins/CSharpVitamins.ShortGuid/blob/master/CSharpVitamins.ShortGuid/ShortGuid.cs

C# Guid mscorlib system implementation
https://github.com/microsoft/referencesource/blob/master/mscorlib/system/guid.cs#L708


This does not just change a guid to base 64
// https://www.fileformat.info/tool/guid-base64.htm J7QIMpNEQRCs6AAAHmvydw