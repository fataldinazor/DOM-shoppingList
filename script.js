const addBtn=document.querySelector('.addBtn');
const input=document.querySelector('#item');
const ulist=document.querySelector('.ulist');


addBtn.addEventListener('click',()=>{
    const itemValue=input.value;//value of input
    input.value='';

    const listItem=document.createElement('li');//new bullet point
    const listText=document.createElement('span');//span
    //delete button
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete';

    // newItem.textContent=itemValue;
    listItem.appendChild(listText);
    listText.textContent=itemValue;
    listItem.appendChild(deleteBtn);
    ulist.appendChild(listItem);

    deleteBtn.addEventListener('click',()=>{
        console.log(listItem);
        ulist.removeChild(listItem);
    })
    input.focus();
})

