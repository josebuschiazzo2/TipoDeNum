/*Tipos de Números en Arreglo:
Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay
*/


// declaro una Funciones para solicitar el valor y validad el dato ingresado o pedirle de nuevo
function isnumber (position:number):number
  {
    let itsnotnum: boolean = true; 

    while (itsnotnum) 
      {
      let num: number = Number(prompt("Ingrese un número de la posición " + position));
      if (isNaN(num) || num % 1) 
        {
        alert("Solos se adminten un números enteros");
        } else {
          itsnotnum = false;
          return num;
          }
      }
  }

//Empiezo con mi programa main
console.clear();
let longvector :number = Number(prompt("Ingrese el largo del vector "));
let vector:number[] = new Array (longvector);
let countneg:number=0;
let countpos:number=0;
let countzero:number=0;

for (let i: number = 0; i <longvector; i++)                                //Cargo los datos y comparo
  {
    vector[i]=isnumber(i+1);
    if (vector[i]===0) 
    {
      countzero++;
    } else {
            if (vector[i]>0)
              {
               countpos++;   
              } else {
                      countneg++;
                      }

            }
  }
console.log("Hay: " + countpos + " números positivos, " + countneg + " números negativos y " + countzero + " Ceros");
