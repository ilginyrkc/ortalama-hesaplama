function ortalamaVeHarfNotu(notlar) {
    let toplam = 0;
    for (let i = 0; i < notlar.length; i++) {
        toplam += notlar[i];
    }
    const ortalama = toplam / notlar.length;
    let harfNotu;
    if (ortalama >= 90) {
        harfNotu = "A";
    } else if (ortalama >= 80) {
        harfNotu = "B";
    } else if (ortalama >= 70) {
        harfNotu = "C";
    } else if (ortalama >= 60) {
        harfNotu = "D";
    } else {
        harfNotu = "F";
    }
    return { ortalama, harfNotu };
}
const notlar = [85, 90, 78, 92, 88];
const sonuc = ortalamaVeHarfNotu(notlar);

console.log(`Ortalama: ${sonuc.ortalama.toFixed(2)}`);
console.log(`Harf Notu: ${sonuc.harfNotu}`);
