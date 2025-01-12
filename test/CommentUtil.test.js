const { describe, it } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const sinon = require('sinon');
const fs = require('fs').promises;


let baseUrl;
describe('Comments API', () => {
    before(async () => {
        const { address, port } = await server.address();
        baseUrl = `http://${address == '::' ? 'localhost' : address}:${port}`;
    });
    after(() => {
        return new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    });

    let count = 0;
    let commentID;

    describe('POST /add-comment', () => {
        it('Should return 500 for validation errors', (done) => {
            chai.request(baseUrl)
                .post('/add-comment')
                .send({
                    comment: '', owner: 'Tester', taskid: '111', id: '000000001'
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('All fields are required');
                    done();
                });
        });
        it('Should have added a new comment', (done) => {
            chai.request(baseUrl)
                .post('/add-comment')
                .send({
                    comment: 'Test Comment', owner: 'Tester', taskid: '111', id: '000000001'
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    count = JSON.stringify(res.body.data.length)
                    console.log(count)
                    taskID = JSON.stringify(res.body.data[count-1].taskid)
                    console.log("Comment id first " + commentID)
                    done();
                });
        });
        it('Should have give status 400 error when adding comment with missing values', (done) =>{
            chai.request(baseUrl)
                .post('/add-comment')
                .send({
                    comment: 'Test Comment', owner: '', taskid: '111', id: '000000001'
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });
        });
        //Stubbing for some reason can't get it to work
        it('Should have given status 500 error when adding comment with wrong or missing values', (done) =>{
            const writeJSONStub = sinon.stub(fs, 'writeFile').rejects(new Error('Write error wrong'));
            chai.request(baseUrl)
                .post('/add-comment')
                .send({
                    comment: 'Test Comment', owner: 'Tester', taskid: '111', id: '000000001'
                })
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    writeJSONStub.restore();
                    done();
                });
        });
    });

    describe('GET /get-comment/:id', () => {
        it('Should return comment with the correct id', (done) => {
            taskID = taskID.replace(/"/g, '');
            //comment id is string error
            console.log(`/get-comment/${taskID}`);
            chai.request(baseUrl)
                .get(`/get-comment/${taskID}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
        it('Should return comment with the correct id', (done) => {
            taskID = "100000"
            //comment id is string error
            console.log(`/get-comment/${taskID}`);
            chai.request(baseUrl)
                .get(`/get-comment/${taskID}`)
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    done();
                });
        });
    });
});