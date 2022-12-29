import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');


const addTask = (evento) => {
  const list = document.querySelector('[data-list]');
  const task = createTask(evento)
  list.appendChild(task);

}


const createTask = (evento) => {
  evento.preventDefault();
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

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
