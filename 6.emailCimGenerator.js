//  Vámosi László, I/E/1
// 2023.01.06.

function emailCimetGeneral(nev, szuletesiEv = 1970) {
    // Névből az első három karakter kinyerése
    const nevReszletek = nev.split(' ').map(sz => sz.slice(0, 3).toLowerCase()).join('');
    
    // Születési év utolsó számjegyének kinyerése
    const utolsoSzamjegy = szuletesiEv % 10;

    // E-mail cím generálása
    const emailCim = `${nevReszletek}${utolsoSzamjegy}@duck.com`;

    return emailCim;
}

// Példa használat:
console.log(emailCimetGeneral('Richard Paul Astley', 1966)); 
console.log(emailCimetGeneral('Citad Ella')); 
console.log(emailCimetGeneral('Pablo Diego Jose Francisco de Paula Juan Nepomuceno Maria de los Remedios Cipriano de la Santisima Trinidad Ruiz y Picasso', 1881));