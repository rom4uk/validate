/*
<form name="login" action="google.com">
   <input type="text" name="age">
   <input type="text" name="username">
   <input type="text" name="date">
   <input type="submit" value="Validate Me">
</form>
*/
function validate(){
var body = document.body; // змінна боді
var form = document.createElement('form'); //створив ноду form
body.appendChild(form); //додав ноду form в DOM
form.setAttribute('name', 'login'); //form.setAttribute('action', 'google.com'); // задав атрибут ноді
  // додав в ноду form 4 ноди input 
  function createInput(){ 
    var age = document.createElement('input');
    age.setAttribute('text', 'text');
    age.setAttribute('name', 'age');
    form.appendChild(age);
  }
  for(var i = 0; i < 4; i++){
    createInput();
  }

//задаю дисплей блок і маржини елементам форми
var inputs = document.forms[0];
for(var i = 0; i < inputs.length; i++){
  inputs[i].setAttribute('style', 'display: block; margin-top: 5px');
  var element = inputs[i];  
}
/*
var form1 = document.forms[0];
var formInputs = Array.prototype.slice.call(form.children); 

form.children - це псевдомасив дочірніх елементів form
Array.prototype.slice.call(form.children) - робить з нього нативний масив
з всіма методами, з яких нам потрібний forEach
*/
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

//valid age
var z = document.querySelector('input[name="date"]');
var x = document.querySelector('input[name="age"]');
var y = document.querySelector('input[name="username"]');


var clearForm = function(){
  x.value = '';
  y.value = '';
  z.value = '';
}


var ages = function(){
  
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
  else{
    return true;
  }
}

//valid username

var userName = function(){  
  if (!(y.value.startsWith("user_"))) { 
   alert('Поле username повинно починатись з "user_"');
   return false;
 } 
 else{
  return true;
}
}

// valid data

var date = function(){  
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
  else {
   return true;
 }
}
var button = document.getElementById('submit');
button.onclick = function(e){
  e.preventDefault();
  ages();
  userName();
  date();
  if(date() && userName() && date()){
    clearForm();
  }
};
}
validate();