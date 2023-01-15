Lo que aprendimos en esta aula:

Utilizar el componente de calendario
Manipular fechas
Destructurar objetos en JavaScript

API es un término que las personas que trabajan con el desarrollo web utilizan todos los días, pero ¿sabes que es?

Yo mencioné que podemos acceder a métodos del navegador a través de interfaces, y ellas son las famosas APIs (Application Programming Interfaces), que son construcciones disponibles en los lenguajes de programación y permiten a los desarrolladores a crear funcionalidades complejas más fácilmente.

La documentación de Mozilla explica de forma clara que es una API:

“Piensa en el siguiente ejemplo: el uso de energía eléctrica en tu casa o departamento. Cuando deseas utilizar un electrodoméstico, solamente necesitas prender el aparato al enchufe. No es necesario conectar el cable del aparato directamente a la caja de control eléctrico, algo que además de muy ineficiente, difícil y peligroso (en el caso de que tu no seas electricista).

APIs de navegadores: hacen parte de tu navegador web y son capaces de exponer datos del navegador. Esas construcciones abstraen el código más complejo, proporcionando el uso de sintaxis más simples en su lugar, semejante a lo que momentjs hace, simplificando el trabajo con fechas.

El lenguaje de JavaScript, especialmente client-side, posee diversas APIs disponibles. Ellas no hacen parte del lenguaje en sí, pero son escritas sobre el core del lenguaje JavaScript, proviniendo superpoderes para ser utilizados en tu código.”.

---------------------

Almacenando datos en LocalStorage
PRÓXIMA ACTIVIDAD

Creamos un objeto que contiene llave y valor, y que servirá para almacenar una serie de datos en el LocalStorage.

const datos = {
   nombre,
   fecha,
   edad
}

Los datos de este objeto no están en el formato aceptable para el almacenamiento. Como ya sabemos, LocalStorage solamente acepta guardar informaciones en el formato de strings. ¿Cómo podemos convertir los valores de un objeto para string?

localStorage.setItem('tasks', JSON.stringify (datos))

¡Exacto! La manera correcta de transformar los datos en string es a través de JSON.stringify y aprovechamos para utilizar el setItem para almacenar los datos localmente.


Lo que aprendimos en esta aula:

Guardar las tareas en el navegador utilizando SessionStorage
Almacenar las tareas con LocalStorage
Transformar objetos en string utilizando JSON.stringify()

---------------------

Cortocircuito pipe
PRÓXIMA ACTIVIDAD

Durante el curso utilizamos pipe || para crear una nueva evaluación de cortocircuito( short circuit evaluation).

const tasks = JSON.parse(localStorage.getItem('tasks')) || [ ]COPIA EL CÓDIGO
Con eso, le decimos a la aplicación que en caso de que localStorage este con datos se comporte de una manera, si en caso contrario estuviera vacío, la constante tasks empezaría como un arreglo vacío. Las expresiones lógicas son evaluadas de izquierda a derecha, luego, si la primera declaración sea verdadera se ejecuta normalmente y la segunda declaración no es aplicada, y si el primer es evaluado como falso, ejecutamos el segundo caso.

true || false // true
false || true // true

--------------

 Exhibiendo datos del LocalStorage
PRÓXIMA ACTIVIDAD

En nuestra aplicación ya pudimos guardar los datos que el usuario rellena dentro del localStorage:

const tasksList = JSON.parse(localStorage.getItem('tasks')) || [ ]COPIA EL CÓDIGO
Tenemos una función llamada createTask() el cual genera la estructura HTML de como los datos serán exhibidos y una constante list que tiene la referencia del elemento donde queremos agregar cada tarea, necesitamos enviarle cada una de las tareas e indicarle donde ponerla, ¿Cómo podemos hacerlo?

tasksList.forEach((task) => {
        list.appendChild(createTask(task))
})

Alternativa Correcta. ¡Exacto! LocalStorage se comporta como un arreglo, podemos utilizar métodos de arreglo como el forEachpara iterar sobre los ítems. Después, cada ítem es pasado para el componente Tarea, lo cual será agregado dentro del elemento padre representado por lista.

------------Lo que aprendimos en esta aula:

Recorrer el arreglo con forEach() de las tareas guardadas en LocalStorage
Utilizar pipe
Convertir las tareas almacenadas en formato string a objetos con JSON.parse()


----------------

Cambiando el estado de la tarea
PRÓXIMA ACTIVIDAD

Nuestra próxima tarea es ordenar las fechas del localStorage para que sean exhibidas de la menor fecha para la mayor. Tenemos la función que recibirá la lógica.

export const orderDates = (dates) => { }COPIA EL CÓDIGO
¿Cuál lógica de ordenación podemos utilizar para concluir esta tarea?

Seleccione una alternativa

dates.sort((a, b) => {
    const firstDate = moment(a, 'DD/MM/YYYY')
    const secondDate = moment(b, 'DD/MM/YYYY')
    return firstDate - secondDate
})}

Alternativa Correcta. ¡Exacto! Utilizamos el método sort para ordenación.


-----------Lo que aprendimos
PRÓXIMA ACTIVIDAD

Lo que aprendimos en esta aula:

Filtrar elementos de un arreglo
Ordenar los elementos del LocalStorage


-------------

Cambiando el estado de la tarea
PRÓXIMA ACTIVIDAD

Cuando la persona que esté utilizando nuestra aplicación al darle click en el botón de concluir, tenemos que cambiar el estado de la variable de falso para verdadero.

¿Cómo podemos cambiar el estado de esta variable?

Seleccione una alternativa

tasks[index]['complete'] = !tasks[index]['complete']

Alternativa Correcta. ¡Exacto! El signo de exclamación ! es un operador de negación, luego, niega el estado que era verdade, transformándolo en falso.
