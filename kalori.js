function count(time) {
  let kalori = 0;
  let j = time % 5;
  if (time == 5) {
    kalori = 60;
    return console.log(
      "anda lari selama " +
        time +
        " menit telah membakar sebanyak " +
        kalori +
        " kalori"
    );
  } else if (j > 5) {
    kalori;
  }
}

count(5);