'use client';

import { useEffect, useState } from 'react';
import { MathJax } from 'better-react-mathjax';

interface LatexRendererProps {
  content: string;
  className?: string;
}

export default function LatexRenderer({ content, className = '' }: LatexRendererProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{content}</div>;
  }

  return (
    <MathJax className={className} inline dynamic>
      {content}
    </MathJax>
  );
}
