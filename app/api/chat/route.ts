import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

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

    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
      },
      history: history.length > 0 ? history : undefined,
    });

    const response = await chat.sendMessage({ message: latestMessage });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
