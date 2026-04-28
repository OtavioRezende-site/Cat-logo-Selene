import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../data/products";

const apiKey = process.env.GEMINI_API_KEY;

let ai: any = null;

export const getGeminiIA = () => {
  if (!ai && apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const SYSTEM_PROMPT = `Você é um Consultor de Estilo da Selene - Semijoias de Luxo. 
Seu objetivo é ajudar as clientes a escolherem as semijoias perfeitas.
Você tem acesso ao catálogo de produtos abaixo.
Sempre seja elegante, sofisticado e atencioso.
Responda em Português do Brasil.

Catálogo de Produtos:
${JSON.stringify(PRODUCTS.map(p => ({ 
  nome: p.name, 
  preco: p.price, 
  categoria: p.category,
  cores: p.colors 
})), null, 2)}

Regras:
1. Recomende produtos específicos do catálogo.
2. Explique por que a peça combina com a ocasião ou estilo mencionado.
3. Se não souber algo, peça mais detalhes sobre o estilo da cliente.
`;

export const askStylist = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  const gemini = getGeminiIA();
  if (!gemini) {
    throw new Error("A chave da API Gemini não foi configurada. Por favor, adicione-a no menu Secrets/Settings.");
  }

  const chat = gemini.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: SYSTEM_PROMPT,
    },
    history: history
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
