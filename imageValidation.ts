export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const MAX_IMAGE_BYTES = 15 * 1024 * 1024;
export function validateImageFile(file: Pick<File, 'type' | 'size' | 'name'>): string | null {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) return 'Formato não compatível. Envie uma imagem JPG, PNG ou WebP.';
  if (file.size <= 0) return 'O arquivo está vazio.';
  if (file.size > MAX_IMAGE_BYTES) return 'A imagem ultrapassa o limite de 15 MB.';
  return null;
}
export function safeBaseName(name: string): string {
  return name.replace(/\.[^/.]+$/, '').replace(/[^a-z0-9-_]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 64) || 'stylemirror';
}