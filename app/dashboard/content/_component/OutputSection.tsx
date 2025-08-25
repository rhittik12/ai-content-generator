"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    alert('Content copied to clipboard!');
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5 border-b'>
        <h2 className='font-medium text-lg'>Generated Content</h2>
        <Button
          className='flex gap-2'
          onClick={handleCopy}
          disabled={!aiOutput}
        >
          <Copy className='w-4 h-4' /> Copy
        </Button>
      </div>
      
      {!aiOutput ? (
        <div className="p-5 text-center text-gray-500 py-20">
          <p>✨ Generated content will appear here...</p>
        </div>
      ) : (
        <div className="p-5 prose max-w-none">
          <ReactMarkdown>{aiOutput}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default OutputSection;