import ArrayBufferConverter from '../arraybuffer_convert';
import getBuffer from '../getbuffer';

test.each([
  '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  '{}',
  '{"data":{"user":{"id":1,"name":"Hitman","level":20}}}',
])('Testing class ArrayBufferConverter...', (expected) => {
  const arrayBuffer = new ArrayBufferConverter();
  const data = getBuffer(expected);

  arrayBuffer.load(data);
  const recieved = arrayBuffer.toString();

  // console.log('exp - ', expected);
  // console.log('rec - ', recieved);
  expect(expected).toEqual(recieved);
});
