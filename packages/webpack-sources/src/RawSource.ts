import * as crypto from 'crypto';
import { SourceNode } from 'source-map';
import { Source, WithSourceNode } from './Source';

export class RawSource implements Source, WithSourceNode {
  constructor(private readonly rawSource: string) {}

  source(): string {
    return this.rawSource;
  }

  // TODO: review `options` type
  map(options?: unknown): null {
    return null;
  }

  // TODO: review `options` type
  sourceAndMap(options?: unknown) {
    return {
      source: this.rawSource,
      map: null,
    };
  }

  size(): number {
    return Buffer.byteLength(this.rawSource);
  }

  updateHash(hash: crypto.Hash): void {
    hash.update(this.rawSource);
  }

  // TODO: review `options` type
  node(options?: unknown): SourceNode {
    return new SourceNode(null, null, null, this.rawSource);
  }

  // listMap(options): SourceListMap
}
