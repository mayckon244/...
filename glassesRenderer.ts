import type { GlassesStyle, GlassesAdjustments } from '../types';

export type GlassesRenderOptions = {
  image: HTMLImageElement;
  style: GlassesStyle;
  adjustments: GlassesAdjustments;
  outputScale?: number;
};

/**
 * Draws vector frames over a photo. Coordinates are relative to the photo,
 * not detected facial landmarks; users should align them with the manual controls.
 */
export function drawGlasses(ctx: CanvasRenderingContext2D, options: GlassesRenderOptions) {
  const { image, style, adjustments } = options;
  const w = image.naturalWidth || image.width;
  const h = image.naturalHeight || image.height;
  ctx.drawImage(image, 0, 0, w, h);
  const frameWidth = w * style.width * adjustments.scale;
  const frameHeight = h * style.height * adjustments.scale;
  const centerX = w * (0.5 + adjustments.x / 100);
  const centerY = h * (0.43 + adjustments.y / 100);
  const lensW = (frameWidth - style.bridge * w) / 2;
  const lensH = frameHeight;
  const gap = style.bridge * w;
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((adjustments.tilt * Math.PI) / 180);
  ctx.lineWidth = Math.max(1, style.thickness + adjustments.thickness);
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#111313';
  ctx.fillStyle = 'rgba(190, 215, 224, 0.045)';
  const leftX = -gap / 2 - lensW;
  const rightX = gap / 2;
  const radius = style.shape === 'roundrect' ? lensH * 0.24 : lensH * 0.1;
  const drawLens = (x: number) => {
    const y = -lensH / 2;
    ctx.beginPath();
    if ('roundRect' in ctx) ctx.roundRect(x, y, lensW, lensH, radius);
    else {
      ctx.moveTo(x + radius, y); ctx.lineTo(x + lensW - radius, y);
      ctx.quadraticCurveTo(x + lensW, y, x + lensW, y + radius);
      ctx.lineTo(x + lensW, y + lensH - radius);
      ctx.quadraticCurveTo(x + lensW, y + lensH, x + lensW - radius, y + lensH);
      ctx.lineTo(x + radius, y + lensH);
      ctx.quadraticCurveTo(x, y + lensH, x, y + lensH - radius);
      ctx.lineTo(x, y + radius); ctx.quadraticCurveTo(x, y, x + radius, y);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();
  };
  drawLens(leftX); drawLens(rightX);
  ctx.beginPath();
  ctx.moveTo(-gap / 2, -lensH * 0.12);
  ctx.quadraticCurveTo(0, -lensH * 0.23, gap / 2, -lensH * 0.12);
  ctx.stroke();
  // Short temple arms are intentionally subtle; exact ear alignment is not inferred.
  ctx.lineWidth = Math.max(1, ctx.lineWidth * 0.8);
  ctx.beginPath();
  ctx.moveTo(leftX, -lensH * 0.15); ctx.lineTo(leftX - w * 0.045, -lensH * 0.08);
  ctx.moveTo(rightX + lensW, -lensH * 0.15); ctx.lineTo(rightX + lensW + w * 0.045, -lensH * 0.08);
  ctx.stroke();
  ctx.restore();
}
export function renderGlasses(options: GlassesRenderOptions): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = options.image.naturalWidth || options.image.width;
  canvas.height = options.image.naturalHeight || options.image.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Não foi possível inicializar o Canvas.');
  drawGlasses(ctx, options);
  return canvas;
}