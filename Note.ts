class Note
{
    private name : string;
    private midiValue : number;
    private frequency : number;
    private octave : number

    constructor(name : string, midiValue : number, frequency : number)
    {
        this.name = name;

        if(midiValue >= 21 && midiValue <= 108)
            this.midiValue = midiValue;
        
        if(frequency > 0)
            this.frequency = frequency;

        this.setOctave();
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

    private setOctave() : void
    {
        this.octave = Number(this.name.substr(this.name.length - 1)); // Cast the last char of name to a number;
    }
}

export {Note}