//  Vámosi László, I/E/1
// 2023.01.06.

function otoslotto() {
  const kihuzottSzamok = [];

  while (kihuzottSzamok.length < 5) {
    const veletlenSzam = Math.floor(Math.random() * 90) + 1;

    if (!kihuzottSzamok.includes(veletlenSzam)) {
      kihuzottSzamok.push(veletlenSzam);
    }
  }

  // A számokat növekvő sorrendbe rendezzük
  kihuzottSzamok.sort((a, b) => a - b);

  return kihuzottSzamok;
}

// Példa hívás
const kihuzottSzamok = otoslotto();
console.log('Az öt kihúzott szám:', kihuzottSzamok);

