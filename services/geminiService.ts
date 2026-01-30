
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIAssistance = async (productName: string, query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the CozyCore brand ambassador. User is asking about "${productName}". Question: "${query}". Provide a helpful, soothing, and persuasive response that emphasizes comfort, ease of use, and quality. Use a professional, calm, and friendly tone.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am taking a mindful moment. Please ask your question again in a few seconds.";
  }
};

export const getSmartPitch = async (productName: string, description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, high-converting "Comfort Fact" paragraph for a product called "${productName}" from CozyCore. Description: "${description}". Focus on how this item makes home life more peaceful and comfortable. Keep it under 50 words and use cozy language.`,
      config: {
        temperature: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    return "Designed with your well-being in mind, this essential addition brings unmatched peace and simplicity to your daily environment.";
  }
};
