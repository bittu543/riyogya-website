'use server';
/**
 * @fileOverview An AI assistant that answers frequently asked questions about Riyogya's services.
 *
 * - aiAssistantFAQ - A function that handles user questions and provides answers based on Riyogya's services.
 * - AIAssistantFAQInput - The input type for the aiAssistantFAQ function.
 * - AIAssistantFAQOutput - The return type for the aiAssistantFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RiyogyaInfo = `Riyogya is a technology company that develops AI-powered business management systems and automation tools for organizations such as hospitals, schools, and small businesses. The platform also provides WhatsApp communication solutions using the WhatsApp Business API for sending notifications, alerts, and customer engagement messages.

Key Solutions offered:
- Hospital Management System
- School ERP System
- Business Automation Tools
- WhatsApp Communication Platform

Key Features:
- Cloud-based platform
- Secure data management
- Automation workflows
- WhatsApp Business API integration
- Real-time analytics`;

const AIAssistantFAQInputSchema = z.object({
  question: z.string().describe('The question asked by the user.'),
});
export type AIAssistantFAQInput = z.infer<typeof AIAssistantFAQInputSchema>;

const AIAssistantFAQOutputSchema = z.object({
  answer: z.string().describe('The answer provided by the AI assistant.'),
});
export type AIAssistantFAQOutput = z.infer<typeof AIAssistantFAQOutputSchema>;

export async function aiAssistantFAQ(
  input: AIAssistantFAQInput
): Promise<AIAssistantFAQOutput> {
  return aiAssistantFAQFlow(input);
}

const riyogyaFAQPrompt = ai.definePrompt({
  name: 'riyogyaFAQPrompt',
  input: {schema: AIAssistantFAQInputSchema},
  output: {schema: AIAssistantFAQOutputSchema},
  prompt: `You are an AI assistant for Riyogya, a technology company specializing in AI-powered business management and automation tools. Your goal is to provide concise and accurate answers to user questions based *only* on the information provided below. If you cannot find the answer within the provided context, politely state that you don't have enough information to answer that question.

--- Riyogya Information ---
${RiyogyaInfo}
---------------------------

User's Question: {{{question}}}

AI Answer:`,
});

const aiAssistantFAQFlow = ai.defineFlow(
  {
    name: 'aiAssistantFAQFlow',
    inputSchema: AIAssistantFAQInputSchema,
    outputSchema: AIAssistantFAQOutputSchema,
  },
  async input => {
    const {output} = await riyogyaFAQPrompt(input);
    return output!;
  }
);
