type TapType = 'sync' | 'async' | 'promise';

// tap is an event listener (plugin) - its name is the id
type TapOptions =
  | string // name -> options.name
  | { name: string; before?: string; stage?: number };

// abstract class -> signal that it is intended to be `extends`
declare abstract class Hook<T extends any[], U> {
  constructor();
  tap(options: TapOptions, f: (...args: T) => U): void;
  // intercept
}

// can only be tapped with synchronous functions `.tap`
// interface ISyncHook {}

// simply calls every function it tapped in a row
export class SyncHook<T extends any[]> extends Hook<T, void> {
  name: 'SyncHook';
  call(...args: T): void;
}

// Waterfall hooks pass the return value from each function to the next
export class SyncWaterfallHook<T extends any[], U> extends Hook<T, U> {
  name: 'SyncWaterfallHook';
  call(...args: T): U;
}

// Bail hooks allows exiting early if any of the function returns anything
export class SyncBailHook<T extends any[], U> extends Hook<T, U> {
  name: 'SyncBailHook';
  call(...args: T): U;
}

interface AsyncCallback<T extends any[]> {
  (err: null | Error, ...args: T): void;
}

declare abstract class AsyncHook<T extends any[], U> extends Hook<T, U> {
  promise(...args: T): Promise<U>;
  // tapAsync(options: TapOptions, f: Function): void;
  tapPromise(options: TapOptions, f: (...args: T) => Promise<U>): void;
}

export class AsyncParallelHook<T extends any[]> extends AsyncHook<T, void> {
  name: 'AsyncParallelHook';
}

export class AsyncSeriesHook<T extends any[], U> extends AsyncHook<T, U> {
  name: 'AsyncSeriesHook';
}

/*
export interface Tap {
  name: string;
  type: TapType;
  fn: Function;
  stage: number;
  context: boolean;
}
*/
