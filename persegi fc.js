  function pemain(nama, noPunggung){
    if(noPunggung%2 == 0){
      console.log('Pemain '+nama+' dengan nomor punggung '+noPunggung+' merupakan Target Attacter')
    }
    else if(noPunggung > 50 || noPunggung < 100 ){
      if(noPunggung%2 == 0){
        console.log('Pemain '+nama+' dengan nomor punggung '+noPunggung+' merupakan Captain Team')
      }
    }
    else if(noPunggung%2 == 1){
     console.log('Pemain '+nama+' dengan nomor punggung '+noPunggung+' merupakan Defender')
    }
    else if(noPunggung > 90){
      if(noPunggung%2 == 1){
       console.log('Pemain '+nama+' dengan nomor punggung '+noPunggung+' merupakan Playmaker')
      }
    }
    else if (noPunggung%3 ==0 && noPunggung%5 == 0){
      console.log('Pemain '+nama+' dengan nomor punggung '+noPunggung+' merupakan Keeper')
    }
  }
  
  pemain('Wendi', 5);
  