'use strict';
/* eslint-disable no-undef */
const should = require('chai').should();
const sinon = require('sinon');
const rp = require('request-promise');
const Emagyar = require('../lib/emagyar');

describe('Emagyar', () => {
    let server;
    let emagyar;

    beforeEach(() => {
        const url = 'http://almafa:1234';
        const modules = ['emToken', 'emMorph', 'emTag'];
        sinon.stub(rp, 'get').resolves();
        emagyar = new Emagyar(url, modules);
    });

    afterEach(() => {
        rp.get.restore();
    });

    it('creates an Emagyar instance', () => {
        (emagyar instanceof Emagyar).should.be.equal(true);
        emagyar.should.have.property('url').with.to.equal('http://almafa:1234');
        emagyar.should.have.property('modules').with.to.deep.equal(['emToken', 'emMorph', 'emTag']);
    });

    it('uses default constructor values', () => {
        const emagyarDefault = new Emagyar();
        (emagyarDefault instanceof Emagyar).should.be.equal(true);
        emagyarDefault.should.have.property('url').with.to.equal('http://localhost:8000');
        emagyarDefault.should.have.property('modules').with.to.deep.equal(['emToken', 'emMorph', 'emTag', 'emCons', 'emDep', 'emChunk', 'emNer']);
    });
});