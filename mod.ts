export function encode(guid?: string) {
  if (!guid) guid = crypto.randomUUID();
  const byteArray = toByteArray(guid.trim());

  const intermediaryForBtoa = byteArray.reduce(
    (prev, cur) => prev + String.fromCharCode(cur),
    "",
  );

  const b64 = btoa(intermediaryForBtoa);
  const suid = urlify(b64);
  return suid;
}

export function decode(suid: string) {
  const b64 = unurlify(suid.trim());
  const s = atob(b64);
  const len = s.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = s.charCodeAt(i);
  }
  return fromByteArray(bytes);
}

function fromByteArray(bytes: Uint8Array) {
  const view = new DataView(bytes.buffer);
  const a = view.getUint32(0, true).toString(16);
  const b = view.getUint16(4, true).toString(16);
  const c = view.getUint16(6, true).toString(16);
  const d = view.getUint16(8).toString(16);
  const e = view.getUint32(10).toString(16);
  const f = view.getUint16(14).toString(16);
  return `${a}-${b}-${c}-${d}-${e}${f}`;
}

function toByteArray(guid: string) {
  // todo(hubert): make this better with DataViews
  const parts = guid.split("-");
  const a = toInt32(parts[0]);
  const b = toShort(parts[1]);
  const c = toShort(parts[2]);

  const temp = parseInt(parts[3], 16);
  const d = toByte(BigInt(temp) >> 8n);
  const e = toByte(BigInt(temp));

  const templ = BigInt("0x" + parts[4]);

  const templLeft = templ >> 32n;

  const f = toByte(templLeft >> 8n);
  const g = toByte(templLeft);

  const h = toByte(templ >> 24n);
  const i = toByte(templ >> 16n);
  const j = toByte(templ >> 8n);
  const k = toByte(templ);

  const buffer = new ArrayBuffer(16);
  const view = new Uint8Array(buffer);
  view[0] = a.getInt32(0);
  view[1] = a.getInt32(0) >> 8;
  view[2] = a.getInt32(0) >> 16;
  view[3] = a.getInt32(0) >> 24;
  view[4] = b.getInt16(0);
  view[5] = b.getInt16(0) >> 8;
  view[6] = c.getInt16(0);
  view[7] = c.getInt16(0) >> 8;
  view[8] = d.getUint8(0);
  view[9] = e.getUint8(0);
  view[10] = f.getUint8(0);
  view[11] = g.getUint8(0);
  view[12] = h.getUint8(0);
  view[13] = i.getUint8(0);
  view[14] = j.getUint8(0);
  view[15] = k.getUint8(0);
  return view;
}

function toInt32(hex: string): DataView {
  const buffer = new ArrayBuffer(4);
  const value = parseInt(hex, 16);
  const view = new DataView(buffer);
  view.setInt32(0, value);
  return view;
}

function toShort(hex: string): DataView {
  const buffer = new ArrayBuffer(2);
  const value = parseInt(hex, 16);
  const view = new DataView(buffer);
  view.setInt16(0, value);
  return view;
}

function toByte(int32: bigint): DataView {
  const buffer = new ArrayBuffer(1);
  const view = new DataView(buffer);
  view.setUint8(0, Number(int32));
  return view;
}

function urlify(b64: string): string {
  b64 = b64.replace("/", "_");
  b64 = b64.replace("+", "-");
  b64 = b64.substring(0, 22);
  return b64;
}

function unurlify(b64Url: string): string {
  b64Url = b64Url.replace("_", "/");
  b64Url = b64Url.replace("+", "-");
  b64Url += "==";
  return b64Url;
}
