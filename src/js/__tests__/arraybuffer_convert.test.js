import ArrayBufferConverter from '../arraybuffer_convert';
import getBuffer from '../getbuffer';

test.each([
  '{"someData":{"user":{"id":1,"name":"Daemon","level":10}}}',
  '{"":{"user":{"id":"123","name":"Zombie","attack":100}}}',
  '{}',
])('Should test class ArrayBufferConverter', (expected) => {
  const arrayBuffer = new ArrayBufferConverter();
  const someData = getBuffer(expected);

  arrayBuffer.load(someData);
  const recieved = arrayBuffer.toString();
  expect(expected).toEqual(recieved);
});
