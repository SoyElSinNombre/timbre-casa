export default async function handler(req, res) {
  const TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const text = encodeURIComponent("🔔 Hay alguien en la puerta.");

  // Enviar mensaje a Telegram
  const apiUrl = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
  await fetch(apiUrl);

  // Mostrar mensaje al visitante
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <body style="font-family:sans-serif;text-align:center;margin-top:40px">
        <h2>✅ Se ha avisado al técnico</h2>
        <p>Gracias por esperar unos segundos.</p>
      </body>
    </html>
  `);
}


