const { expect } = require('chai');
const sinon = require('sinon');
const Artist = require('../models/artist.model');
const ArtistService = require('../services/artist.service');

describe('ArtistService', () => {
    describe('When creating an artist', () => {
        let sandbox;

        before(() => {
            sandbox = sinon.createSandbox();
            sandbox.stub(Artist, 'create').resolves(new Promise((res) => res(true)));
        });

        after(() => {
            sandbox.restore();
        });

        it('should return a successs message', async () => {
            const result = await ArtistService.create({});
            expect(result).to.have.property('message', 'Created successfully');
        });
    });
});