import * as crypto from 'crypto';
// shouldn't Chunk depends on Module not this way around?
import Chunk from '@webpack/Chunk'

class Module {
  private readonly id: string; // for debugging, human-readable
  readonly hash: string; // NonCryptoHash

  // Graph (per Compilation)
  // reasons
  private readonly chunks: Set<Chunk>;
  readonly dependencies: unknown[];

  // usedExports ???

  constructor(id: string) {
    this.id = id;

    // TODO: use non-crypto hash this just to hash a string not about encryption
    // idea is to use a short (non-fix-length) hash as the actual "id" for the module but same content will produce same hash
    this.hash = crypto
      .createHash('md5')
      .update(id)
      .digest('hex');

    this.chunks = new Set();
    this.dependencies = [];
  }

  toString(): string {
    return `Module[${this.id}]`;
  }

  // -- not an exhausted list
  // disconnect
  // unseal

  /**
   * interesting ... chunk contains the module
   * so the Module keeps a list of its parents (chunks)
   * should chunks know which modules they have
   * not this way around - is it two-way?
   */
  // addChunk
  // removeChunk
  // (chunk)isInChunk
  // getChunks
  // setChunks
  // getNumberOfChunks
  // chunksIterable -> SortableSet<Chunk>
  // (otherModule)hasEqualsChunks

  // addReason
  // removeReason
  // (chunk)hasReasonForChunk
  // hasReasons
  // rewriteChunkInReasons(oldChunk, newChunk_s_)

  // isUsed
  // isProvided
  // isEntryModule
  // optional (isOptional?)
  // needRebuild(fileTimestamps, contextTimestamps)

  // unbuild

  // updateHash
  // sortItems
}

export default Module;
