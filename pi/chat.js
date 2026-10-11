export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "POST requests only."
    });
  }

  try {
    const { message, language = "English" } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please enter a question."
      });
    }

    if (message.length > 8000) {
      return res.status(400).json({
        error: "Your question is too long."
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "AI is not configured. Add OPENAI_API_KEY in Vercel."
      });
    }

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          instructions: `
You are Jem Islam AI, an Islamic learning assistant.
Answer respectfully and clearly.
Support Arabic, Amharic, Afaan Oromo, and English.
For Quran, distinguish Quranic text from translation and tafsir.
For Hadith, provide the collection and authenticity grade
when you can verify them. Never invent references.
Explain differences of scholarly opinion fairly.
For questions requiring a qualified scholar, recommend
consulting a trustworthy scholar.
Reply in the language requested by the user: ${language}.
          `,
          input: message,
          max_output_tokens: 1200
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API error:", data.error?.message);

      return res.status(502).json({
        error: "The AI service could not answer. Check API access and billing."
      });
    }

    const answer = (data.output || [])
      .flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text)
      .join("\n")
      .trim();

    if (!answer) {
      return res.status(502).json({
        error: "The AI returned an empty answer."
      });
    }

    return res.status(200).json({ answer });

  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: "A server error occurred. Please try again."
    });
  }
}
