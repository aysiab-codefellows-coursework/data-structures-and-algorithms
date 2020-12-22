'use strict';

const Cat = require('../animals/cat');
const Dog = require('../animals/dog')
const AnimalShelter = require('../fifo-animal-shelter');

describe('Animal Shelter', () => {
    let shelter;
    let iggy;
    let princess;
    let misterPB;
    let ruthie;

    beforeEach(() => {
        shelter = new AnimalShelter();
        iggy = new Dog('Iggy', 'Mutt', 5);
        princess = new Cat('Princess Carolyn', 'Domestic Short Hair', 11);
        misterPB = new Dog('Mr Peanutbutter', 'Yellow Lab', 9);
        ruthie = new Cat('Ruthie', 'Tuxedo', 2);
    })

    it('Can successfully enqueue a dog to the shelter', () => {
        shelter.enqueue(iggy);
        expect(shelter.front.name).toBe('Iggy');
    })

    it('Can successfully enqueue a cat to the shelter', () => {
        shelter.enqueue(princess);
        expect(shelter.front.name).toBe('Princess Carolyn');
    })

    it('Can successfully enqueue multiple pets into the shelter', () => {
        shelter.enqueue(iggy);
        shelter.enqueue(princess);
        shelter.enqueue(misterPB);
        shelter.enqueue(ruthie);
        expect(shelter.front.name).toBe('Iggy');
        expect(shelter.rear.name).toBe('Ruthie');
    })

    it('Can successfully dequeue a dog preference from the shelter', () => {
        shelter.enqueue(iggy);
        shelter.enqueue(princess);
        shelter.enqueue(misterPB);
        shelter.enqueue(ruthie);
        expect(shelter.dequeue('dog').name).toBe('Iggy');
    })

    it('Can successfully dequeue a cat preference from the shelter', () => {
        shelter.enqueue(iggy);
        shelter.enqueue(princess);
        shelter.enqueue(misterPB);
        shelter.enqueue(ruthie);
        expect(shelter.dequeue('cat').name).toBe('Princess Carolyn');
    })

    it('Can successfully return the pet that has been there the longest if no preference', () => {
        shelter.enqueue(misterPB);
        shelter.enqueue(iggy);
        shelter.enqueue(ruthie);
        shelter.enqueue(princess);
        expect(shelter.dequeue().name).toBe('Mr Peanutbutter');
    })
})