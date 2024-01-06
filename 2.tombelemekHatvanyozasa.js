//  Vámosi László, I/E/1
// 2023.01.06. 

function hatvanyoz(tomb, hatvany) {
  // Ellenőrizzük, hogy a bemenet egy tömb és a hatvány szám típusú-e
  if (!Array.isArray(tomb) || typeof hatvany !== 'number') {
    return []; // Ha valamelyik paraméter típusa nem megfelelő, üres tömbbel térünk vissza
  }

  // Ellenőrizzük, hogy a tömb minden eleme szám típusú-e
  if (!tomb.every(szam => typeof szam === 'number')) {
    return []; // Ha van olyan elem, amely nem szám típusú, üres tömbbel térünk vissza
  }

  // Emeljük a tömb elemeit a hatványra
  const eredmeny = tomb.map(szam => Math.pow(szam, hatvany));

  return eredmeny;
}

// Tesztek
console.log(hatvanyoz([1, 4, 7, 2, 5], 3)); 
console.log(hatvanyoz([1, '4', 7, 2, 5], 3));
console.log(hatvanyoz('buvarszivattyu', 5));
console.log(hatvanyoz([], 5));

