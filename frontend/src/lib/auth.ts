export function isAuthenticated(): boolean {
  // Check if we have a session cookie or other authentication marker
  // This implementation depends on how you're handling auth state in your app
  return document.cookie.includes('connect.sid=') || localStorage.getItem('isAuthenticated') === 'true';
}