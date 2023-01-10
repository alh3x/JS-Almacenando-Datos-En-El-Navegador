import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");//1-captura el elemento input date
    
    const value = input.value;
    const date = calendar.value;//2-captura el valor del elemento input date
    const dateFormat = moment(date).format("DD/MM/YYYY");//3-le da un formato estalecido mediante una libreria API
    
    input.value = '';
    calendar.value = '';

    const taskObj = {
      value,
      dateFormat
    };
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({value, dateFormat});//como el codigo se repite envio solo las propiedades indicadas
    localStorage.setItem("tasks", JSON.stringify(taskList));//almacenaremos tasklist en vez de taskobj

    const task = createTask(taskObj)
    list.appendChild(task);
  
  }
  
  //al recibir como parametro un obleto, debemos indicar que propiedades del mismo tomara
  export const createTask = ({value, dateFormat}) => {

    const task = document.createElement('li');
          task.classList.add('card');

    const taskContent = document.createElement('div');
  
    const titleTask = document.createElement('span');
          titleTask.classList.add('task');
          titleTask.innerText = value;
          taskContent.appendChild(checkComplete());
          taskContent.appendChild(titleTask);
  
    const dateElement = document.createElement("span");//4-crea un elemnto html span
          dateElement.innerHTML = dateFormat;//5-el elemento span recive valor y formato del paso 3 
          task.appendChild(taskContent);
          task.appendChild(dateElement);//inserta el elemnto span del paso 5 y 4 como hijo el elemento task 
          task.appendChild(deleteIcon());
    return task;
  };