export default class ArrayBufferConverter {
  constructor() {
    this.arrayBuffer = null;
    this.bufferView = null;
  }

  load(buffer) {
    this.arrayBuffer = buffer;
  }

  toString() {
    this.bufferView = new Uint16Array(this.arrayBuffer);
    const str = String.fromCharCode(...this.bufferView);
    return str;
  }
}
