function repeatStringNumTimes(str, num) {

    console.log(str)
    console.log(num)

    if (num < 1) {
      console.log("El numero es menor a 1. Salida vacia")
      return "";
    } else if (num === 1) {
        console.log("El numero es 1. Salida con el mismo valor.")
      return str;
    } else {
        console.log("El nro es mayor a 1. Se volvera a llamar a esta funcion disminuyendo en 1 el valor.")
      return str + repeatStringNumTimes(str, num - 1);
    }
  }

  console.log("Resultado final de la funcion: " + repeatStringNumTimes("Fer", 4));
