//  Vámosi László, I/E/1
// 2023.01.06. 

function gepeles(szoveg) {
    // Witespace karakterek eltávolítása
    const tisztitottSzoveg = szoveg.trim().replace(/\s+/g, '');

    // Hibaellenőrzés
    if (typeof tisztitottSzoveg !== 'string' || tisztitottSzoveg === '') {
        return 'HIBA!';
    }

    // Felhasználók tömbbé alakítása
    const felhasznalok = tisztitottSzoveg.split(';');

    // Felhasználók számának ellenőrzése
    const felhasznalokSzama = felhasznalok.length;

    if (felhasznalokSzama === 1) {
        return `${felhasznalok[0]} eppen gepel...`;
    } else if (felhasznalokSzama === 2) {
        return `${felhasznalok[0]} es ${felhasznalok[1]} eppen gepel...`;
    } else {
        const tovabbiFelhasznalok = felhasznalokSzama - 2;
        return `${felhasznalok[0]}, ${felhasznalok[1]} es ${tovabbiFelhasznalok} tovabbi felhasznalo eppen gepel...`;
    }
}

// Példa használat:
const eredmeny = gepeles('szte4k;catman6 ; Sziklas ; Aerosol;cservZenberg');
console.log(eredmeny);

