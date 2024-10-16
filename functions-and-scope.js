// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// 0. declareer variabele waarin je de count van de cumLaude grades gaat opslaan
let cumLaudeCounter = 0;
// 1. Ga alle cijfers in de grades array af.
for (let i = 0; i < grades.length; i++) {
    // 2. Check of de waarde van de grades 8 of hoger is.
    if (grades[i] >= 8) {
        // 3. Als je een cijfer van 8 of hoger tegenkomt, gaat de cumLaudeCounter met 1 omhoog
        cumLaudeCounter++;
    }
}
// 3. Als de hele array nagelopen is moet de cumLaudeCounter worden geprint.
console.log(cumLaudeCounter);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

// 0. declareer functie waar duidelijk is dat de input van een array verwacht wordt.
function getCumLaude(array) {
    // 1. declareer variabele waarin je de count van de cumLaude grades gaat opslaan
    let cumLaudeCounter = 0;
    // 2. Ga alle cijfers in de grades array af.
    for (let i = 0; i < array.length; i++) {
        // 3. Check of de waarde van de grades 8 of hoger is.
        if (array[i] >= 8) {
            // 4. Als je een cijfer van 8 of hoger tegenkomt, gaat de cumLaudeCounter met 1 omhoog
            cumLaudeCounter++;
        }
    }
    // 4. Als alle cijfers in de array bekeken zijn, wordt de value van de cumlaudecounter teruggegeven(return value).
    return cumLaudeCounter;
}

// 5. roep de functie aan en sla de return value op
const cumLaudeTotal = getCumLaude(grades);
//6. log de return value
console.log(cumLaudeTotal);

const cumLaudeTotal2 = getCumLaude([6, 4, 5]);
console.log(cumLaudeTotal2);

const cumLaudeTotal3 = getCumLaude([8, 9, 4, 6, 10]);
console.log(cumLaudeTotal3);


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// // 0. declareer een variabele waar je de som van de grades uit de array in opslaat
// let sumOfGrades = 0;
// // 1. ga alle cijfers in de grades array af
// for (i = 0; i < grades.length; i++) {
//     // 2. Tel de cijfers van de array bij elkaar op.
//     sumOfGrades = sumOfGrades + grades[i];
// }
// console.log(sumOfGrades);
// // 3. Maak een variabele aan waarin je het volgende opslaat: deel het opgetelde cijfer door de waarde van de lengte van de array(= gemiddelde cijfer).
// const gradeAverage = sumOfGrades/(grades.length);
// // 4. log gemiddelde cijfer
// console.log(gradeAverage);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4


// 0. declareer een functie waar een array verwacht wordt als input
function averageGrade(array) {
    // 1. declareer een variabele waar je de som van de grades uit de array in opslaat
    let sumOfGrades = 0;
    // 2. ga alle cijfers in de grades array af
    for (i = 0; i < array.length; i++) {
        // 3. Tel de cijfers van de array bij elkaar op.
        sumOfGrades = sumOfGrades + array[i];
    }
    // 4. Maak een variabele aan waarin je het volgende opslaat: deel het opgetelde cijfer door de waarde van de lengte van de array(= gemiddelde cijfer).
    const gradeAverage = sumOfGrades/(array.length);
    // 5. return gemiddelde cijfer
    return parseFloat(gradeAverage.toFixed(2));
}

// 6. roep de functie aan waarbij de gemiddelde waarde van de array als variabele wordt opgeslagen
const averageGrade1 = averageGrade(grades);
// 7. log de opgeslagen waarde van de variabele.
console.log(averageGrade1);

const averageGrade2 = averageGrade([6, 4, 5]);
console.log(averageGrade2);

const averageGrade3 = averageGrade([8, 9, 4, 6, 10]);
console.log(averageGrade3);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

// De uitwerking is meegenomen in script bij 2b, parseFloat(gradeAverage.toFixed(2));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9




/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
