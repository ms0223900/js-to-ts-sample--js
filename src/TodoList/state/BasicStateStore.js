class BasicStateStore {
  #state;

  constructor(initState = {}) {
    this.#state = initState;
    this.listeners = [];
  }

  addListener(type, listenerFn) {
    this.listeners.push({
      type,
      listenerFn,
    });
  }

  #getNewState(partialNewState = {}) {
    return typeof partialNewState === 'function'
      ? partialNewState(this.#state)
      : partialNewState;
  }

  triggerAllListeners() {
    this.listeners.forEach((listener) => {
      listener.listenerFn(this.#state);
    });
  }

  getState() {
    return this.#state;
  }

  setState(partialNewState = {}) {
    const newState = this.#getNewState(partialNewState);
    this.#state = {
      ...this.#state,
      ...newState,
    };
    this.triggerAllListeners();
  }
}

export default BasicStateStore;
