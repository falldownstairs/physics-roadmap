let loadingPromise: Promise<any> | null = null;

export async function loadMathQuill(): Promise<any> {
  if (typeof window === 'undefined') return null;
  if ((window as any).MathQuill) return (window as any).MathQuill.getInterface(2);
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise((resolve) => {
    const finish = () => resolve((window as any).MathQuill.getInterface(2));

    const ensureMQ = () => {
      if ((window as any).MathQuill) {
        finish();
        return true;
      }
      return false;
    };

    // Load jQuery first (required by MathQuill)
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    jqueryScript.async = true;
    jqueryScript.onload = () => {
      // CSS
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.css';
      document.head.appendChild(css);

      // JS
      const mqScript = document.createElement('script');
      mqScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.js';
      mqScript.async = true;
      mqScript.onload = () => {
        // small delay to ensure global is ready
        setTimeout(() => {
          if (!ensureMQ()) finish();
        }, 50);
      };
      document.head.appendChild(mqScript);
    };
    document.head.appendChild(jqueryScript);
  });

  return loadingPromise;
}


