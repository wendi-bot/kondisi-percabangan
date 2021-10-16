function penerimaan(nilaiCoding, nilaiInterview) {
    if (
      (nilaiCoding > 80 || nilaiCoding > 60 || nilaiCoding < 80) &&
      (nilaiInterview == "A" || nilaiInterview == "B")
    ) {
      return console.log("Selamat Kamu Berhasil Menjadi Calon Programmer");
    } else {
      console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer");
    }
  }
  
  penerimaan(70, "B");
  