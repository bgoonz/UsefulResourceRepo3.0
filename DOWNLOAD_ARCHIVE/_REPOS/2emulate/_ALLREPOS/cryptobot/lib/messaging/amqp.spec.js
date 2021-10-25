const { expect } = require('chai');
const sinon = require('sinon');
const amqplib = require('amqplib');

const amqp = require('./amqp');

describe('amqp', function () {
  this.timeout(100);
  const connection = { close: () => {}, createChannel: () => {} };
  const channel = {
    assertQueue: () => { },
    prefetch: () => { },
    consume: () => { },
    sendToQueue: () => { },
    ack: () => { }
  };
  const content = 'test-message1';
  const correlationId = 'be6f12c6-4690-42e2-a54b-40a9880578ff';
  const replyTo = 'amq.gen-reply-to';
  const reply = JSON.stringify({ msg: 'ok' });
  const order = { gdax: [{ side: 'buy', target: 1500 }] };

  beforeEach(() => {
    sinon.stub(amqplib, 'connect').resolves(connection);
    sinon.stub(connection, 'close');
    sinon.stub(connection, 'createChannel').resolves(channel);
    sinon.stub(channel, 'assertQueue').resolves();
    sinon.stub(channel, 'prefetch');
    sinon.stub(channel, 'sendToQueue');
    sinon.stub(channel, 'ack');
    // sinon.stub(channel, 'consume').resolves('localbot2', cb);
  });

  afterEach(() => {
    amqplib.connect.restore();
    connection.createChannel.restore();
    connection.close.restore();
    channel.assertQueue.restore();
    channel.prefetch.restore();
    channel.sendToQueue.restore();
    channel.ack.restore();
    if (channel.consume.restore) channel.consume.restore();
  });

  describe('# server', () =>{
    beforeEach(() => {
      sinon.stub(channel, 'consume').callsFake((queueName, reply) => {
        reply({
          content,
          properties: { replyTo, correlationId }
        });
        return Promise.resolve();
      });
    });

    it('should respond with callback', done => {
      amqp.server(msg => {
        expect(msg.content).to.equal('test-message1');
        msg.reply(reply);
      });

      setTimeout(() => {
        sinon.assert.calledWithExactly(channel.prefetch, 1);
        sinon.assert.calledWithExactly(channel.sendToQueue,
          replyTo,
          Buffer.from(reply),
          {correlationId}
        );
        done();
      }, 10);
    });
  });

  describe('# server observable', () => {
    it('should emit events', done => {
      let hasObservableReplied = false;

      sinon.stub(channel, 'consume').callsFake((queueName, reply) => {
        reply({
          content: JSON.stringify(order), // must be a STRING!
          properties: { replyTo, correlationId }
        });
        return Promise.resolve();
      });

      amqp.serverObservable().subscribe(
        data => {
          expect(data).to.eql(order);
          hasObservableReplied = true;
        }
      );

      setTimeout(() => {
        sinon.assert.calledWithExactly(channel.prefetch, 1);
        sinon.assert.calledWithExactly(channel.sendToQueue,
          replyTo,
          Buffer.from(JSON.stringify(order)),
          { correlationId }
        );
        if (hasObservableReplied) done();
      }, 10);
    });

    it('should close connection when unsubscribe', done => {
      let hasObservableReplied = false;

      sinon.stub(channel, 'consume').callsFake((queueName, reply) => {
        reply({
          content: JSON.stringify(order), // must be a STRING!
          properties: { replyTo, correlationId }
        });
        return Promise.resolve();
      });

      const subscription = amqp.serverObservable().subscribe(
        data => {
          expect(data).to.eql(order);
          hasObservableReplied = true;
        }
      );

      setTimeout(() => {
        subscription.unsubscribe();
        expect(connection.close.called).to.equal(true);
        if (hasObservableReplied) done();
      }, 10);
    });
  });
});
