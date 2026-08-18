import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Ensure the Gemini API key is configured server-side. Do not expose the key in logs or responses.
    if (!process.env.GEMINI_API_KEY) {
      console.error('chat API: GEMINI_API_KEY is not set in environment');
      return NextResponse.json({ error: 'Server misconfiguration: GEMINI_API_KEY is not set' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const systemInstruction = "You are a helpful and professional customer support assistant for BKP Developers, a software development agency. Your goal is to answer questions about the agency's services, which include Website Development, Mobile App Development, UI/UX Design, E-commerce Solutions, AI & Software Solutions, SEO & Digital Marketing, and Maintenance & Support. Be polite, concise, and encourage users to reach out via the contact form for detailed project quotes.";

    // Format history for Gemini chat API
    // We create a chat session and then send the latest message.
    // However, the `chat.sendMessage` API expects the `ai.chats.create` with history.
    // We can also just send it directly if we map the history to the `contents` format.
    
    // In @google/genai, history is passed to `history` field in `ai.chats.create({ model, config, history })`.
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));
    
    const latestMessage = messages[messages.length - 1].content;

    // Create the chat session (await the creation - create() returns a Promise)
    const chat = await ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
      },
      history: history.length > 0 ? history : undefined,
    });

    // Send the latest user message and await the provider response
    const response = await chat.sendMessage({ message: latestMessage });

    // Extract reply text robustly. Prefer response.text but fall back safely.
    const replyText = response?.text ?? null;

    if (!replyText) {
      // If the provider returned an unexpected shape, include a helpful log for debugging.
      console.error('chat API: unexpected provider response shape', { shape: Object.keys(response || {}) });
      return NextResponse.json({ error: 'Unexpected response from AI provider' }, { status: 500 });
    }

    return NextResponse.json({ reply: replyText });
  } catch (error: any) {
    // Log safe, useful debugging info without revealing API keys or secrets
    console.error('Error in chat API:', {
      message: error?.message ?? String(error),
      name: error?.name,
      // If the provider error includes an HTTP status or body, log those fields only (truncated)
      providerStatus: error?.response?.status ?? error?.statusCode ?? null,
      providerMessage: error?.response?.data ? String(error.response.data).slice(0, 1000) : undefined,
    });

    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
