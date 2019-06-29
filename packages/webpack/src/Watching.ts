import Compiler from '@webpack/Compiler';
import CompilationStats from '@webpack/CompilationStats';

namespace Watching {
  export interface PublicInterface {
    // watch(): void;
    // invalidate(): void;
    // close(): void;
  }
}

export default class Watching implements Watching.PublicInterface {
  private readonly compiler: Compiler;
  private readonly handler: (err: Error, stats: CompilationStats) => void;
  // private startTime: null | Date;
  // private state: {
  //   running: boolean;
  // };

  constructor(compiler: Compiler, handler: (err: Error, stats: CompilationStats) => void) {
    this.compiler = compiler;
    this.handler = handler;
  }
}
