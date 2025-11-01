'use client';

import { useEffect, useState, memo } from 'react';
import { MathJax } from 'better-react-mathjax';

interface LatexRendererProps {
  content: string;
  className?: string;
}

function LatexRenderer({ content, className = '' }: LatexRendererProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{content}</div>;
  }

  return (
    <MathJax className={className} inline>
      {content}
    </MathJax>
  );
}

// Memoize with custom comparison - only re-render if content or className changes
export default memo(LatexRenderer, (prevProps, nextProps) => {
  return prevProps.content === nextProps.content && 
         prevProps.className === nextProps.className;
});
