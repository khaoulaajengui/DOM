//delete-btn//
//var del = document.getElementsByClassName('del-btn')
//console.log(del)
//for (let i =0;i<del.length;i++){
  //  del[i].addEventListener('click',function(e){
  //      e.target.parentElement.remove()}
  //  }
var love=document.getElementsByClassName('Heart') 
//console.log(love)  
for (let el of love ) {
    el.addEventListener('click',function(e){
       console.log( e.target.classList.toggle('red'))
    })
}

