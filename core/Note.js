class Note
{
    constructor(name, midiValue, frequency, octave, periodMs)
    {
        this.name = name;

        if(midiValue >= 21 && midiValue <= 108)
            this.midiValue = midiValue;
        
        if(frequency > 0)
            this.frequency = frequency;

        if(octave >= 0)
            this.octave = octave;

        if(periodMs > 0)
            this.periodMs = periodMs;
    }
}