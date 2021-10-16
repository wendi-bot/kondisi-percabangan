function filter(nama, umur, alamat, tabungan) {
  if (
    (umur > 40 && alamat == "nevada") ||
    alamat == "new york" ||
    (alamat == "havana" && tabungan > 10000000)
  ) {
    let pangkat = "Don";
    return console.log(
      nama + " kemungkinan adalah anggota mafia dengan " + pangkat
    );
  } else if (
    (umur > 25 || umur < 40) &&
    (alamat == "new jersey" || alamat == "manhattan" || alamat == "nevada") &&
    (tabungan > 10000000 || tabungan < 2000000)
  ) {
    let pangkat = "Underboss";
    return console.log(
      nama + " kemungkinan adalah anggota mafia dengan " + pangkat
    );
  } else if (
    (umur > 18 || umur < 24) &&
    (alamat == "california" || alamat == "detroit" || alamat == "boston") &&
    tabungan < 1000000
  ) {
    let pangkat = "Capo";
    return console.log(
      nama + " kemungkinan adalah anggota mafia dengan " + pangkat
    );
  } else {
    return console.log(nama + " tidak mencurigakan");
  }
}

filter("wendi", 19, "boston", 1200000);

