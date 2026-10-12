export type HairStyle = {
  id: string; name: string; subtitle: string; description: string;
};
export type GlassesStyle = {
  id: string; name: string; subtitle: string; shape: 'rect' | 'roundrect'; material: 'acetate' | 'metal';
  width: number; height: number; thickness: number; bridge: number;
};
export type GlassesAdjustments = { x: number; y: number; scale: number; tilt: number; thickness: number };
export type PhotoState = { url: string; name: string; width: number; height: number };