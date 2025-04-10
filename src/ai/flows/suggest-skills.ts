// 'use server';

/**
 * @fileOverview Suggests relevant skills to highlight based on job descriptions.
 *
 * - suggestSkills - A function that suggests skills to highlight.
 * - SuggestSkillsInput - The input type for the suggestSkills function.
 * - SuggestSkillsOutput - The return type for the suggestSkills function.
 */

'use server';

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SuggestSkillsInputSchema = z.object({
  jobDescriptions: z
    .string()
    .describe('The job descriptions extracted from the resume.'),
});
export type SuggestSkillsInput = z.infer<typeof SuggestSkillsInputSchema>;

const SuggestSkillsOutputSchema = z.object({
  suggestedSkills: z
    .array(z.string())
    .describe('The suggested skills to highlight.'),
});
export type SuggestSkillsOutput = z.infer<typeof SuggestSkillsOutputSchema>;

export async function suggestSkills(input: SuggestSkillsInput): Promise<SuggestSkillsOutput> {
  return suggestSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSkillsPrompt',
  input: {
    schema: z.object({
      jobDescriptions: z
        .string()
        .describe('The job descriptions extracted from the resume.'),
    }),
  },
  output: {
    schema: z.object({
      suggestedSkills: z
        .array(z.string())
        .describe('The suggested skills to highlight.'),
    }),
  },
  prompt: `You are an expert career advisor.

You will analyze the job descriptions provided and suggest relevant skills to highlight based on current job market trends.

Job Descriptions: {{{jobDescriptions}}}

Suggest skills to highlight in a portfolio, based on these job descriptions, that would be relevant to current job market trends. The skills should be specific and actionable. Respond in JSON format with the array of skills.
`,
});

const suggestSkillsFlow = ai.defineFlow<
  typeof SuggestSkillsInputSchema,
  typeof SuggestSkillsOutputSchema
>({
  name: 'suggestSkillsFlow',
  inputSchema: SuggestSkillsInputSchema,
  outputSchema: SuggestSkillsOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});