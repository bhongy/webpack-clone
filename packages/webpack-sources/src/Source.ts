import * as crypto from 'crypto';
import { SourceNode, RawSourceMap } from 'source-map';

export interface Source {
  source(): string;
  map(): null;
  sourceAndMap(): { source: string, map: null };
  size(): number;
  updateHash(hash: crypto.Hash): void;
}

export interface WithSourceMap {
  map(): RawSourceMap;
  sourceAndMap(): { source: string, map: RawSourceMap };
}

export interface WithSourceNode {
  // TODO: correct model `node` method's `options` type
  node(options?: Partial<{}>): SourceNode;
}
