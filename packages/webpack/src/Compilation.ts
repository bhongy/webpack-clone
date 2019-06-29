namespace Compilation {
  export interface Hooks {}
}

export default class Compilation {
  name: undefined | string = undefined;
  hooks: Compilation.Hooks = {};
  constructor() {}
}
