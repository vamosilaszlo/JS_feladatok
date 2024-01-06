// Vámosi László, I/E/1
// 2023.01.06.

function fullStack(frontend, backend) {
    const frontendFejlesztok = frontend.split(';').map(name => name.trim());
    const backendFejlesztok = backend.split(';').map(name => name.trim());

    // Azokat a fejlesztőket választjuk ki, akik mind a frontend, mind a backend listában szerepelnek
    const fullStackFejlesztok = frontendFejlesztok.filter(name => backendFejlesztok.includes(name));

    return fullStackFejlesztok;
}
// Tesztek
console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'));
console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'));