import { generateImage } from "ai";
import { getImageModel } from "@/lib/ai/providers";
import { createDocumentHandler } from "@/lib/artifacts/server";

export const imageDocumentHandler = createDocumentHandler<"image">({
  kind: "image",
  onCreateDocument: async ({ title, dataStream }) => {
    const { image } = await generateImage({
      model: getImageModel(),
      prompt: title,
    });

    dataStream.write({
      type: "data-imageDelta",
      data: image.base64,
      transient: true,
    });

    return image.base64;
  },
  onUpdateDocument: async ({ document, description, dataStream }) => {
    const prompt = `${document.title}. ${description}`;

    const { image } = await generateImage({
      model: getImageModel(),
      prompt,
    });

    dataStream.write({
      type: "data-imageDelta",
      data: image.base64,
      transient: true,
    });

    return image.base64;
  },
});
