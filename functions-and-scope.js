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

let cumLaudeCounter = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeCounter++;
    }
}
console.log("Script Cum Laude: " + cumLaudeCounter);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(array) {
    let cumLaudeCounter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 8) {
            cumLaudeCounter++;
        }
    }
    return cumLaudeCounter;
}

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
const cumLaudeTotal = cumLaude(grades);
console.log("Function Cum Laude grades: " + cumLaudeTotal);
// cumLaude([6, 4, 5]) geeft 0
const cumLaudeTotal2 = cumLaude([6, 4, 5]);
console.log("Function Cum Laude array1: " + cumLaudeTotal2);
// cumLaude([8, 9, 4, 6, 10]) geeft 3
const cumLaudeTotal3 = cumLaude([8, 9, 4, 6, 10]);
console.log("Function Cum Laude array2: " + cumLaudeTotal3);

// Arrow function voor cum laude
const cumLaudeArrow = (array) => {
    let cumLaudeCounter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 8) {
            cumLaudeCounter++;
        }
    }
    return cumLaudeCounter;
}
console.log("Arrow Cum Laude: " + cumLaudeArrow(grades));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

let sumOfGrades = 0;
for (i = 0; i < grades.length; i++) {
    sumOfGrades = sumOfGrades + grades[i];
}
const gradeAverage = sumOfGrades/(grades.length);
console.log("Script average grade: " + gradeAverage);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4


function averageGrade(array) {
    let sumOfGrades = 0;
    for (i = 0; i < array.length; i++) {
        sumOfGrades = sumOfGrades + array[i];
    }
    const gradeAverage = sumOfGrades/array.length;
    return parseFloat(gradeAverage.toFixed(2));
}

const averageGrade1 = averageGrade(grades);
console.log("Function averageGrade grades: " + averageGrade1);

const averageGrade2 = averageGrade([6, 4, 5]);
console.log("Function averageGrade array1: " + averageGrade2);

const averageGrade3 = averageGrade([8, 9, 4, 6, 10]);
console.log("Function averageGrade array2: " + averageGrade3);

//Arrow average grade
const averageGradeArrow = (array) => {
    let sumOfGrades = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfGrades = sumOfGrades + array[i];
    }
    const gradeAverage = sumOfGrades/array.length;
    return parseFloat(gradeAverage.toFixed(2));
}
const averageGrade4 = averageGradeArrow(grades);
console.log("Arrow averageGrade: " + averageGrade4);

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

// De uitwerking is meegenomen in script bij 2b, parseFloat(gradeAverage.toFixed(2));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

let highestGradeNumber = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGradeNumber) {
        highestGradeNumber = grades[i];
    }
}
console.log("Script highest grade: " + highestGradeNumber);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10


function highestGrade(array) {
    let highestGradeNumber = 0;
        for (let i = 0; i < array.length; i++) {
        if (array[i] > highestGradeNumber) {
            highestGradeNumber = array[i];
        }
    }
    return(highestGradeNumber);
}
const highestGrade1 = highestGrade(grades);
console.log("Function highestGrade grades: " + highestGrade1);

const highestGrade2 = highestGrade([6, 4, 5]);
console.log("Function highestGrade array1: " + highestGrade2);

const highestGrade3 = highestGrade([8, 9, 4, 6, 10]);
console.log("Function highestGrade array2: " + highestGrade3);

// Arrow highest grade
const highestGradeArrow = (array) => {
    let highestGradeNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highestGradeNumber) {
            highestGradeNumber = array[i];
        }
    }
    return highestGradeNumber
}
const highestGrade4 = highestGradeArrow(grades);
console.log("Arrow highestGrade grades: " + highestGrade4)