//  Vámosi László, I/E/1
// 2023.01.06. 

function szepTomb(tomb) {
  // Ellenőrizzük, hogy a bemenet egy tömb-e
  if (!Array.isArray(tomb)) {
    return false;
  }

  // Ha a tömb üres, akkor az is szép
  if (tomb.length === 0) {
    return true;
  }

  // Vegyük az első elem típusát
  const elsoElemTipus = typeof tomb[0];

  // Ellenőrizzük, hogy minden elem ugyanolyan típusú-e, mint az első elem
  for (let i = 1; i < tomb.length; i++) {
    if (typeof tomb[i] !== elsoElemTipus) {
      return false; 
    }
  }

  // Ha minden elem azonos típusú, akkor a tömb szép
  return true;
}

// Tesztek
console.log(szepTomb(['alma', 'korte', 'szilva', 'barack', 'palinka'])); 
console.log(szepTomb([10, 20, 30, 40, '50', 60, 70])); 
console.log(szepTomb([])); 
console.log(szepTomb('YEE HAW!')); 
