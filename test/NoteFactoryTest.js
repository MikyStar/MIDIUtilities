import NoteFactory from '../core/NoteFactory';

const assert = require('assert');

describe("NoteFactory's tests\n", function()
{
    const noteFactory = new NoteFactory();
    const arrayOfFrequencies = noteFactory.getArrayOfFrequencies();
    const arrayOfPeriods = noteFactory.getArrayOfPeriods();
    const arrayOfNotes = noteFactory.getArrayOfNotes();

    const supposedSize = ( ( 108 - 21 ) + 1 );

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
            assert.equal(arrayOfPeriods.length, supposedSize);
        });
    });
    
    describe('All arrays have the same lenght', function()
    {
        it('arrayOfFrequencies and arrayOfPeriods have the same length', function()
        {
            assert.equal(arrayOfFrequencies.length, arrayOfPeriods.length);
        });

        it("arraysOfFrequencies and arrayOfNotes have the same length", function()
        {
            assert.equal(arrayOfFrequencies.length, arrayOfNotes.length);
        });
    });
});