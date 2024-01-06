//  Vámosi László, I/E/1
// 2023.01.06.

function valaszokatOsszesit(tantargyak) {
    // Objektum inicializálása
    const statisztika = {};

    // Kisbetűvé alakítás
    const kisbetusTantargyak = tantargyak.map(tantargy => tantargy.toLowerCase());

    // Statisztika készítése
    kisbetusTantargyak.forEach(tantargy => {
        if (statisztika[tantargy]) {
            // Ha már létezik a tantárgy a statisztikában, növeljük a szavazatszámát
            statisztika[tantargy]++;
        } else {
            // Ha még nem létezik, inicializáljuk az értékét 1-re
            statisztika[tantargy] = 1;
        }
    });

    return statisztika;
}

// Teszt
const eredmeny = valaszokatOsszesit([
    'Indiszkret Matematika', 'Kalkulus III', 'Tavolito es valosagos szamitasok',
    'kalkulus iii', 'tavolito es valosagos szamitasok',
    'TAVOLITO ES VALOSAGOS SZAMITASOK', 'kalkulus iii', 'Kalkulus III',
    'Indiszkret Matematika', 'tAvOlItO Es vAlOsAgOs sZaMiTaSoK',
    'Kaveautomatak es informalis nyelvek', 'tavolito es valosagos szamitasok'
]);

console.log(eredmeny);

