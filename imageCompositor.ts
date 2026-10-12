import type { GlassesStyle, GlassesAdjustments } from '../types';
import { renderGlasses } from './glassesRenderer';

export async function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Não foi possível abrir a imagem.'));
    image.src = url;
  });
}
export async function composeGlasses(url: string, style: GlassesStyle, adjustments: GlassesAdjustments): Promise<HTMLCanvasElement> {
  const image = await loadImage(url);
  return renderGlasses({ image, style, adjustments });
}
export function canvasToBlob(canvas: HTMLCanvasElement, type: 'image/png' | 'image/jpeg' = 'image/png'): Promise<Blob> {
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Falha ao exportar imagem.')), type, 0.94));
}