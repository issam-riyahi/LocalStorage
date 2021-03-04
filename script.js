//Main Variable
let textinput=document.getElementById('input-s'),
    btncheckitem=document.querySelector('.check-item'),
    btnadditem=document.querySelector('.add-item'),
    btndeleteitem=document.querySelector('.delete-item'),
    btnShowitem=document.querySelector('.Show-item'),
    result=document.querySelector('.result > span '),
    buttons=document.querySelectorAll('.buttons span');




buttons.forEach(span => {
    span.addEventListener('click' , (e) =>{
        if(e.target.classList =='check-item'){
            CheckItem();
        }
        if(e.target.classList.contains('add-item')){
            AddItem();
        }
        if(e.target.classList.contains('delete-item')){
            deleteItem();
        }
        if(e.target.classList.contains('Show-item')){
            showItems();
        }
    })
})
//function check  input 
function checkinput(){
    if(textinput.value==''){
        result.innerHTML='Input Can not be Empty';
    }
}
//Check Item 
function CheckItem(){
    if(textinput.value==''){
        result.innerHTML='Input Can not be Empty';
    }
else {
  if(localStorage.getItem(textinput.value)){
      result.innerHTML = `Found Local item called <span>${textinput.value}</span>`
  }
  else {
      result.innerHTML =`Can not Found item Called <span>${textinput.value}</span>`
  }
  
}
}
//Add Item 
function AddItem(){
    
    if(textinput.value==''){
        result.innerHTML='Input Can not be Empty';
    }
    else {
        if(localStorage.getItem(textinput.value)){
            result.innerHTML = `this items existe called <span>${textinput.value}</span>`
        }
        else{
            localStorage.setItem(textinput.value,"test");
            result.innerHTML = `Local Storage Item  <span>${textinput.value}</span> Added`;
        }
        
    }
}
//Dlete Item
function deleteItem(){
    
    if(textinput.value==''){
        result.innerHTML='Input Can not be Empty';
    }
    else {
        if(localStorage.getItem(textinput.value)){
            localStorage.removeItem(textinput.value)
            result.innerHTML = `item called <span>${textinput.value}</span> removed`
        }
        else{
            
            result.innerHTML = `Local Storage Item  <span>${textinput.value}</span> not found`;
        }
        
    }
}
//Shoe Items 
function showItems(){
       result.innerHTML='';
    
       for(var i=0 ; i<localStorage.length ; i++ ){
        var span=document.createElement('span');
          
        var text=document.createTextNode(`Local Storage Item ${i} :  ${localStorage.key(i)} `);
        span.appendChild(text); 

        result.appendChild(span);
        result.append(document.createElement('br'))
       }
            
            
        
        
    
}
