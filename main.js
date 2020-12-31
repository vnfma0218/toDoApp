const btn = document.querySelector('#btn');
const ul = document.querySelector('.toDoList');

btn.addEventListener('click', (e)=>{
   e.preventDefault();
    const inputValue= document.getElementById("inputValue").value
    // console.log(inputValue)
    makeList(inputValue)
    inputValue.value ="";
    
})

function onRemoveHandelr(e) {
    console.log(e.target.parentNode)
    ul.removeChild(e.target.parentNode)
}

function makeList(text){
    const li = document.createElement('li');
    li.textContent=text;
    const span = document.createElement('span')
    span.classList.add('close')
    span.innerHTML='❌'
    span.addEventListener('click', onRemoveHandelr)
    li.appendChild(span)
    ul.appendChild(li)
    
}

