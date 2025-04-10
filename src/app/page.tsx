
import {personalizedGreeting} from '@/ai/flows/personalized-greeting';
import {suggestSkills} from '@/ai/flows/suggest-skills';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {ExternalLink} from 'lucide-react';

const resumeOcrData = {
  summary:
    'Highly motivated and skilled software engineer with 5+ years of experience in developing scalable and maintainable web applications. Proven ability to work independently and collaboratively in a fast-paced environment. Passionate about learning new technologies and contributing to innovative projects.',
  experience: [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Software Engineer',
      years: '2018 - Present',
      responsibilities: [
        'Led the development of a new e-commerce platform using React, Node.js, and GraphQL.',
        'Mentored junior engineers and provided technical guidance on best practices.',
        'Collaborated with cross-functional teams to deliver high-quality software solutions.',
      ],
    },
    {
      company: 'Web Services Ltd.',
      role: 'Software Engineer',
      years: '2016 - 2018',
      responsibilities: [
        'Developed and maintained web applications using Java, Spring, and MySQL.',
        'Participated in code reviews and contributed to improving code quality.',
        'Worked closely with product managers to understand and implement new features.',
      ],
    },
  ],
  externalLinks: {
    linkedin: 'https://www.linkedin.com/in/marhaf-syed',
    github: 'https://github.com/marhaf-syed',
    portfolio: 'https://marhaf-syed.com',
    selfIntroduction: 'https://marhaf-syed.com/about',
  },
  jobDescriptions: `
  Senior Software Engineer
  Responsibilities:
  - Develop scalable and maintainable web applications
  - Collaborate with cross-functional teams
  - Mentor junior engineers
  
  Software Engineer
  Responsibilities:
  - Develop and maintain web applications
  - Participate in code reviews
  - Implement new features
  `,
};

async function getSuggestedSkills(jobDescriptions: string) {
  const skills = await suggestSkills({jobDescriptions});
  return skills.suggestedSkills;
}

async function getPersonalizedGreeting() {
  // This is placeholder logic; you might fetch location/browsing history.
  const greeting = await personalizedGreeting({location: 'Unknown'});
  return greeting.greeting;
}

export default async function Home() {
  const suggestedSkills = await getSuggestedSkills(resumeOcrData.jobDescriptions);
  const personalizedGreetingMessage = await getPersonalizedGreeting();

  return (
    <div className="container mx-auto py-10">
      {/* Personalized Greeting */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Personalized Greeting</CardTitle>
          <CardDescription>{personalizedGreetingMessage}</CardDescription>
        </CardHeader>
      </Card>

      {/* Summary Display */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
          <CardDescription>{resumeOcrData.summary}</CardDescription>
        </CardHeader>
      </Card>

      {/* Experience Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Experience Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          {resumeOcrData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p className="text-sm text-muted-foreground">
                {exp.role} ({exp.years})
              </p>
              <ul className="list-disc pl-5 mt-2">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* External Links */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>External Links</CardTitle>
          <CardDescription>
            Connect with me on these platforms.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button asChild>
            <a href={resumeOcrData.externalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              LinkedIn <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild>
            <a href={resumeOcrData.externalLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              GitHub <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild>
            <a href={resumeOcrData.externalLinks.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Portfolio <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild>
            <a href={resumeOcrData.externalLinks.selfIntroduction} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Self-Introduction <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Skills Suggestion */}
      <Card>
        <CardHeader>
          <CardTitle>Suggested Skills to Highlight</CardTitle>
          <CardDescription>
            Based on your experience, consider highlighting these skills:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {suggestedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
