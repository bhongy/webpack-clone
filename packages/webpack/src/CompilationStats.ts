namespace Stats {
  export interface Json {}
}

class CompilationStats {
  toJson(): Stats.Json {
    return {};
  }
}

export default CompilationStats;
