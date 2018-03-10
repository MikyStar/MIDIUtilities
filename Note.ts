class Note
{
    private name : string;
    private midiValue : number;
    private frequency : number;
    private octave : number;
    private periodMs : number;

    constructor(name : string, midiValue : number, frequency : number, octave : number, periodMs : number)
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

    public getName() : string
    {
        return this.name;
    }

    public getMidiValue() : number
    {
        return this.midiValue;
    }

    public getFrequency() : number
    {
        return this.frequency;
    }

    public getOctave() : number
    {
        return this.octave;
    }

    public getPeriod() : number
    {
        return this.periodMs;
    }
}

export {Note}