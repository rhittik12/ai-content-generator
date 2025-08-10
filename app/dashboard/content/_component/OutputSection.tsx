"use client";
import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const Editor = dynamic(
  () => import('@toast-ui/react-editor').then(mod => mod.Editor),
  { ssr: false }
);

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (editorRef.current && aiOutput) {
        try {
          const editorInstance = editorRef.current.getInstance();
          editorInstance.setMarkdown(aiOutput || '');
        } catch (error) {
          console.error('Editor error:', error);
        }
      }
    }, 100); // Small delay to ensure editor is ready

    return () => clearTimeout(timer);
  }, [aiOutput]);

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
        <div className="p-5">
          <Editor
            ref={editorRef}
            initialValue={aiOutput || "Loading content..."}
            height="500px"
            initialEditType="markdown"
            previewStyle="vertical"
            useCommandShortcut={true}
            key={aiOutput} // Force re-render when content changes
          />
        </div>
      )}
    </div>
  );
}

export default OutputSection;