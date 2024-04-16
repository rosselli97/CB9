                //  ----------esercizio 1----------
const vowels = "aeiou"
const string = "topolino pippo pluto"

function numVowels(string) {
    let counter = 0
    
    for( let char of string) {
        if (vowels.includes(char)) {
            counter++
        }
    }
    return counter
}
 const numeroVocali = numVowels(string)
 console.log("il numero di vocali è " + numeroVocali)

                          //---------- esercizio 2 --------
const num = [1,5,6,78,45,36]
 
function findhighestnumber(array) {
   let  maxnumer = 0
    for(let = 0; i< array.lenght; i++ ){

        if(maxnumer < array[i]){
            maxnumer = array[i];

        }
    }
    return maxnumer;
}

console.log(findhighestnumber(Number));
