function truncateString(str, num) {

    console.log(str, num);
    if (str.length > num) {
        // Entro por aca por que el str es mayor al nro pasado por parametro y se procede a cortar el str y agregar ... 
      return str.slice(0, num) + "...";
    } else {
       // Al ser mas chico no hay modificacion 
      return str;
    }
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  