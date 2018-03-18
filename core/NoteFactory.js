export default class NoteFactory
{
    constructor()
    {
        this._arrayOfFrequencies = 
        [
            27.500, 29.135, 30.868, 32.703, 34.648, 36.708, 38.891, 41.203, 43.654, 46.249, 48.999, 51.913, 55.000, 58.270, 
            61.735, 65.406, 69.296, 73.416, 77.782, 82.407, 87.307, 92.499, 97.999, 103.83, 110.00, 116.54, 123.47, 130.81,
            138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94, 261.63, 277.18, 293.67,
            311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.26,
            698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77, 1046.5, 1108.7, 1174.7, 1244.5, 1318.5, 1396.9, 1480.0,
            1568.0, 1661.2, 1760.0, 1864.7, 1975.5, 2093.0, 2217.5, 2349.3, 2489.0, 2637.0, 2793.0, 2960.0, 3136.0, 3322.4,
            3520.0, 3729.3, 3951.1, 4186.0
        ];

        this._arroyOfPeriods =
        [
            36.36, 34.32, 32.40, 30.58, 28.86, 27.24, 25.71, 24.27, 22.91, 21.62, 20.41, 19.26, 18.18, 17.16, 16.20, 15.29,
            14.29, 13.62, 12.86, 12.13, 11.45, 10.81, 10.20, 9.631, 9.091, 8.581, 8.099, 7.645, 7.216, 6.811, 6.428, 6.068,
            5.272, 5.405, 5.102, 4.816, 4.545, 4.290, 4.050, 3.822, 3.608, 3.405, 3.214, 3.034, 2.863, 2.703, 2.551, 2.408,
            2.273, 2.145, 2.025, 1.190, 1.804, 1.703, 1.607, 1.517, 1.432, 1.351, 1.276, 1.204, 1.136, 1.073, 1.012, 0.9556,
            0.9020, 0.8513, 0.8034, 0.7584, 0.7159, 0.6757, 0.6378, 0.6020, 0.5682, 0.5363, 0.5062, 0.4778, 0.4510, 0.4257,
            0.4018, 0.3792, 0.3580, 0.3378, 0.3189, 0.3010, 0.2841, 0.2681, 0.2531, 0.2389
        ];

        this._arrayOfNotes = this.generateArrayOfNotes();
    }

    getArrayOfFrequencies()
    {
        return this._arrayOfFrequencies;
    }

    getArrayOfPeriods()
    {
        return this._arroyOfPeriods;
    }

    generateArrayOfNotes()
    {
        let arrayNotes = new Array();
        let firstOctave = [ ["A", 0], ["A#", 0], ["B", 0], ["C", 1], ["C#", 1], 
            ["D", 1], ["D#", 1], ["E", 1], ["F", 1], ["F#", 1], ["G", 1], ["G#", 1] ];

        for(let i = 0; i < 7; i++)
        {
            for(let j = 0; j < firstOctave.length; j++)
            {
                let currentNote = firstOctave[j];
                
                let newNote = new Array(currentNote[0], currentNote[1] + i);

                arrayNotes.push(newNote[0] + newNote[1].toString());
            }
        }

        function addLastNotes(array)
        {
            array.push("A7", "A#7", "B7", "C8", "C#8");
        }

        addLastNotes(arrayNotes);

        return arrayNotes;
        /* 
            ! TODO correct, length not natching others arrays
        */
    }

    getArrayOfNotes()
    {
        return this._arrayOfNotes;
    }
}

let factory = new NoteFactory();

console.log(factory.getArrayOfNotes());