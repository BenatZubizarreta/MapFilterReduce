// idatzi hemen zure funtzioak
function ariketa1(zenbakiak) {
    return zenbakiak.map(z=>z*2);
  }
  function ariketa2(erabiltzaileak) {
    return erabiltzaileak.map(e=>e.izena+"-k " + e.adina+" urte ditu")

  }
  function ariketa3(zenbakiak) {
    return zenbakiak.filter(z=>z%2==0);
  }
  function ariketa4(erabiltzaileak) {
    return erabiltzaileak.filter(e=>e.adina>=18);
  }
  function ariketa5(zenbakiak) {
    return  zenbakiak.reduce((batura,zenbaki)=>batura+zenbaki,0);
  }
  function ariketa6(erabiltzaileak) {
    return  erabiltzaileak.reduce((zaharrena,e)=>{
        let adin=zaharrena.adina||0;
        if(adin>e.adina){
            return zaharrena;
        }else{
            return e;
        }},{});
    
  }
  function ariketa7(zenbakiak) {
    return zenbakiak.filter(z=>z%2==0).map(z=>z*2).reduce((batura,z)=>batura+=z,0);
  }
  function ariketa8(users) {
    return users.reduce((itemak,u)=>itemak.concat(u.items),[]);
  }
  function ariketa9(erabiltzaileak) {
    let emaitza;
    erabiltzaileak.filter(e=>e.adina>=18);
    erabiltzaileak.filter(e=>e.adina>=18).map(e=>emaitza={Izena:e.izena,erosketak:(e.erosketak.reduce((batura, er)=>batura+er,0))});
    erabiltzaileak.filter(e=>e.adina>=18).map(e=>emaitza={Izena:e.izena,erosketak:(e.erosketak.reduce((batura, er)=>batura+er,0))}).map(e=>e.erosketak).reduce((totala,e)=>totala+e,0);
    return erabiltzaileak.filter(e=>e.adina>=18).map(e=>e.erosketak).reduce((erosketak,u)=>erosketak.concat(u),[]).reduce((totala,e)=>totala+e,0);
    
  }
  function ariketa10(students ) {
    let emaitza;
    return students.map(e=>emaitza={name:e.name,batezbestekoa:(e.scores.reduce((batura, er)=>batura+er,0)/3)}).reduce((altuena,e)=>{
        let bb=altuena.batezbestekoa||0;
        if(bb>e.batezbestekoa){
            return altuena;
        }else{
            return e;
        }},{});
    ;
  }

export {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7, ariketa8, ariketa9, ariketa10}
