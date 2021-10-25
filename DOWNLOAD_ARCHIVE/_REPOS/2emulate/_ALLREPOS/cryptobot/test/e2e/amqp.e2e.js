const { expect } = require('chai');
const sinon = require('sinon');

const amqp = require('../../lib/messaging/amqp');

describe('AMQP (e2e)', function () {
  this.timeout(200);

  describe('simple queue', () => {
    it('should send and receive a message', done => {
      const message = {nInserted: 10};

      amqp.receive(handler => {
        expect(handler.msg).to.eql(message);
        handler.connection.close();
        done();
      });

      setTimeout(function() {
        amqp.send(message);
      }, 30);
    });
  });

  describe('rpc queue', () =>{
    it('should send request and receive a replay', done =>{
      const message = { hello: 'world' };
      let connection;

      amqp.server(handler => {
        expect(handler.content).to.eql(JSON.stringify(message));
        connection = handler.connection;
        handler.reply('I got it ;)');
      });

      setTimeout(function () {
        amqp.client(message, (error, reply) => {
          expect(reply).to.equal('I got it ;)');
          connection.close();
          done();
        });
      }, 30);
    });
  });
});