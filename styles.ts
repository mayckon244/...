import type { HairStyle, GlassesStyle } from '../types';
export const hairStyles: HairStyle[] = [
  { id: 'classic', name: 'Mod cut clássico', subtitle: 'Natural e equilibrado', description: 'Camadas suaves, volume natural e franja de comprimento moderado.' },
  { id: 'texture', name: 'Mod cut texturizado', subtitle: 'Textura moderna', description: 'Fios separados, volume moderado e franja irregular.' },
  { id: 'fringe', name: 'Franja desfiada', subtitle: 'Movimento leve', description: 'Camadas visíveis, franja desfiada e laterais naturais.' },
  { id: 'long', name: 'Mod cut longo', subtitle: 'Camadas alongadas', description: 'Franja texturizada, laterais mais longas e volume natural.' },
  { id: 'short', name: 'Mod cut curto', subtitle: 'Prático e texturizado', description: 'Topo curto, franja irregular e laterais organizadas sem raspagem extrema.' }
];
export const glassesStyles: GlassesStyle[] = [
  { id: 'acetate', name: 'Acetato clássico', subtitle: 'Retangular • médio', shape: 'rect', material: 'acetate', width: 0.43, height: 0.19, thickness: 5, bridge: 0.12 },
  { id: 'metal', name: 'Metal minimalista', subtitle: 'Retangular • fino', shape: 'rect', material: 'metal', width: 0.43, height: 0.18, thickness: 2, bridge: 0.12 },
  { id: 'soft-square', name: 'Quadrado suave', subtitle: 'Cantos arredondados', shape: 'roundrect', material: 'acetate', width: 0.44, height: 0.22, thickness: 5, bridge: 0.11 },
  { id: 'classic-black', name: 'Preto tradicional', subtitle: 'Retangular • marcante', shape: 'rect', material: 'acetate', width: 0.46, height: 0.19, thickness: 6, bridge: 0.1 },
  { id: 'rounded', name: 'Retangular arredondado', subtitle: 'Linhas suaves', shape: 'roundrect', material: 'acetate', width: 0.44, height: 0.2, thickness: 4, bridge: 0.12 }
];