const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()
    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    expect(queue.size()).toEqual(0);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    expect(queue.add(1)).toEqual(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    expect(queue.peek(0)).toEqual(1);
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add(2);
    queue.add(4);
    queue.add(6);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.size()).toEqual(2);
  
  })
});