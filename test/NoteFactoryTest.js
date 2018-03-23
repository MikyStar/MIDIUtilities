import NoteFactory from '../core/NoteFactory';
import Note from '../core/Note';

const assert = require('assert');

describe("NoteFactory's tests\n", function()
{
    const noteFactory = new NoteFactory();
    const arrayOfFrequencies = noteFactory.getArrayOfFrequencies();
    const arrayOfPeriods = noteFactory.getArrayOfPeriods();
    const arrayNameOfNotes = noteFactory.getArrayNameOfNotes();
    const arrayNotes = noteFactory.getNotes();

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

        it("arraysOfFrequencies and arrayNameOfNotes have the same length", function()
        {
            assert.equal(arrayOfFrequencies.length, arrayNameOfNotes.length);
        });

        it("The array of Notes generated have the same length as the others", function()
        {
            assert.equal(arrayOfFrequencies.length, arrayNotes.length); 
        });
    });

    describe('Notes have been properly generated', function()
    {
        const cOneSharp = new Note("C#1", 25, 34.648, 28.86);
        const presumesCOneSharp = arrayNotes[4];

        describe("A manually add note 'C#1' is the same as it should have been generated", function()
        {
            it("Test name", function()
            {
                assert.equal(cOneSharp.getName(), presumesCOneSharp.getName());
            });

            it("Test midi value", function()
            {
                assert.equal(cOneSharp.getMidiValue(), presumesCOneSharp.getMidiValue());
            });

            it("Test frequency", function()
            {
                assert.equal(cOneSharp.getFrequency(), presumesCOneSharp.getFrequency());
            });

            it("Test period", function()
            {
                assert.equal(cOneSharp.getPeriod(), presumesCOneSharp.getPeriod());
            });
        });
    }); 
});