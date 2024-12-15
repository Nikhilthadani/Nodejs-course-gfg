import EventsEmitter from "events";

export default class EventEmitter {
  static #eventEmitter;

  static getEventEmitter() {
    if (!this.#eventEmitter) {
      this.#eventEmitter = new EventsEmitter();
      this.#eventEmitter;
    }

    return this.#eventEmitter;
  }
}
