const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');


describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    describe('insert()', () => {
        it('should insert the provided hobbit', async () => {
            let hobbit = await Hobbits.insert({name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer');
        });
    });
});