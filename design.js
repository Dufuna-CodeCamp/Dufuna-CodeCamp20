let submitForm = document.getElementById('validateForm'),
    btn = document.getElementById('btn'),
    task_input = document.getElementById('task_input'),
    taskbtn1 = document.getElementById('taskbtn1'),
    taskbtn2 = document.getElementById('taskbtn2'),
    check1 = document.getElementById('check1'),
    check2 = document.getElementById('check2'),
    check3 = document.getElementById('check3');    
    obj2 = document.getElementsByClassName('obj2');
    obj3 = document.getElementById('obj3');

function required(field, event) {
    if (task_input.value == '') {
        task_input.nextElementSibling.innerHTML = "⚠️Please enter a valid task";
        event.preventDefault();
        btn.disable = true;
        btn.style = "background-color: grey"

    } else {
        field.nextElementSibling.innerHTML = "";
        btn.disabled = false;
        return true; 
    }

}    

function validateForm (e){
    required(task_input, e);
    return true;  
}

submitForm.addEventListener("submit", validateForm);



function removeElement1(word1) {
//Removes an element from the document.
var word1 = document. getElementById("word1");
word1. parentNode. removeChild(word1);
}

function removeElement2(word2) {
//Removes an element from the document.
var word2 = document. getElementById("word2");
word2. parentNode. removeChild(word2);
}

function removeElement3(word3) {
//Removes an element from the document.
var word3 = document. getElementById("word3");
word3. parentNode. removeChild(word3);
}