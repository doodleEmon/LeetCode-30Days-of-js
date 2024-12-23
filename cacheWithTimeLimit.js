class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const alreadyExist = this.cache.get(key);

    if (alreadyExist) {
      clearTimeout(alreadyExist.timerId);
    }

    const timerId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timerId });

    return Boolean(alreadyExist);
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    } else {
      return -1;
    }
  }

  count() {
    return this.cache.size;
  }
}

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
