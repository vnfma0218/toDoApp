const btn = document.querySelector('#btn');
const ul = document.querySelector('.toDoList');

btn.addEventListener('click', (e)=>{
   e.preventDefault();
    const inputValue= document.getElementById("inputValue").value
    console.log(inputValue)
    makeList(inputValue)
    inputValue.value ="";
    
    const closeBtn = document.querySelector('.close')
    closeBtn.addEventListener('click', (e)=>{
        console.log(closeBtn);
        const parentNode = closeBtn.parentNode
        console.log(parentNode.value)
    
    })
})




function makeList(text){
    const li = document.createElement('li');
    li.textContent=text;
    const span = document.createElement('span')
    span.classList.add('close')
    span.innerHTML='❌'
    li.appendChild(span)
    ul.appendChild(li)
    
}

