// create form, inputs

function createForm(){
  var form = document.createElement('form');
  form.setAttribute('name', 'login');
  form.className = 'my-form';
  var age = document.createElement('input');
  age.setAttribute('type', 'text');
  age.setAttribute('name', 'age');
  age.setAttribute('placeholder', '25');
  age.className = 'inputs'
  var username = document.createElement('input');
  username.setAttribute('type', 'text');
  username.setAttribute('name', 'username');
  username.setAttribute('placeholder', 'user_@gmail.com');
  username.className = 'inputs'
  var date = document.createElement('input');
  date.setAttribute('type', 'text');
  date.setAttribute('name', 'date');
  date.setAttribute('placeholder', '25/11/1987');
  date.className = 'inputs'
  var submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Validate Me');
  submit.className = 'inputs'
  form.appendChild(age);
  form.appendChild(username);
  form.appendChild(date);
  form.appendChild(submit);
  document.body.insertBefore(form, document.body.firstChild);
}
createForm();
function createAlert(){
  var span = document.createElement('span');
}


function checkForm(e){
  e.preventDefault();
  var age = document.querySelector('[name=age]');
  var userName = document.querySelector('[name=username]');
  var date = document.querySelector('[name=date]');
  //check age


  var regAge = /^[0-9]*$/;
  if (!regAge.test(age.value) || age.value < '0'){
    age.classList.add('red');
    console.log(age.value, 'enter a number');
  }
  else {
    age.classList.remove('red');
    console.log(age.value, 'OK');
  }
  //check username

  if (!(userName.value.startsWith('user_')) || userName.value.length <= 5){
    userName.classList.add('red');
    console.log(userName.value, 'User Name should starts with ');
  }
  else {
    userName.classList.remove('red');
    console.log(userName.value, 'OK');
  }

  //check date
  var dateNow = new Date();
  var day = dateNow.getDate();
  var month = dateNow.getMonth() + 1;
  var year = dateNow.getFullYear();
  if(day < 10){
    day = '0' + day;
  }
  if(month < 10){
    month = '0' + month;
  }
  var currentDate = day + '/' + month + '/' + year;
  if(date.value !== currentDate){
    date.classList.add('red');
    console.log('В поле дата введіть поточну дату');
  }
  else {
    date.classList.remove('red');
    console.log(userName.value, 'OK');
  }
  alert('Form successfully complete');
  age.value = '';
  userName.value = '';
  date.value = '';
}


var submit = document.querySelector('input[type=submit]');
console.log(submit)
submit.addEventListener('click', checkForm);
















/*
   
function validate(){
  var body = document.body; 
  var form = document.createElement('form'); 
  body.appendChild(form); 
  form.setAttribute('name', 'login'); 
  function createInput(){ 
    var age = document.createElement('input');
    age.setAttribute('text', 'text');
    age.setAttribute('name', 'age');
    form.appendChild(age);
  }
  for(var i = 0; i < 4; i++){
    createInput();
  }

  var inputs = document.forms[0];
  for(var i = 0; i < inputs.length; i++){
    inputs[i].setAttribute('style', 'display: block; margin-top: 5px');
    var element = inputs[i];  
  }

  inputs[0].setAttribute('placeholder', 'Вік');
  inputs[1].setAttribute('name', 'username');
  inputs[1].setAttribute('placeholder', "username begin's of user_");
  inputs[2].setAttribute('name', 'date');
  inputs[2].setAttribute('placeholder', 'Date - dd/mm/yyyy');
  inputs[3].setAttribute('type', 'submit');
  inputs[3].setAttribute('value', 'Validate Me');
  inputs[3].setAttribute('id', 'submit');
  inputs[3].removeAttribute('name');
  inputs[3].removeAttribute('text');
  var button = document.getElementById('submit');
  button.onclick = function(e){
    e.preventDefault();
    var z = document.querySelector('input[name="date"]');
    var x = document.querySelector('input[name="age"]');
    var y = document.querySelector('input[name="username"]');
  //validate age
  if(x.value < 0){
    alert("Вік не може бути від'ємним");
    return false;
  }
  else if(x.value.length < 1){
    alert("Поле Вік обов'язкове для заповнення")
  }
  else if(isNaN(x.value)){
    alert('Поле Вік має містити числове значення');
  }
//validate username
if (!(y.value.startsWith("user_"))) { 
 alert('Поле username повинно починатись з "user_"');
 return false;
} 
 // validate data
 var dateNow = new Date();
 var day = dateNow.getDate();
 var month = dateNow.getMonth() + 1;
 var year = dateNow.getFullYear();
 if(day < 10){
  day = '0' + day;
}
if(month < 10){
  month = '0' + month;
}
var currentDate = day + '/' + month + '/' + year;
if(z.value !== currentDate){
  alert('В поле дата введіть поточну дату');
  return false
}
alert('Form successfully complete');
document.querySelector('input[name=age]').value = '';
document.querySelector('input[name=username]').value = '';
document.querySelector('input[name=date]').value = '';

};
}
validate();
*/
