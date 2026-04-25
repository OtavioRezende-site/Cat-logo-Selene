/**
 * Ensures an image path correctly points to the public root.
 * If the path doesn't start with '/' and isn't external, it prepends '/'.
 */
export function getImagePath(path: string | undefined): string {
  if (!path) return '';
  
  // If it's an external URL (starts with http) or already starts with '/', return as is
  if (path.startsWith('http') || path.startsWith('/')) {
    return path;
  }
  
  // Prepend / to ensure it's loaded from the public root
  return `/${path}`;
}
