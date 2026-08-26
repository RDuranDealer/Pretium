const SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 horas

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

async function hmac(value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return Buffer.from(sig).toString("hex");
}

export async function createSessionValue() {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `${expires}`;
  const sig = await hmac(payload);
  return `${payload}.${sig}`;
}

export async function isValidSessionValue(value: string | undefined | null) {
  if (!value) return false;
  const [payload, sig] = value.split(".");
  if (!payload || !sig) return false;
  const expected = await hmac(payload);
  if (expected !== sig) return false;
  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  return true;
}

export { SESSION_COOKIE };
