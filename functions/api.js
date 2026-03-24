
export async function onRequest() {
  return new Response(JSON.stringify({
    message: "Hello depuis Cloudflare Functions 🚀",
    success: true
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
