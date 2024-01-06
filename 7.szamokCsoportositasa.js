//  Vámosi László, I/E/1
// 2023.01.06.

function szamokatCsoportosit(szamokSzoveg) {
    // Számok szöveg szétválasztása és számok kinyerése
    const szamok = szamokSzoveg.split(';').map(Number);

    // Objektum inicializálása
    const csoportositottSzamok = {
        pozitiv: [],
        nulla: [],
        negativ: []
    };

    // Számok csoportosítása
    szamok.forEach(szam => {
        if (szam > 0) {
            csoportositottSzamok.pozitiv.push(szam);
        } else if (szam === 0) {
            csoportositottSzamok.nulla.push(szam);
        } else {
            csoportositottSzamok.negativ.push(szam);
        }
    });

    return csoportositottSzamok;
}

// Példa használat:
console.log(szamokatCsoportosit('7;-4;-1;0;2;5;-8'));

console.log(szamokatCsoportosit('-1;-2;-3;-4;-5'));

