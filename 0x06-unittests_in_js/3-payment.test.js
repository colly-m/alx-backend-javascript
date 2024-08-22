const sinon = require('sinon');
const { expect } = require('chai');
const { it, desribe } = require('mocha');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  it('should call Utils.calculateNumber with SUM and correct arguments', function() {
    const utilSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(utilSpy.calledOnce).to.be.true;
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;

    utilSpy.restore();
  });
});
