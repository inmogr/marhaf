// src/ai/flows/personalized-greeting.ts
'use server';

/**
 * @fileOverview A personalized greeting AI agent.
 *
 * - personalizedGreeting - A function that generates a personalized greeting.
 * - PersonalizedGreetingInput - The input type for the personalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the personalizedGreeting function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  location: z.string().optional().describe('The visitor\'s location.'),
  browsingHistory: z.string().optional().describe('The visitor\'s browsing history.'),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting message.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function personalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {
    schema: z.object({
      location: z.string().optional().describe('The visitor\'s location.'),
      browsingHistory: z.string().optional().describe('The visitor\'s browsing history.'),
    }),
  },
  output: {
    schema: z.object({
      greeting: z.string().describe('The personalized greeting message.'),
    }),
  },
  prompt: `You are an AI assistant that generates personalized greetings for visitors to a portfolio website.

  The goal is to create a welcoming and engaging message based on the available information about the visitor.

  Consider the following factors when crafting the greeting:

  - Location: If the visitor's location is available, use it to create a geographically relevant greeting.
  - Browsing History: If the visitor's browsing history is available, use it to tailor the greeting to their interests.

  Example Scenarios:

  - If the visitor is from San Francisco, a greeting like "Welcome! It's great to see a fellow San Franciscan exploring my portfolio." would be appropriate.
  - If the visitor has been browsing the projects section, a greeting like "Welcome! I see you're interested in my projects. Feel free to explore!" would be a good fit.

  If no information is available, generate a generic but warm greeting.

  Location: {{{location}}}
  Browsing History: {{{browsingHistory}}}

  Greeting:`, 
});

const personalizedGreetingFlow = ai.defineFlow<
  typeof PersonalizedGreetingInputSchema,
  typeof PersonalizedGreetingOutputSchema
>({
  name: 'personalizedGreetingFlow',
  inputSchema: PersonalizedGreetingInputSchema,
  outputSchema: PersonalizedGreetingOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});