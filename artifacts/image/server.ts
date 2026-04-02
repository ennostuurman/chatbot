import { createDocumentHandler } from "@/lib/artifacts/server";

async function generateImageBase64(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Image generation requires OPENAI_API_KEY to be configured."
    );
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Image generation failed (${response.status}): ${errorBody}`
    );
  }

  const data = (await response.json()) as {
    data: Array<{ b64_json: string }>;
  };
  return data.data[0].b64_json;
}

export const imageDocumentHandler = createDocumentHandler<"image">({
  kind: "image",
  onCreateDocument: async ({ title, dataStream }) => {
    const base64 = await generateImageBase64(title);

    dataStream.write({
      type: "data-imageDelta",
      data: base64,
      transient: true,
    });

    return base64;
  },
  onUpdateDocument: async ({ document, description, dataStream }) => {
    const prompt = `${document.title}. ${description}`;
    const base64 = await generateImageBase64(prompt);

    dataStream.write({
      type: "data-imageDelta",
      data: base64,
      transient: true,
    });

    return base64;
  },
});
