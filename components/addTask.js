import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento)
    list.appendChild(task);
  
  }
  
  
  const createTask = (evento) => {
    evento.preventDefault();
    /**obtenemos la informacion y recibe el nombre de la key que queremos encontrar
     * || [] sirve para que en caso de tener calor null o indefinido, se la formatea o da un valor por defecto de array
     * con el metodo JSON.parse tomamos el objeto string y lo regresamos a un objeto que podemos utilizar 
     * de esta manera la informacion de las tareas se amacenaran y no se perdera 
     */
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(taskList);
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");//1-captura el elemento input date
    const value = input.value;
    const date = calendar.value;//2-captura el valor del elemento input date
    const dateFormat = moment(date).format("DD/MM/YYYY");//3-le da un formato estalecido mediante una libreria API
    console.log(dateFormat);
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
    console.log(value, dateFormat);
    const taskObj = {
      value,
      dateFormat
    };
  
    taskList.push(taskObj)
    
  /**sesionStorage,la informacion persiste mientras la pestea este avierta
   * stringify devuelve un string JSON sorespondiente al vlaor especificado.
   * localStorage almacena la informacion, pero almomento de agregar nuevas tareas e sobreescriben
   */
    localStorage.setItem("tasks", JSON.stringify(taskList));//almacenaremos tasklist en vez de taskobj
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
  
    const dateElement = document.createElement("span");//4-crea un elemnto html span
    dateElement.innerHTML = dateFormat;//5-el elemento span recive valor y formato del paso 3 
    console.log(dateElement)
    task.appendChild(taskContent);
    task.appendChild(dateElement);//inserta el elemnto span del paso 5 y 4 como hijo el elemento task 
    task.appendChild(deleteIcon());
    return task;
  };