const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;
chai.use(chaiHttp);

describe('Integrated Tester', () => {
  it('should return the correct status code', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct result', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('should return the correct headers', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return the correct status code and result when :id is a number', (done) => {
    chai.request(app)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    chai.request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('should return 404 when :id is missing', (done) => {
    chai.request(app)
      .get('/cart/')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('Available payments', () => {
  it('should return the correct status code and result', (done) => {
    chai.request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Login', () => {
  it('should return the correct status code and result for a valid username', (done) => {
    chai.request(app)
      .post('/login')
      .send({ userName: 'JohnDoe' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome JohnDoe');
        done();
      });
  });

  it('should return 400 when username is not provided', (done) => {
    chai.request(app)
      .post('/login')
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.equal('Username is required');
        done();
      });
  });
});
