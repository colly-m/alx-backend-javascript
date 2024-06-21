const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumStub.restore();
    consoleLogSpy.restore();
  

  it('should validate Utils.calculateNumber with "SUM", 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumStub.calledOnce).to.be.true;
    expect(calculateNumStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log "The total is: 10"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
