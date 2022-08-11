document.getElementById('delete-btn').addEventListener('click',function(){
    const pText = document.getElementById('p-text');
    pText.style.display = 'none';
})
document.getElementById('confirm-text').addEventListener('keyup',function(event){
    const deleteBtn = document.getElementById('delete-btn');
    if(event.target.value === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    } 
})