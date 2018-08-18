/**
 * Server class that simulates server events being periodically sent.
 */
class Server {
  constructor() {
    this._listeners = [];

    setInterval(() => {
      this._fireEvent();
    }, Server.EVENT_FREQ);
  }

  addListener(listener) {
    if (this._listeners.indexOf(listener) < 0) {
      this._listeners.push(listener);
    }
  }

  removeListener(listener) {
    if (this._listeners.indexOf(listener) >= 0) {
      this._listeners.splice(this._listeners.indexOf(listener), 1);
    }
  }

  // in real life this would send a request to the server specifying what data it would like ie coffee, temp, fridge
  requestInitialState(keys) {
    return new Promise((resolve, reject) => {
      return resolve(Server.INITIAL_STATE);
    });
  }

  _fireEvent() {
    // only fire if we actually have listeners
    if (this._listeners.length > 0) {
      // fire a random event from ED.EVENTSET
      let randomNum = Server.randomNumber(0, ED.EVENTSET.length - 1);
      let event = ED.EVENTSET[randomNum];
      for (let listener of this._listeners) {
        let [id, action] = event.split(':');
        listener.handleEvent({
          id,
          action
        });
      }
    }
  }

  static get EVENT_FREQ() {
    return 1000;
  }

  static get INITIAL_STATE() {
    return {
      coffee: 6,
      temp: 22.5,
      fridge: 8
    };
  }

  static randomNumber(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}
