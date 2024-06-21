const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');

describe('', () => {
  const checkSoy = sinon.spy(console, 'log');
  it('checks if numbers round with spies and stubs', () => {
    sendPaymentRequestToApi(100, 20);
    const stubBoy = sinon.stub(Utils, 'calculateNumber');
    stubBoy.withArgs('SUM', 100, 20).returns(120);
    expect(checkSoy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    checkSoy.restore();
    stubBoy.restore();
  });
});
