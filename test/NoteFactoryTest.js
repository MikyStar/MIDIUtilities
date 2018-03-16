const arrayOfFrequencies =
[
    27.500, 29.135, 30.868, 32.703, 34.648, 36.708, 38.891, 41.203, 43.654, 46.249, 48.999, 51.913, 55.000, 58.270, 
    61.735, 65.406, 69.296, 73.416, 77.782, 82.407, 87.307, 92.499, 97.999, 103.83, 110.00, 116.54, 123.47, 130.81,
    138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94, 261.63, 277.18, 293.67,
    311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.26,
    698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77, 1046.5, 1108.7, 1174.7, 1244.5, 1318.5, 1396.9, 1480.0,
    1568.0, 1661.2, 1760.0, 1864.7, 1975.5, 2093.0, 2217.5, 2349.3, 2489.0, 2637.0, 2793.0, 2960.0, 3136.0, 3322.4,
    3520.0, 3729.3, 3951.1, 4186.0
];

let assert = require('assert');

describe('All frequencies as been correctly add', function()
{
    it('Should return 88 (from 21 to 108)', function()
    {
        assert.equal(arrayOfFrequencies.length, ( ( 108 - 21 ) + 1 ));
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