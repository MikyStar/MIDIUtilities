# Description

This is a simple API to get MIDI information on notes such as the frequency or the name.
<br>
The JSON file containing all the notes from octave 0 to 8 (A0 to C8) has been parsed by myself thanks to [those informations](https://newt.phys.unsw.edu.au/jw/notes.html).
<br>
You will also find some example of unit tests with the [MochaJS framework](https://mochajs.org/)

# Use

# What I learnt

- To launch a JavaScript project simply do `npm init` on the folder, I can also do `npm init -y` if a project already exists. A file named package.json will appear, it's like a build.gradle in Android : It manages the dependences of a project
- Babel is transcompiling my ES6 code into ES5 so that the brawser can interpret it
- npm is more than a package manager, I can create my very own commands to launch scripts juste like my `npm run test`