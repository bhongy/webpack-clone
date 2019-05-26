import {
  SyncHook,
  SyncBailHook,
  AsyncSeriesHook,
  AsyncParallelHook,
} from 'tapable';
import Compilation from './Compilation';

// TEMPORARY
interface Stats {}
interface Watching {}
class CompilationParams {
  // normalModuleFactory
  // contextModuleFactory
  readonly compilationDependencies = new Set<string>();
  // constructor(context, module) { }
}

// module internal
namespace Compiler {
  export interface Context {}
  export interface Props {
    watchMode: boolean;
  }
  export interface State {
    running: boolean;
  }

  export interface Hooks {
    shouldEmit: SyncBailHook<[Compilation], boolean>;
    done: AsyncSeriesHook<[Stats], void>;

    beforeCompile: AsyncSeriesHook<[CompilationParams], void>;
    compile: SyncHook<[CompilationParams]>;
    // thisCompilation
    // compilation
    make: AsyncParallelHook<[Compilation]>;
  }
}

class Compiler {
  name: undefined | string = undefined;

  context: Compiler.Context;
  props: Compiler.Props = { watchMode: false };
  state: Compiler.State = { running: false };

  hooks: Compiler.Hooks = {
    shouldEmit: new SyncBailHook(),
    done: new AsyncSeriesHook(),

    // normalModuleFactory
    // contextModuleFactory

    // after compilation params is created
    beforeCompile: new AsyncSeriesHook(),
    compile: new SyncHook(),
    // thisCompilation: new SyncHook(),
    // compilation: new SyncHook(),
    make: new AsyncParallelHook(),
  };

  constructor(context: Compiler.Context) {
    this.context = context;
  }

  compile(callback: (e: Error) => void): void {
    const params = new CompilationParams();
    this.hooks.beforeCompile
      .promise(params)
      .then(() => {
        this.hooks.compile.call(params);
        const compilation = this.newCompilation(params);
        return this.hooks.make.promise(compilation);
      })
      .catch(callback);
  }

  private newCompilation(params: CompilationParams): Compilation {
    const compilation = new Compilation();
    // compilation.compilationDependencies = params.compilationDependencies;
    return compilation;
  }
}

export default Compiler;
