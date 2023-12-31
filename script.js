function exo() {
    var text = document.getElementById("textToSplit").value;    /* On récupère le texte entré */
        chains = text.split(' ');                               /* On sépare chaque chaine de caractères */
    let result = 0;
    for (let chain of chains) {                                 /* On fait la boucle pour toute les chaines de caractère du tableau */
    let chainWithTransformDigit = transformTextToDigit(chain);                          
    let digits = recupDigit(chainWithTransformDigit);           /* On récupère le résulat de la fonction qui permet de récupérer les digits*/
    result = result + parseInt(digits);                         /* On ajoute ce que la boucle à envoyer a nos résultats d'avant et ainsi de suite*/
    }
    let showResult = document.getElementById("result");
    showResult.innerHTML = "<p>Le résultat obtenu est " + result + "</p>";  /* On affiche le résultat obtenu */
}

function recupDigit(chain) {                        /* fonction qui sert à récupère le premier et le dernier chiffre d'une chaine de caractères */    
    let digits = chain.match(/\d/g);                /* On ne garde que les chiffres de la chaine de caractères et on les mets dans un tableau */
    if (digits != null) {                           /* Si la chaine de charactères n'avais pas de chiffre on renvoie 0 sinon on continue */
    let firstDigit = digits[0];                     /* On récupère le premier contenu du tableau (qui équivaut au premier chiffre de la chaine de caractères)*/
    let lastDigit = digits[digits.length-1];        /* On récupère le dernier contenu du tableau (qui équivaut au dernier chiffre de la chaine de caractères)*/
    return (firstDigit + lastDigit);                /*On retourne les 2 digits assemblés (1 + 5 ici par exemple vaudra 15 et pas 6) */
    }
    else return 0;                      
}

function transformTextToDigit(chain) {                       /* transforme les mots de chiffre (one, two, three...) en chiffre */
    chain = chain.replaceAll("one", '1');
    chain = chain.replaceAll("two", '2');
    chain = chain.replaceAll("three", '3');
    chain = chain.replaceAll("four", '4');
    chain = chain.replaceAll("five", '5');
    chain = chain.replaceAll("six", '6');
    chain = chain.replaceAll("seven", '7');
    chain = chain.replaceAll("eight", '8');
    chain = chain.replaceAll("nine", '9');
    console.log(chain);
    return chain;
}


const selection = document.getElementById("textToSplit");
selection.addEventListener("change", exo);