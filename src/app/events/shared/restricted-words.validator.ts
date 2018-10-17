import { FormControl, FormGroup, Validators } from '@angular/forms';

// funksjon som validerer enkelt ord
export function restrictedWord(control: FormControl): {[key: string]: any} {
    return control.value.includes('foo')
    ? {'restrictedWords': 'foo'}
    : null
  }

// Funksjon som sjekker mot en rekke ord
// Returner en funksjon som blir kjørt mot hvert ord
export function restrictedWords(words) {

    // Returner samme type funksjon som restrictedword
    return (control: FormControl): {[key: string]: any} => {

        // Er det tom liste inn ?
        if (!words) return null;

        var invalidWords = words
        /* map looper over alle ordene i words og sjekker om det er med,
        returner ordet dersom det er med, null dersom det ikke er med 
        les her om map reduce
        https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209*/
        .map(w => {
            // Enten dette: 
            console.log('Sjekker restrictedWord: ' + control.value)
            if (control.value.includes(w))
              return w
            else
              return null
            
            // eller oneliner:
            // control.value.includes(w) ? w : null
            })
        // Filter vekk alle nulls fra map funksjonen
        .filter(w => w != null)

        return  invalidWords && invalidWords.length > 0
        ? {'restrictedWords': invalidWords.join(',')}
        : null
    }
}