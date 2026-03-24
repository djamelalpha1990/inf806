
export async function onRequest({ env }) {
  // insérer un message
  await env.DB.prepare(
    "INSERT INTO messages (content, created_at) VALUES (?, ?)"
  )
  .bind("Hello depuis la base ✅", new Date().toISOString())
  .run();

  // lire les messages
  const { results } = await env.DB
    .prepare("SELECT * FROM messages ORDER BY id DESC")
    .all();

  return new Response(JSON.stringify(results, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
}
