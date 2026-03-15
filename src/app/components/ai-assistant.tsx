'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { aiAssistantFAQ } from '@/ai/flows/ai-assistant-faq';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AIAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');

    try {
      const result = await aiAssistantFAQ({ question });
      setAnswer(result.answer);
    } catch (error) {
      console.error('AI Assistant Error:', error);
      toast({
        title: 'Error',
        description: 'Sorry, I could not process your question. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-full w-full bg-card/50 shadow-lg border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-xl">
          <Sparkles className="text-accent" />
          <span>Ask our AI Assistant</span>
        </CardTitle>
        <CardDescription>Get instant answers to your questions about Riyogya.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="e.g., What is Riyogya?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
            {isLoading ? <Loader2 className="animate-spin" /> : 'Ask Question'}
          </Button>
        </form>
        
        {(isLoading || answer) && (
          <div className="mt-6 rounded-lg border bg-background p-4 text-sm relative">
            {isLoading && !answer && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> Thinking...
              </div>
            )}
            {answer && <p className="whitespace-pre-wrap leading-relaxed">{answer}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
