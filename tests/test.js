let chai = require('chai');
let chaiHttp = require('chai-http');

module.exports = (app) => {
    chai.use(chaiHttp);
    chai.should();
    describe("Addresses", () => {
        describe("POST /", () => {
            it("should create a single address record", (done) => {
                let name = 'random';
                let street = '123 street';
                let city = 'some town';
                let state = 'NY';
                let country = 'United States of America';
                let params = `name=${name}&street=${street}&city=${city}&state=${state}&country=${country}`;
                 
                chai.request(app)
                    .post(`/api/addresses?${params}`)
                    .end((err, res) => {
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
        
        describe("GET /", () => {
            it("should get all address records", (done) => {
                chai.request(app)
                    .get('/api/addresses')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                      });
            });
            
            it("should get a single address record", (done) => {
                let someId = someId; // the id of one of the records you created;
                chai.request(app)
                    .get(`/addresses/${someId}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
        
        describe("PUT /", () => {
            it("should update a single address record", (done) => {
                let someId = someId; // the id of one of the records your created;
                let name = 'random';
                let street = '123 street';
                let city = 'some town';
                let state = 'NY';
                let country = 'United States of America';
                let params = `name=${name}&street=${street}&city=${city}&state=${state}&country=${country}`;
                 
                chai.request(app)
                    .put(`/api/addresses/${someId}?${params}`)
                    .end((err, res) => {
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
        
        describe("DELETE /", () => {
            it("should delete a single address record", (done) => {
                let someId = someId; // the id of one of the records your created;
                chai.request(app)
                    .delete(`/addresses/${someId}`)
                    .end((err, res) => {
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
};