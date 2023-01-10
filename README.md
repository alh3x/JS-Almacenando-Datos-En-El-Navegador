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