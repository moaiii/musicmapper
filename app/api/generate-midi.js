import {DEV_GENERATE_MIDI_URL} from './config';


export default generate_midi = (notes, differenceNotes) => {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    

    var regex_sharp = new RegExp(/[#]/, 'g');
    let octave = 4;
    
    let note_params = _.concat(this.props.notes, this.props.differenceNotes)
      .map((note) => `${note}${octave}`)
      .join(`_`)
      .replace(regex_sharp, `$`)
      .toLowerCase();
    
    let chord_name = this.props.selectedChord.length > 0 ? this.props.selectedChord : "misc";
    
    let url = `${MIDI_GENERATOR_URL}${chord_name}/${note_params}`;
    console.log("url: ", url);
    
    xhttp.open("POST", url, true);
    xhttp.send({});
}

function generate_json_data() {

}