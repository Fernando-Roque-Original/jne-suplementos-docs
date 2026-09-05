/**
 * O pacote micromorph 0.4.5 publica a declaração fora do mapa de exports.
 * Este tipo local mantém o Quartz verificável no TypeScript 7.
 */
declare module "micromorph" {
  export default function micromorph(from: Node, to: Node): Promise<void>
}
