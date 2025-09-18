export const normalizeLatex = (expr: string): string => {
  return expr.trim()
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');
};

export const areMultiplicationTermsEqual = (a: string, b: string): boolean => {
  const norm = (s: string) => {
    let r = s.replace(/\s/g, '').toLowerCase();
    r = r.replace(/\\cdot/g, '').replace(/\*/g, '').replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
    r = r.replace(/^1([a-z\(])/i, '$1').replace(/([a-z\)])1(?![0-9])/gi, '$1').replace(/\*1/g, '').replace(/1\*/g, '');
    r = r.replace(/\(([^()]+)\)/g, '$1');
    const factors: string[] = [];
    let i = 0;
    while (i < r.length) {
      const v = r.slice(i).match(/^[a-z]+[0-9]*(\^[0-9]+)?/i);
      if (v) { factors.push(v[0]); i += v[0].length; continue; }
      const n = r.slice(i).match(/^[0-9]+(\.[0-9]+)?/);
      if (n) { factors.push(n[0]); i += n[0].length; continue; }
      i++;
    }
    return factors.sort().join('');
  };
  try { return norm(a) === norm(b); } catch { return a.replace(/\s/g,'').toLowerCase() === b.replace(/\s/g,'').toLowerCase(); }
};

export const checkEquivalent = (user: string, correct: string): boolean => {
  const u = normalizeLatex(user), c = normalizeLatex(correct);
  if (u === c) return true;
  
  const frac = /^([^\/]+)\/([^\/]+)$/;
  const um = u.match(frac), cm = c.match(frac);
  
  // Both are fractions - check if equivalent
  if (um && cm) {
    return areMultiplicationTermsEqual(um[1].trim(), cm[1].trim()) && 
           areMultiplicationTermsEqual(um[2].trim(), cm[2].trim());
  }
  
  // One is fraction, one is not - they can't be equivalent
  if (um || cm) return false;
  
  // Neither are fractions - check multiplication equivalence
  return areMultiplicationTermsEqual(u, c);
};


