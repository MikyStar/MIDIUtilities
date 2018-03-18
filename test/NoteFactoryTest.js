import NoteFactory from '../core/NoteFactory';

let assert = require('assert');

let noteFactory = new NoteFactory();
let arrayOfFrequencies = noteFactory.getArrayOfFrequencies();

let supposedSize = ( ( 108 - 21 ) + 1);

describe('All frequencies as been correctly add', function()
{
    it('Should return 88 (from 21 to 108)', function()
    {
        assert.equal(arrayOfFrequencies.length, supposedSize);
    });

    it('Frequencies\' array are ascending', function()
    {
        let result;

        for(let i = 0; i < (arrayOfFrequencies.length -1) ; i++)
        {
            if( !(arrayOfFrequencies[i] < arrayOfFrequencies[i+1]) )
            {
                result = false;
            }
        }

        result = true;

        assert.equal(result, true);
    });
});

describe('All periods as been correctly add', function()
{
    it('Should return 88 (from 21 to 108)', function()
    {
        let noteFactory = new NoteFactory();
        let arrayOfFrequencies = noteFactory.getArrayOfPeriods();

        assert.equal(arrayOfFrequencies.length, supposedSize);
    });
});

describe('arrayOfFrequencies and arrayOfPeriods match', function()
{
    it('The size of both arrays are the same', function()
    {
        let noteFactory = new NoteFactory();
        let arrayOfFrequencies = noteFactory.getArrayOfPeriods();
        let arrayOfPeriods = noteFactory.getArrayOfPeriods();

        assert.equal(arrayOfFrequencies.length, arrayOfPeriods.length);
    });
});