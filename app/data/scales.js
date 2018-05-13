let scales_data = [
  {
    "root":"C",
    "mode":"Major",
    "notes":["C", "D", "E", "F", "G", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"Major",
    "notes":["C#", "D#", "F", "F#", "G#", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"Major",
    "notes":["D", "E", "F#", "G", "A", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"Major",
    "notes":["D#", "F", "G", "G#", "A#", "C", "D"]
  },
  {
    "root":"E",
    "mode":"Major",
    "notes":["E", "F#", "G#", "A", "B", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"Major",
    "notes":["F", "G", "A", "A#", "C", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"Major",
    "notes":["F#", "G#", "A#", "B", "C#", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"Major",
    "notes":["G", "A", "B", "C", "D", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"Major",
    "notes":["G#", "A#", "C", "C#", "D#", "F", "G"]
  },
  {
    "root":"A",
    "mode":"Major",
    "notes":["A", "B", "C#", "D", "E", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"Major",
    "notes":["A#", "C", "D", "D#", "F", "G", "A"]
  },
  {
    "root":"B",
    "mode":"Major",
    "notes":["B", "C#", "D#", "E", "F#", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"natural minor",
    "notes":["C", "D", "D#", "F", "G", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"natural minor",
    "notes":["C#", "D#", "E", "F#", "G#", "A", "B"]
  },
  {
    "root":"D",
    "mode":"natural minor",
    "notes":["D", "E", "F", "G", "A", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"natural minor",
    "notes":["D#", "F", "F#", "G#", "A#", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"natural minor",
    "notes":["E", "F#", "G", "A", "B", "C", "D"]
  },
  {
    "root":"F",
    "mode":"natural minor",
    "notes":["F", "G", "G#", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"natural minor",
    "notes":["F#", "G#", "A", "B", "C#", "D", "E"]
  },
  {
    "root":"G",
    "mode":"natural minor",
    "notes":["G", "A", "A#", "C", "D", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"natural minor",
    "notes":["G#", "A#", "B", "C#", "D#", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"natural minor",
    "notes":["A", "B", "C", "D", "E", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"natural minor",
    "notes":["A#", "C", "C#", "D#", "F", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"natural minor",
    "notes":["B", "C#", "D", "E", "F#", "G", "A"]
  },
  {
    "root":"C",
    "mode":"harmonic minor",
    "notes":["C", "D", "D#", "F", "G", "G#", "B"]
  },
  {
    "root":"C#",
    "mode":"harmonic minor",
    "notes":["C#", "D#", "E", "F#", "G#", "A", "C"]
  },
  {
    "root":"D",
    "mode":"harmonic minor",
    "notes":["D", "E", "F", "G", "A", "A#", "C#"]
  },
  {
    "root":"D#",
    "mode":"harmonic minor",
    "notes":["D#", "F", "F#", "G#", "A#", "B", "D"]
  },
  {
    "root":"E",
    "mode":"harmonic minor",
    "notes":["E", "F#", "G", "A", "B", "C", "D#"]
  },
  {
    "root":"F",
    "mode":"harmonic minor",
    "notes":["F", "G", "G#", "A#", "C", "C#", "E"]
  },
  {
    "root":"F#",
    "mode":"harmonic minor",
    "notes":["F#", "G#", "A", "B", "C#", "D", "F"]
  },
  {
    "root":"G",
    "mode":"harmonic minor",
    "notes":["G", "A", "A#", "C", "D", "D#", "F#"]
  },
  {
    "root":"G#",
    "mode":"harmonic minor",
    "notes":["G#", "A#", "B", "C#", "D#", "E", "G"]
  },
  {
    "root":"A",
    "mode":"harmonic minor",
    "notes":["A", "B", "C", "D", "E", "F", "G#"]
  },
  {
    "root":"A#",
    "mode":"harmonic minor",
    "notes":["A#", "C", "C#", "D#", "F", "F#", "A"]
  },
  {
    "root":"B",
    "mode":"harmonic minor",
    "notes":["B", "C#", "D", "E", "F#", "G", "A#"]
  },
  {
    "root":"C",
    "mode":"melodic minor",
    "notes":["C", "D", "D#", "F", "G", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"melodic minor",
    "notes":["C#", "D#", "E", "F#", "G#", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"melodic minor",
    "notes":["D", "E", "F", "G", "A", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"melodic minor",
    "notes":["D#", "F", "F#", "G#", "A#", "C", "D"]
  },
  {
    "root":"E",
    "mode":"melodic minor",
    "notes":["E", "F#", "G", "A", "B", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"melodic minor",
    "notes":["F", "G", "G#", "A#", "C", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"melodic minor",
    "notes":["F#", "G#", "A", "B", "C#", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"melodic minor",
    "notes":["G", "A", "A#", "C", "D", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"melodic minor",
    "notes":["G#", "A#", "B", "C#", "D#", "F", "G"]
  },
  {
    "root":"A",
    "mode":"melodic minor",
    "notes":["A", "B", "C", "D", "E", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"melodic minor",
    "notes":["A#", "C", "C#", "D#", "F", "G", "A"]
  },
  {
    "root":"B",
    "mode":"melodic minor",
    "notes":["B", "C#", "D", "E", "F#", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"major pentatonic",
    "notes":["C", "D", "E", "G", "A"]
  },
  {
    "root":"C#",
    "mode":"major pentatonic",
    "notes":["C#", "D#", "F", "G#", "A#"]
  },
  {
    "root":"D",
    "mode":"major pentatonic",
    "notes":["D", "E", "F#", "A", "B"]
  },
  {
    "root":"D#",
    "mode":"major pentatonic",
    "notes":["D#", "F", "G", "A#", "C"]
  },
  {
    "root":"E",
    "mode":"major pentatonic",
    "notes":["E", "F#", "G#", "B", "C#"]
  },
  {
    "root":"F",
    "mode":"major pentatonic",
    "notes":["F", "G", "A", "C", "D"]
  },
  {
    "root":"F#",
    "mode":"major pentatonic",
    "notes":["F#", "G#", "A#", "C#", "D#"]
  },
  {
    "root":"G",
    "mode":"major pentatonic",
    "notes":["G", "A", "B", "D", "E"]
  },
  {
    "root":"G#",
    "mode":"major pentatonic",
    "notes":["G#", "A#", "C", "D#", "F"]
  },
  {
    "root":"A",
    "mode":"major pentatonic",
    "notes":["A", "B", "C#", "E", "F#"]
  },
  {
    "root":"A#",
    "mode":"major pentatonic",
    "notes":["A#", "C", "D", "F", "G"]
  },
  {
    "root":"B",
    "mode":"major pentatonic",
    "notes":["B", "C#", "D#", "F#", "G#"]
  },
  {
    "root":"C",
    "mode":"minor pentatonic",
    "notes":["C", "D#", "F", "G", "A#"]
  },
  {
    "root":"C#",
    "mode":"minor pentatonic",
    "notes":["C#", "E", "F#", "G#", "B"]
  },
  {
    "root":"D",
    "mode":"minor pentatonic",
    "notes":["D", "F", "G", "A", "C"]
  },
  {
    "root":"D#",
    "mode":"minor pentatonic",
    "notes":["D#", "F#", "G#", "A#", "C#"]
  },
  {
    "root":"E",
    "mode":"minor pentatonic",
    "notes":["E", "G", "A", "B", "D"]
  },
  {
    "root":"F",
    "mode":"minor pentatonic",
    "notes":["F", "G#", "A#", "C", "D#"]
  },
  {
    "root":"F#",
    "mode":"minor pentatonic",
    "notes":["F#", "A", "B", "C#", "E"]
  },
  {
    "root":"G",
    "mode":"minor pentatonic",
    "notes":["G", "A#", "C", "D", "F"]
  },
  {
    "root":"G#",
    "mode":"minor pentatonic",
    "notes":["G#", "B", "C#", "D#", "F#"]
  },
  {
    "root":"A",
    "mode":"minor pentatonic",
    "notes":["A", "C", "D", "E", "G"]
  },
  {
    "root":"A#",
    "mode":"minor pentatonic",
    "notes":["A#", "C#", "D#", "F", "G#"]
  },
  {
    "root":"B",
    "mode":"minor pentatonic",
    "notes":["B", "D", "E", "F#", "A"]
  },
  {
    "root":"C",
    "mode":"blues",
    "notes":["C", "D#", "F", "F#", "G", "A#"]
  },
  {
    "root":"C#",
    "mode":"blues",
    "notes":["C#", "E", "F#", "G", "G#", "B"]
  },
  {
    "root":"D",
    "mode":"blues",
    "notes":["D", "F", "G", "G#", "A", "C"]
  },
  {
    "root":"D#",
    "mode":"blues",
    "notes":["D#", "F#", "G#", "A", "A#", "C#"]
  },
  {
    "root":"E",
    "mode":"blues",
    "notes":["E", "G", "A", "A#", "B", "D"]
  },
  {
    "root":"F",
    "mode":"blues",
    "notes":["F", "G#", "A#", "B", "C", "D#"]
  },
  {
    "root":"F#",
    "mode":"blues",
    "notes":["F#", "A", "B", "C", "C#", "E"]
  },
  {
    "root":"G",
    "mode":"blues",
    "notes":["G", "A#", "C", "C#", "D", "F"]
  },
  {
    "root":"G#",
    "mode":"blues",
    "notes":["G#", "B", "C#", "D", "D#", "F#"]
  },
  {
    "root":"A",
    "mode":"blues",
    "notes":["A", "C", "D", "D#", "E", "G"]
  },
  {
    "root":"A#",
    "mode":"blues",
    "notes":["A#", "C#", "D#", "E", "F", "G#"]
  },
  {
    "root":"B",
    "mode":"blues",
    "notes":["B", "D", "E", "F", "F#", "A"]
  },
  {
    "root":"C",
    "mode":"minor blues",
    "notes":["C", "D", "D#", "F", "F#", "G", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"minor blues",
    "notes":["C#", "D#", "E", "F#", "G", "G#", "A", "B"]
  },
  {
    "root":"D",
    "mode":"minor blues",
    "notes":["D", "E", "F", "G", "G#", "A", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"minor blues",
    "notes":["D#", "F", "F#", "G#", "A", "A#", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"minor blues",
    "notes":["E", "F#", "G", "A", "A#", "B", "C", "D"]
  },
  {
    "root":"F",
    "mode":"minor blues",
    "notes":["F", "G", "G#", "A#", "B", "C", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"minor blues",
    "notes":["F#", "G#", "A", "B", "C", "C#", "D", "E"]
  },
  {
    "root":"G",
    "mode":"minor blues",
    "notes":["G", "A", "A#", "C", "C#", "D", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"minor blues",
    "notes":["G#", "A#", "B", "C#", "D", "D#", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"minor blues",
    "notes":["A", "B", "C", "D", "D#", "E", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"minor blues",
    "notes":["A#", "C", "C#", "D#", "E", "F", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"minor blues",
    "notes":["B", "C#", "D", "E", "F", "F#", "G", "A"]
  },
  {
    "root":"C",
    "mode":"major blues",
    "notes":["C", "D", "D#", "E", "F", "F#", "G", "A", "A#"]
  },
  {
    "root":"C#",
    "mode":"major blues",
    "notes":["C#", "D#", "E", "F", "F#", "G", "G#", "A#", "B"]
  },
  {
    "root":"D",
    "mode":"major blues",
    "notes":["D", "E", "F", "F#", "G", "G#", "A", "B", "C"]
  },
  {
    "root":"D#",
    "mode":"major blues",
    "notes":["D#", "F", "F#", "G", "G#", "A", "A#", "C", "C#"]
  },
  {
    "root":"E",
    "mode":"major blues",
    "notes":["E", "F#", "G", "G#", "A", "A#", "B", "C#", "D"]
  },
  {
    "root":"F",
    "mode":"major blues",
    "notes":["F", "G", "G#", "A", "A#", "B", "C", "D", "D#"]
  },
  {
    "root":"F#",
    "mode":"major blues",
    "notes":["F#", "G#", "A", "A#", "B", "C", "C#", "D#", "E"]
  },
  {
    "root":"G",
    "mode":"major blues",
    "notes":["G", "A", "A#", "B", "C", "C#", "D", "E", "F"]
  },
  {
    "root":"G#",
    "mode":"major blues",
    "notes":["G#", "A#", "B", "C", "C#", "D", "D#", "F", "F#"]
  },
  {
    "root":"A",
    "mode":"major blues",
    "notes":["A", "B", "C", "C#", "D", "D#", "E", "F#", "G"]
  },
  {
    "root":"A#",
    "mode":"major blues",
    "notes":["A#", "C", "C#", "D", "D#", "E", "F", "G", "G#"]
  },
  {
    "root":"B",
    "mode":"major blues",
    "notes":["B", "C#", "D", "D#", "E", "F", "F#", "G#", "A"]
  },
  {
    "root":"C",
    "mode":"augmented",
    "notes":["C", "D", "E", "F#", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"augmented",
    "notes":["C#", "D#", "F", "G", "A", "B"]
  },
  {
    "root":"D",
    "mode":"augmented",
    "notes":["D", "E", "F#", "G#", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"augmented",
    "notes":["D#", "F", "G", "A", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"augmented",
    "notes":["E", "F#", "G#", "A#", "C", "D"]
  },
  {
    "root":"F",
    "mode":"augmented",
    "notes":["F", "G", "A", "B", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"augmented",
    "notes":["F#", "G#", "A#", "C", "D", "E"]
  },
  {
    "root":"G",
    "mode":"augmented",
    "notes":["G", "A", "B", "C#", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"augmented",
    "notes":["G#", "A#", "C", "D", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"augmented",
    "notes":["A", "B", "C#", "D#", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"augmented",
    "notes":["A#", "C", "D", "E", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"augmented",
    "notes":["B", "C#", "D#", "F", "G", "A"]
  },
  {
    "root":"C",
    "mode":"diminished",
    "notes":["C", "D", "D#", "F", "F#", "G#", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"diminished",
    "notes":["C#", "D#", "E", "F#", "G", "A", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"diminished",
    "notes":["D", "E", "F", "G", "G#", "A#", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"diminished",
    "notes":["D#", "F", "F#", "G#", "A", "B", "C", "D"]
  },
  {
    "root":"E",
    "mode":"diminished",
    "notes":["E", "F#", "G", "A", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"diminished",
    "notes":["F", "G", "G#", "A#", "B", "C#", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"diminished",
    "notes":["F#", "G#", "A", "B", "C", "D", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"diminished",
    "notes":["G", "A", "A#", "C", "C#", "D#", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"diminished",
    "notes":["G#", "A#", "B", "C#", "D", "E", "F", "G"]
  },
  {
    "root":"A",
    "mode":"diminished",
    "notes":["A", "B", "C", "D", "D#", "F", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"diminished",
    "notes":["A#", "C", "C#", "D#", "E", "F#", "G", "A"]
  },
  {
    "root":"B",
    "mode":"diminished",
    "notes":["B", "C#", "D", "E", "F", "G", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"Phrygian-Dominant",
    "notes":["C", "C#", "E", "F", "G", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"Phrygian-Dominant",
    "notes":["C#", "D", "F", "F#", "G#", "A", "B"]
  },
  {
    "root":"D",
    "mode":"Phrygian-Dominant",
    "notes":["D", "D#", "F#", "G", "A", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"Phrygian-Dominant",
    "notes":["D#", "E", "G", "G#", "A#", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"Phrygian-Dominant",
    "notes":["E", "F", "G#", "A", "B", "C", "D"]
  },
  {
    "root":"F",
    "mode":"Phrygian-Dominant",
    "notes":["F", "F#", "A", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"Phrygian-Dominant",
    "notes":["F#", "G", "A#", "B", "C#", "D", "E"]
  },
  {
    "root":"G",
    "mode":"Phrygian-Dominant",
    "notes":["G", "G#", "B", "C", "D", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"Phrygian-Dominant",
    "notes":["G#", "A", "C", "C#", "D#", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"Phrygian-Dominant",
    "notes":["A", "A#", "C#", "D", "E", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"Phrygian-Dominant",
    "notes":["A#", "B", "D", "D#", "F", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"Phrygian-Dominant",
    "notes":["B", "C", "D#", "E", "F#", "G", "A"]
  },
  {
    "root":"C",
    "mode":"Dorian",
    "notes":["C", "D", "D#", "F", "G", "A", "A#"]
  },
  {
    "root":"C#",
    "mode":"Dorian",
    "notes":["C#", "D#", "E", "F#", "G#", "A#", "B"]
  },
  {
    "root":"D",
    "mode":"Dorian",
    "notes":["D", "E", "F", "G", "A", "B", "C"]
  },
  {
    "root":"D#",
    "mode":"Dorian",
    "notes":["D#", "F", "F#", "G#", "A#", "C", "C#"]
  },
  {
    "root":"E",
    "mode":"Dorian",
    "notes":["E", "F#", "G", "A", "B", "C#", "D"]
  },
  {
    "root":"F",
    "mode":"Dorian",
    "notes":["F", "G", "G#", "A#", "C", "D", "D#"]
  },
  {
    "root":"F#",
    "mode":"Dorian",
    "notes":["F#", "G#", "A", "B", "C#", "D#", "E"]
  },
  {
    "root":"G",
    "mode":"Dorian",
    "notes":["G", "A", "A#", "C", "D", "E", "F"]
  },
  {
    "root":"G#",
    "mode":"Dorian",
    "notes":["G#", "A#", "B", "C#", "D#", "F", "F#"]
  },
  {
    "root":"A",
    "mode":"Dorian",
    "notes":["A", "B", "C", "D", "E", "F#", "G"]
  },
  {
    "root":"A#",
    "mode":"Dorian",
    "notes":["A#", "C", "C#", "D#", "F", "G", "G#"]
  },
  {
    "root":"B",
    "mode":"Dorian",
    "notes":["B", "C#", "D", "E", "F#", "G#", "A"]
  },
  {
    "root":"C",
    "mode":"Phrygian",
    "notes":["C", "C#", "D#", "F", "G", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"Phrygian",
    "notes":["C#", "D", "E", "F#", "G#", "A", "B"]
  },
  {
    "root":"D",
    "mode":"Phrygian",
    "notes":["D", "D#", "F", "G", "A", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"Phrygian",
    "notes":["D#", "E", "F#", "G#", "A#", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"Phrygian",
    "notes":["E", "F", "G", "A", "B", "C", "D"]
  },
  {
    "root":"F",
    "mode":"Phrygian",
    "notes":["F", "F#", "G#", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"Phrygian",
    "notes":["F#", "G", "A", "B", "C#", "D", "E"]
  },
  {
    "root":"G",
    "mode":"Phrygian",
    "notes":["G", "G#", "A#", "C", "D", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"Phrygian",
    "notes":["G#", "A", "B", "C#", "D#", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"Phrygian",
    "notes":["A", "A#", "C", "D", "E", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"Phrygian",
    "notes":["A#", "B", "C#", "D#", "F", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"Phrygian",
    "notes":["B", "C", "D", "E", "F#", "G", "A"]
  },
  {
    "root":"C",
    "mode":"Aeolian",
    "notes":["C", "D", "D#", "F", "G", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"Aeolian",
    "notes":["C#", "D#", "E", "F#", "G#", "A", "B"]
  },
  {
    "root":"D",
    "mode":"Aeolian",
    "notes":["D", "E", "F", "G", "A", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"Aeolian",
    "notes":["D#", "F", "F#", "G#", "A#", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"Aeolian",
    "notes":["E", "F#", "G", "A", "B", "C", "D"]
  },
  {
    "root":"F",
    "mode":"Aeolian",
    "notes":["F", "G", "G#", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"Aeolian",
    "notes":["F#", "G#", "A", "B", "C#", "D", "E"]
  },
  {
    "root":"G",
    "mode":"Aeolian",
    "notes":["G", "A", "A#", "C", "D", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"Aeolian",
    "notes":["G#", "A#", "B", "C#", "D#", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"Aeolian",
    "notes":["A", "B", "C", "D", "E", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"Aeolian",
    "notes":["A#", "C", "C#", "D#", "F", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"Aeolian",
    "notes":["B", "C#", "D", "E", "F#", "G", "A"]
  },
  {
    "root":"C",
    "mode":"Ionian",
    "notes":["C", "D", "E", "F", "G", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"Ionian",
    "notes":["C#", "D#", "F", "F#", "G#", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"Ionian",
    "notes":["D", "E", "F#", "G", "A", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"Ionian",
    "notes":["D#", "F", "G", "G#", "A#", "C", "D"]
  },
  {
    "root":"E",
    "mode":"Ionian",
    "notes":["E", "F#", "G#", "A", "B", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"Ionian",
    "notes":["F", "G", "A", "A#", "C", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"Ionian",
    "notes":["F#", "G#", "A#", "B", "C#", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"Ionian",
    "notes":["G", "A", "B", "C", "D", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"Ionian",
    "notes":["G#", "A#", "C", "C#", "D#", "F", "G"]
  },
  {
    "root":"A",
    "mode":"Ionian",
    "notes":["A", "B", "C#", "D", "E", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"Ionian",
    "notes":["A#", "C", "D", "D#", "F", "G", "A"]
  },
  {
    "root":"B",
    "mode":"Ionian",
    "notes":["B", "C#", "D#", "E", "F#", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"Lydian",
    "notes":["C", "D", "E", "F#", "G", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"Lydian",
    "notes":["C#", "D#", "F", "G", "G#", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"Lydian",
    "notes":["D", "E", "F#", "G#", "A", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"Lydian",
    "notes":["D#", "F", "G", "A", "A#", "C", "D"]
  },
  {
    "root":"E",
    "mode":"Lydian",
    "notes":["E", "F#", "G#", "A#", "B", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"Lydian",
    "notes":["F", "G", "A", "B", "C", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"Lydian",
    "notes":["F#", "G#", "A#", "C", "C#", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"Lydian",
    "notes":["G", "A", "B", "C#", "D", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"Lydian",
    "notes":["G#", "A#", "C", "D", "D#", "F", "G"]
  },
  {
    "root":"A",
    "mode":"Lydian",
    "notes":["A", "B", "C#", "D#", "E", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"Lydian",
    "notes":["A#", "C", "D", "E", "F", "G", "A"]
  },
  {
    "root":"B",
    "mode":"Lydian",
    "notes":["B", "C#", "D#", "F", "F#", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"Mixolydian",
    "notes":["C", "D", "E", "F", "G", "A", "A#"]
  },
  {
    "root":"C#",
    "mode":"Mixolydian",
    "notes":["C#", "D#", "F", "F#", "G#", "A#", "B"]
  },
  {
    "root":"D",
    "mode":"Mixolydian",
    "notes":["D", "E", "F#", "G", "A", "B", "C"]
  },
  {
    "root":"D#",
    "mode":"Mixolydian",
    "notes":["D#", "F", "G", "G#", "A#", "C", "C#"]
  },
  {
    "root":"E",
    "mode":"Mixolydian",
    "notes":["E", "F#", "G#", "A", "B", "C#", "D"]
  },
  {
    "root":"F",
    "mode":"Mixolydian",
    "notes":["F", "G", "A", "A#", "C", "D", "D#"]
  },
  {
    "root":"F#",
    "mode":"Mixolydian",
    "notes":["F#", "G#", "A#", "B", "C#", "D#", "E"]
  },
  {
    "root":"G",
    "mode":"Mixolydian",
    "notes":["G", "A", "B", "C", "D", "E", "F"]
  },
  {
    "root":"G#",
    "mode":"Mixolydian",
    "notes":["G#", "A#", "C", "C#", "D#", "F", "F#"]
  },
  {
    "root":"A",
    "mode":"Mixolydian",
    "notes":["A", "B", "C#", "D", "E", "F#", "G"]
  },
  {
    "root":"A#",
    "mode":"Mixolydian",
    "notes":["A#", "C", "D", "D#", "F", "G", "G#"]
  },
  {
    "root":"B",
    "mode":"Mixolydian",
    "notes":["B", "C#", "D#", "E", "F#", "G#", "A"]
  },
  {
    "root":"C",
    "mode":"Locrian",
    "notes":["C", "C#", "D#", "F", "F#", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"Locrian",
    "notes":["C#", "D", "E", "F#", "G", "A", "B"]
  },
  {
    "root":"D",
    "mode":"Locrian",
    "notes":["D", "D#", "F", "G", "G#", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"Locrian",
    "notes":["D#", "E", "F#", "G#", "A", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"Locrian",
    "notes":["E", "F", "G", "A", "A#", "C", "D"]
  },
  {
    "root":"F",
    "mode":"Locrian",
    "notes":["F", "F#", "G#", "A#", "B", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"Locrian",
    "notes":["F#", "G", "A", "B", "C", "D", "E"]
  },
  {
    "root":"G",
    "mode":"Locrian",
    "notes":["G", "G#", "A#", "C", "C#", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"Locrian",
    "notes":["G#", "A", "B", "C#", "D", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"Locrian",
    "notes":["A", "A#", "C", "D", "D#", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"Locrian",
    "notes":["A#", "B", "C#", "D#", "E", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"Locrian",
    "notes":["B", "C", "D", "E", "F", "G", "A"]
  },
  {
    "root":"C",
    "mode":"jazz melodic minor",
    "notes":["C", "D", "D#", "F", "G", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"jazz melodic minor",
    "notes":["C#", "D#", "E", "F#", "G#", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"jazz melodic minor",
    "notes":["D", "E", "F", "G", "A", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"jazz melodic minor",
    "notes":["D#", "F", "F#", "G#", "A#", "C", "D"]
  },
  {
    "root":"E",
    "mode":"jazz melodic minor",
    "notes":["E", "F#", "G", "A", "B", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"jazz melodic minor",
    "notes":["F", "G", "G#", "A#", "C", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"jazz melodic minor",
    "notes":["F#", "G#", "A", "B", "C#", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"jazz melodic minor",
    "notes":["G", "A", "A#", "C", "D", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"jazz melodic minor",
    "notes":["G#", "A#", "B", "C#", "D#", "F", "G"]
  },
  {
    "root":"A",
    "mode":"jazz melodic minor",
    "notes":["A", "B", "C", "D", "E", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"jazz melodic minor",
    "notes":["A#", "C", "C#", "D#", "F", "G", "A"]
  },
  {
    "root":"B",
    "mode":"jazz melodic minor",
    "notes":["B", "C#", "D", "E", "F#", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"Dorian b2",
    "notes":["C", "C#", "D#", "F", "G", "A", "A#"]
  },
  {
    "root":"C#",
    "mode":"Dorian b2",
    "notes":["C#", "D", "E", "F#", "G#", "A#", "B"]
  },
  {
    "root":"D",
    "mode":"Dorian b2",
    "notes":["D", "D#", "F", "G", "A", "B", "C"]
  },
  {
    "root":"D#",
    "mode":"Dorian b2",
    "notes":["D#", "E", "F#", "G#", "A#", "C", "C#"]
  },
  {
    "root":"E",
    "mode":"Dorian b2",
    "notes":["E", "F", "G", "A", "B", "C#", "D"]
  },
  {
    "root":"F",
    "mode":"Dorian b2",
    "notes":["F", "F#", "G#", "A#", "C", "D", "D#"]
  },
  {
    "root":"F#",
    "mode":"Dorian b2",
    "notes":["F#", "G", "A", "B", "C#", "D#", "E"]
  },
  {
    "root":"G",
    "mode":"Dorian b2",
    "notes":["G", "G#", "A#", "C", "D", "E", "F"]
  },
  {
    "root":"G#",
    "mode":"Dorian b2",
    "notes":["G#", "A", "B", "C#", "D#", "F", "F#"]
  },
  {
    "root":"A",
    "mode":"Dorian b2",
    "notes":["A", "A#", "C", "D", "E", "F#", "G"]
  },
  {
    "root":"A#",
    "mode":"Dorian b2",
    "notes":["A#", "B", "C#", "D#", "F", "G", "G#"]
  },
  {
    "root":"B",
    "mode":"Dorian b2",
    "notes":["B", "C", "D", "E", "F#", "G#", "A"]
  },
  {
    "root":"C",
    "mode":"Lydian augmented",
    "notes":["C", "D", "E", "F#", "G#", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"Lydian augmented",
    "notes":["C#", "D#", "F", "G", "A", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"Lydian augmented",
    "notes":["D", "E", "F#", "G#", "A#", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"Lydian augmented",
    "notes":["D#", "F", "G", "A", "B", "C", "D"]
  },
  {
    "root":"E",
    "mode":"Lydian augmented",
    "notes":["E", "F#", "G#", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"Lydian augmented",
    "notes":["F", "G", "A", "B", "C#", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"Lydian augmented",
    "notes":["F#", "G#", "A#", "C", "D", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"Lydian augmented",
    "notes":["G", "A", "B", "C#", "D#", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"Lydian augmented",
    "notes":["G#", "A#", "C", "D", "E", "F", "G"]
  },
  {
    "root":"A",
    "mode":"Lydian augmented",
    "notes":["A", "B", "C#", "D#", "F", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"Lydian augmented",
    "notes":["A#", "C", "D", "E", "F#", "G", "A"]
  },
  {
    "root":"B",
    "mode":"Lydian augmented",
    "notes":["B", "C#", "D#", "F", "G", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"Lydian b7",
    "notes":["C", "D", "E", "F#", "G", "A", "A#"]
  },
  {
    "root":"C#",
    "mode":"Lydian b7",
    "notes":["C#", "D#", "F", "G", "G#", "A#", "B"]
  },
  {
    "root":"D",
    "mode":"Lydian b7",
    "notes":["D", "E", "F#", "G#", "A", "B", "C"]
  },
  {
    "root":"D#",
    "mode":"Lydian b7",
    "notes":["D#", "F", "G", "A", "A#", "C", "C#"]
  },
  {
    "root":"E",
    "mode":"Lydian b7",
    "notes":["E", "F#", "G#", "A#", "B", "C#", "D"]
  },
  {
    "root":"F",
    "mode":"Lydian b7",
    "notes":["F", "G", "A", "B", "C", "D", "D#"]
  },
  {
    "root":"F#",
    "mode":"Lydian b7",
    "notes":["F#", "G#", "A#", "C", "C#", "D#", "E"]
  },
  {
    "root":"G",
    "mode":"Lydian b7",
    "notes":["G", "A", "B", "C#", "D", "E", "F"]
  },
  {
    "root":"G#",
    "mode":"Lydian b7",
    "notes":["G#", "A#", "C", "D", "D#", "F", "F#"]
  },
  {
    "root":"A",
    "mode":"Lydian b7",
    "notes":["A", "B", "C#", "D#", "E", "F#", "G"]
  },
  {
    "root":"A#",
    "mode":"Lydian b7",
    "notes":["A#", "C", "D", "E", "F", "G", "G#"]
  },
  {
    "root":"B",
    "mode":"Lydian b7",
    "notes":["B", "C#", "D#", "F", "F#", "G#", "A"]
  },
  {
    "root":"C",
    "mode":"Mixolydian b13",
    "notes":["C", "D", "E", "F", "G", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"Mixolydian b13",
    "notes":["C#", "D#", "F", "F#", "G#", "A", "B"]
  },
  {
    "root":"D",
    "mode":"Mixolydian b13",
    "notes":["D", "E", "F#", "G", "A", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"Mixolydian b13",
    "notes":["D#", "F", "G", "G#", "A#", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"Mixolydian b13",
    "notes":["E", "F#", "G#", "A", "B", "C", "D"]
  },
  {
    "root":"F",
    "mode":"Mixolydian b13",
    "notes":["F", "G", "A", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"Mixolydian b13",
    "notes":["F#", "G#", "A#", "B", "C#", "D", "E"]
  },
  {
    "root":"G",
    "mode":"Mixolydian b13",
    "notes":["G", "A", "B", "C", "D", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"Mixolydian b13",
    "notes":["G#", "A#", "C", "C#", "D#", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"Mixolydian b13",
    "notes":["A", "B", "C#", "D", "E", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"Mixolydian b13",
    "notes":["A#", "C", "D", "D#", "F", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"Mixolydian b13",
    "notes":["B", "C#", "D#", "E", "F#", "G", "A"]
  },
  {
    "root":"C",
    "mode":"Locrian #2",
    "notes":["C", "D", "D#", "F", "F#", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"Locrian #2",
    "notes":["C#", "D#", "E", "F#", "G", "A", "B"]
  },
  {
    "root":"D",
    "mode":"Locrian #2",
    "notes":["D", "E", "F", "G", "G#", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"Locrian #2",
    "notes":["D#", "F", "F#", "G#", "A", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"Locrian #2",
    "notes":["E", "F#", "G", "A", "A#", "C", "D"]
  },
  {
    "root":"F",
    "mode":"Locrian #2",
    "notes":["F", "G", "G#", "A#", "B", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"Locrian #2",
    "notes":["F#", "G#", "A", "B", "C", "D", "E"]
  },
  {
    "root":"G",
    "mode":"Locrian #2",
    "notes":["G", "A", "A#", "C", "C#", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"Locrian #2",
    "notes":["G#", "A#", "B", "C#", "D", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"Locrian #2",
    "notes":["A", "B", "C", "D", "D#", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"Locrian #2",
    "notes":["A#", "C", "C#", "D#", "E", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"Locrian #2",
    "notes":["B", "C#", "D", "E", "F", "G", "A"]
  },
  {
    "root":"C",
    "mode":"super Locrian",
    "notes":["C", "C#", "D#", "E", "F#", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"super Locrian",
    "notes":["C#", "D", "E", "F", "G", "A", "B"]
  },
  {
    "root":"D",
    "mode":"super Locrian",
    "notes":["D", "D#", "F", "F#", "G#", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"super Locrian",
    "notes":["D#", "E", "F#", "G", "A", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"super Locrian",
    "notes":["E", "F", "G", "G#", "A#", "C", "D"]
  },
  {
    "root":"F",
    "mode":"super Locrian",
    "notes":["F", "F#", "G#", "A", "B", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"super Locrian",
    "notes":["F#", "G", "A", "A#", "C", "D", "E"]
  },
  {
    "root":"G",
    "mode":"super Locrian",
    "notes":["G", "G#", "A#", "B", "C#", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"super Locrian",
    "notes":["G#", "A", "B", "C", "D", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"super Locrian",
    "notes":["A", "A#", "C", "C#", "D#", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"super Locrian",
    "notes":["A#", "B", "C#", "D", "E", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"super Locrian",
    "notes":["B", "C", "D", "D#", "F", "G", "A"]
  },
  {
    "root":"C",
    "mode":"whole half diminished",
    "notes":["C", "D", "D#", "F", "F#", "G#", "A", "B"]
  },
  {
    "root":"C#",
    "mode":"whole half diminished",
    "notes":["C#", "D#", "E", "F#", "G", "A", "A#", "C"]
  },
  {
    "root":"D",
    "mode":"whole half diminished",
    "notes":["D", "E", "F", "G", "G#", "A#", "B", "C#"]
  },
  {
    "root":"D#",
    "mode":"whole half diminished",
    "notes":["D#", "F", "F#", "G#", "A", "B", "C", "D"]
  },
  {
    "root":"E",
    "mode":"whole half diminished",
    "notes":["E", "F#", "G", "A", "A#", "C", "C#", "D#"]
  },
  {
    "root":"F",
    "mode":"whole half diminished",
    "notes":["F", "G", "G#", "A#", "B", "C#", "D", "E"]
  },
  {
    "root":"F#",
    "mode":"whole half diminished",
    "notes":["F#", "G#", "A", "B", "C", "D", "D#", "F"]
  },
  {
    "root":"G",
    "mode":"whole half diminished",
    "notes":["G", "A", "A#", "C", "C#", "D#", "E", "F#"]
  },
  {
    "root":"G#",
    "mode":"whole half diminished",
    "notes":["G#", "A#", "B", "C#", "D", "E", "F", "G"]
  },
  {
    "root":"A",
    "mode":"whole half diminished",
    "notes":["A", "B", "C", "D", "D#", "F", "F#", "G#"]
  },
  {
    "root":"A#",
    "mode":"whole half diminished",
    "notes":["A#", "C", "C#", "D#", "E", "F#", "G", "A"]
  },
  {
    "root":"B",
    "mode":"whole half diminished",
    "notes":["B", "C#", "D", "E", "F", "G", "G#", "A#"]
  },
  {
    "root":"C",
    "mode":"half whole diminished",
    "notes":["C", "C#", "D#", "E", "F#", "G", "A", "A#"]
  },
  {
    "root":"C#",
    "mode":"half whole diminished",
    "notes":["C#", "D", "E", "F", "G", "G#", "A#", "B"]
  },
  {
    "root":"D",
    "mode":"half whole diminished",
    "notes":["D", "D#", "F", "F#", "G#", "A", "B", "C"]
  },
  {
    "root":"D#",
    "mode":"half whole diminished",
    "notes":["D#", "E", "F#", "G", "A", "A#", "C", "C#"]
  },
  {
    "root":"E",
    "mode":"half whole diminished",
    "notes":["E", "F", "G", "G#", "A#", "B", "C#", "D"]
  },
  {
    "root":"F",
    "mode":"half whole diminished",
    "notes":["F", "F#", "G#", "A", "B", "C", "D", "D#"]
  },
  {
    "root":"F#",
    "mode":"half whole diminished",
    "notes":["F#", "G", "A", "A#", "C", "C#", "D#", "E"]
  },
  {
    "root":"G",
    "mode":"half whole diminished",
    "notes":["G", "G#", "A#", "B", "C#", "D", "E", "F"]
  },
  {
    "root":"G#",
    "mode":"half whole diminished",
    "notes":["G#", "A", "B", "C", "D", "D#", "F", "F#"]
  },
  {
    "root":"A",
    "mode":"half whole diminished",
    "notes":["A", "A#", "C", "C#", "D#", "E", "F#", "G"]
  },
  {
    "root":"A#",
    "mode":"half whole diminished",
    "notes":["A#", "B", "C#", "D", "E", "F", "G", "G#"]
  },
  {
    "root":"B",
    "mode":"half whole diminished",
    "notes":["B", "C", "D", "D#", "F", "F#", "G#", "A"]
  },
  {
    "root":"C",
    "mode":"enigmatic",
    "notes":["C", "C#", "E", "F#", "G#", "A#", "B"]
  },
  {
    "root":"C#",
    "mode":"enigmatic",
    "notes":["C#", "D", "F", "G", "A", "B", "C"]
  },
  {
    "root":"D",
    "mode":"enigmatic",
    "notes":["D", "D#", "F#", "G#", "A#", "C", "C#"]
  },
  {
    "root":"D#",
    "mode":"enigmatic",
    "notes":["D#", "E", "G", "A", "B", "C#", "D"]
  },
  {
    "root":"E",
    "mode":"enigmatic",
    "notes":["E", "F", "G#", "A#", "C", "D", "D#"]
  },
  {
    "root":"F",
    "mode":"enigmatic",
    "notes":["F", "F#", "A", "B", "C#", "D#", "E"]
  },
  {
    "root":"F#",
    "mode":"enigmatic",
    "notes":["F#", "G", "A#", "C", "D", "E", "F"]
  },
  {
    "root":"G",
    "mode":"enigmatic",
    "notes":["G", "G#", "B", "C#", "D#", "F", "F#"]
  },
  {
    "root":"G#",
    "mode":"enigmatic",
    "notes":["G#", "A", "C", "D", "E", "F#", "G"]
  },
  {
    "root":"A",
    "mode":"enigmatic",
    "notes":["A", "A#", "C#", "D#", "F", "G", "G#"]
  },
  {
    "root":"A#",
    "mode":"enigmatic",
    "notes":["A#", "B", "D", "E", "F#", "G#", "A"]
  },
  {
    "root":"B",
    "mode":"enigmatic",
    "notes":["B", "C", "D#", "F", "G", "A", "A#"]
  },
  {
    "root":"C",
    "mode":"double harmonic",
    "notes":["C", "C#", "E", "F", "G", "G#", "B"]
  },
  {
    "root":"C#",
    "mode":"double harmonic",
    "notes":["C#", "D", "F", "F#", "G#", "A", "C"]
  },
  {
    "root":"D",
    "mode":"double harmonic",
    "notes":["D", "D#", "F#", "G", "A", "A#", "C#"]
  },
  {
    "root":"D#",
    "mode":"double harmonic",
    "notes":["D#", "E", "G", "G#", "A#", "B", "D"]
  },
  {
    "root":"E",
    "mode":"double harmonic",
    "notes":["E", "F", "G#", "A", "B", "C", "D#"]
  },
  {
    "root":"F",
    "mode":"double harmonic",
    "notes":["F", "F#", "A", "A#", "C", "C#", "E"]
  },
  {
    "root":"F#",
    "mode":"double harmonic",
    "notes":["F#", "G", "A#", "B", "C#", "D", "F"]
  },
  {
    "root":"G",
    "mode":"double harmonic",
    "notes":["G", "G#", "B", "C", "D", "D#", "F#"]
  },
  {
    "root":"G#",
    "mode":"double harmonic",
    "notes":["G#", "A", "C", "C#", "D#", "E", "G"]
  },
  {
    "root":"A",
    "mode":"double harmonic",
    "notes":["A", "A#", "C#", "D", "E", "F", "G#"]
  },
  {
    "root":"A#",
    "mode":"double harmonic",
    "notes":["A#", "B", "D", "D#", "F", "F#", "A"]
  },
  {
    "root":"B",
    "mode":"double harmonic",
    "notes":["B", "C", "D#", "E", "F#", "G", "A#"]
  },
  {
    "root":"C",
    "mode":"Hungarian minor",
    "notes":["C", "D", "D#", "F#", "G", "G#", "B"]
  },
  {
    "root":"C#",
    "mode":"Hungarian minor",
    "notes":["C#", "D#", "E", "G", "G#", "A", "C"]
  },
  {
    "root":"D",
    "mode":"Hungarian minor",
    "notes":["D", "E", "F", "G#", "A", "A#", "C#"]
  },
  {
    "root":"D#",
    "mode":"Hungarian minor",
    "notes":["D#", "F", "F#", "A", "A#", "B", "D"]
  },
  {
    "root":"E",
    "mode":"Hungarian minor",
    "notes":["E", "F#", "G", "A#", "B", "C", "D#"]
  },
  {
    "root":"F",
    "mode":"Hungarian minor",
    "notes":["F", "G", "G#", "B", "C", "C#", "E"]
  },
  {
    "root":"F#",
    "mode":"Hungarian minor",
    "notes":["F#", "G#", "A", "C", "C#", "D", "F"]
  },
  {
    "root":"G",
    "mode":"Hungarian minor",
    "notes":["G", "A", "A#", "C#", "D", "D#", "F#"]
  },
  {
    "root":"G#",
    "mode":"Hungarian minor",
    "notes":["G#", "A#", "B", "D", "D#", "E", "G"]
  },
  {
    "root":"A",
    "mode":"Hungarian minor",
    "notes":["A", "B", "C", "D#", "E", "F", "G#"]
  },
  {
    "root":"A#",
    "mode":"Hungarian minor",
    "notes":["A#", "C", "C#", "E", "F", "F#", "A"]
  },
  {
    "root":"B",
    "mode":"Hungarian minor",
    "notes":["B", "C#", "D", "F", "F#", "G", "A#"]
  },
  {
    "root":"C",
    "mode":"Persian",
    "notes":["C", "C#", "E", "F", "F#", "G#", "B"]
  },
  {
    "root":"C#",
    "mode":"Persian",
    "notes":["C#", "D", "F", "F#", "G", "A", "C"]
  },
  {
    "root":"D",
    "mode":"Persian",
    "notes":["D", "D#", "F#", "G", "G#", "A#", "C#"]
  },
  {
    "root":"D#",
    "mode":"Persian",
    "notes":["D#", "E", "G", "G#", "A", "B", "D"]
  },
  {
    "root":"E",
    "mode":"Persian",
    "notes":["E", "F", "G#", "A", "A#", "C", "D#"]
  },
  {
    "root":"F",
    "mode":"Persian",
    "notes":["F", "F#", "A", "A#", "B", "C#", "E"]
  },
  {
    "root":"F#",
    "mode":"Persian",
    "notes":["F#", "G", "A#", "B", "C", "D", "F"]
  },
  {
    "root":"G",
    "mode":"Persian",
    "notes":["G", "G#", "B", "C", "C#", "D#", "F#"]
  },
  {
    "root":"G#",
    "mode":"Persian",
    "notes":["G#", "A", "C", "C#", "D", "E", "G"]
  },
  {
    "root":"A",
    "mode":"Persian",
    "notes":["A", "A#", "C#", "D", "D#", "F", "G#"]
  },
  {
    "root":"A#",
    "mode":"Persian",
    "notes":["A#", "B", "D", "D#", "E", "F#", "A"]
  },
  {
    "root":"B",
    "mode":"Persian",
    "notes":["B", "C", "D#", "E", "F", "G", "A#"]
  },
  {
    "root":"C",
    "mode":"Arabian",
    "notes":["C", "D", "E", "F", "F#", "G#", "A#"]
  },
  {
    "root":"C#",
    "mode":"Arabian",
    "notes":["C#", "D#", "F", "F#", "G", "A", "B"]
  },
  {
    "root":"D",
    "mode":"Arabian",
    "notes":["D", "E", "F#", "G", "G#", "A#", "C"]
  },
  {
    "root":"D#",
    "mode":"Arabian",
    "notes":["D#", "F", "G", "G#", "A", "B", "C#"]
  },
  {
    "root":"E",
    "mode":"Arabian",
    "notes":["E", "F#", "G#", "A", "A#", "C", "D"]
  },
  {
    "root":"F",
    "mode":"Arabian",
    "notes":["F", "G", "A", "A#", "B", "C#", "D#"]
  },
  {
    "root":"F#",
    "mode":"Arabian",
    "notes":["F#", "G#", "A#", "B", "C", "D", "E"]
  },
  {
    "root":"G",
    "mode":"Arabian",
    "notes":["G", "A", "B", "C", "C#", "D#", "F"]
  },
  {
    "root":"G#",
    "mode":"Arabian",
    "notes":["G#", "A#", "C", "C#", "D", "E", "F#"]
  },
  {
    "root":"A",
    "mode":"Arabian",
    "notes":["A", "B", "C#", "D", "D#", "F", "G"]
  },
  {
    "root":"A#",
    "mode":"Arabian",
    "notes":["A#", "C", "D", "D#", "E", "F#", "G#"]
  },
  {
    "root":"B",
    "mode":"Arabian",
    "notes":["B", "C#", "D#", "E", "F", "G", "A"]
  },
  {
    "root":"C",
    "mode":"Japanese",
    "notes":["C", "C#", "F", "G", "G#"]
  },
  {
    "root":"C#",
    "mode":"Japanese",
    "notes":["C#", "D", "F#", "G#", "A"]
  },
  {
    "root":"D",
    "mode":"Japanese",
    "notes":["D", "D#", "G", "A", "A#"]
  },
  {
    "root":"D#",
    "mode":"Japanese",
    "notes":["D#", "E", "G#", "A#", "B"]
  },
  {
    "root":"E",
    "mode":"Japanese",
    "notes":["E", "F", "A", "B", "C"]
  },
  {
    "root":"F",
    "mode":"Japanese",
    "notes":["F", "F#", "A#", "C", "C#"]
  },
  {
    "root":"F#",
    "mode":"Japanese",
    "notes":["F#", "G", "B", "C#", "D"]
  },
  {
    "root":"G",
    "mode":"Japanese",
    "notes":["G", "G#", "C", "D", "D#"]
  },
  {
    "root":"G#",
    "mode":"Japanese",
    "notes":["G#", "A", "C#", "D#", "E"]
  },
  {
    "root":"A",
    "mode":"Japanese",
    "notes":["A", "A#", "D", "E", "F"]
  },
  {
    "root":"A#",
    "mode":"Japanese",
    "notes":["A#", "B", "D#", "F", "F#"]
  },
  {
    "root":"B",
    "mode":"Japanese",
    "notes":["B", "C", "E", "F#", "G"]
  },
  {
    "root":"C",
    "mode":"Egyptian",
    "notes":["C", "D", "F", "G", "A#"]
  },
  {
    "root":"C#",
    "mode":"Egyptian",
    "notes":["C#", "D#", "F#", "G#", "B"]
  },
  {
    "root":"D",
    "mode":"Egyptian",
    "notes":["D", "E", "G", "A", "C"]
  },
  {
    "root":"D#",
    "mode":"Egyptian",
    "notes":["D#", "F", "G#", "A#", "C#"]
  },
  {
    "root":"E",
    "mode":"Egyptian",
    "notes":["E", "F#", "A", "B", "D"]
  },
  {
    "root":"F",
    "mode":"Egyptian",
    "notes":["F", "G", "A#", "C", "D#"]
  },
  {
    "root":"F#",
    "mode":"Egyptian",
    "notes":["F#", "G#", "B", "C#", "E"]
  },
  {
    "root":"G",
    "mode":"Egyptian",
    "notes":["G", "A", "C", "D", "F"]
  },
  {
    "root":"G#",
    "mode":"Egyptian",
    "notes":["G#", "A#", "C#", "D#", "F#"]
  },
  {
    "root":"A",
    "mode":"Egyptian",
    "notes":["A", "B", "D", "E", "G"]
  },
  {
    "root":"A#",
    "mode":"Egyptian",
    "notes":["A#", "C", "D#", "F", "G#"]
  },
  {
    "root":"B",
    "mode":"Egyptian",
    "notes":["B", "C#", "E", "F#", "A"]
  },
  {
    "root":"C",
    "mode":"Hirajoshi",
    "notes":["C", "D", "D#", "G", "G#"]
  },
  {
    "root":"C#",
    "mode":"Hirajoshi",
    "notes":["C#", "D#", "E", "G#", "A"]
  },
  {
    "root":"D",
    "mode":"Hirajoshi",
    "notes":["D", "E", "F", "A", "A#"]
  },
  {
    "root":"D#",
    "mode":"Hirajoshi",
    "notes":["D#", "F", "F#", "A#", "B"]
  },
  {
    "root":"E",
    "mode":"Hirajoshi",
    "notes":["E", "F#", "G", "B", "C"]
  },
  {
    "root":"F",
    "mode":"Hirajoshi",
    "notes":["F", "G", "G#", "C", "C#"]
  },
  {
    "root":"F#",
    "mode":"Hirajoshi",
    "notes":["F#", "G#", "A", "C#", "D"]
  },
  {
    "root":"G",
    "mode":"Hirajoshi",
    "notes":["G", "A", "A#", "D", "D#"]
  },
  {
    "root":"G#",
    "mode":"Hirajoshi",
    "notes":["G#", "A#", "B", "D#", "E"]
  },
  {
    "root":"A",
    "mode":"Hirajoshi",
    "notes":["A", "B", "C", "E", "F"]
  },
  {
    "root":"A#",
    "mode":"Hirajoshi",
    "notes":["A#", "C", "C#", "F", "F#"]
  },
  {
    "root":"B",
    "mode":"Hirajoshi",
    "notes":["B", "C#", "D", "F#", "G"]
  }
];

export default scales_data;