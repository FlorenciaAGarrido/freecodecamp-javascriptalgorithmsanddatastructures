function confirmEnding(str, target) {

    console.log(str)
    console.log(target)

    console.log(target.length)

    console.log(str.slice(-target.length));

    let resultado = str.slice(-target.length);

    console.log(resultado === target);

    // El metodo slice retorna una copia del string a partir del indice pasado por parametro. 
    // Este lo use porque no podia usar en endWith.
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "ian");