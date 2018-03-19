export default class Note
{
    constructor(name, midiValue, frequency, periodMs)
    {
        this._name = name;

        if(midiValue >= 21 && midiValue <= 108)
            this._midiValue = midiValue;
        
        if(frequency > 0)
            this._frequency = frequency;

        if(periodMs > 0)
            this._periodMs = periodMs;
    }

    getName() { return this._name;}

    getMidiValue() { return this._midiValue; }

    getFrequency() { return this._frequency; }

    getOctave() { return this._name.splice(-1); }

    getPeriod() { return this._periodMs; }
}