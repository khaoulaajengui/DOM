function UpdateTotalPrice(){
  const price = document.getElementsByClassName('P-T')
  let sum =0;
  for (let i = 0; i < price.length; i++) {
      sum += parseInt(price[i].innerHTML)
  }
  let PRIX_Total = document.getElementById('Total')
  PRIX_Total.innerHTML = sum}


//delete-btn//
var del = document.getElementsByClassName('del-btn')
//console.log(del)
for (let i =0;i<del.length;i++){
   del[i].addEventListener('click',function(e){
       e.target.parentElement.remove()})
      }


   //react-btn   
var love=document.getElementsByClassName('heart') 
//console.log(love)  
for (let el of love ) {
    el.addEventListener('click',function(e){
       console.log( e.target.classList.toggle('red'))
    })
}
//plus btn
let btnPlus = document.getElementsByClassName('plus-btn')

for (let i =0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(e){
        let qte = e.target.nextElementSibling
        console.log(qte)
        qte.innerHTML = +(qte.innerHTML) +1
        //console.log(qte.innerHTML);
        const PRIX_UNITAIRE = e.target.nextElementSibling.nextElementSibling.nextElementSibling
        let prix = e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
        prix.innerHTML = +(PRIX_UNITAIRE.innerHTML) * parseInt(qte.innerHTML) 
        UpdateTotalPrice()
        
    })
}

//minus btn
let sustractionbtn = document.getElementsByClassName('soustr-btn')
for (let i =0;i<sustractionbtn.length;i++){
    sustractionbtn[i].addEventListener('click',function(e){
        let qte = e.target.previousElementSibling
        //console.log(qte)
        if (qte.innerHTML>0){
            qte.innerHTML = +(qte.innerHTML) -1
        }
        //console.log(qte.innerHTML);
        const PRIX_UNITAIRE = e.target.nextElementSibling
        let prix = e.target.nextElementSibling.nextElementSibling
        prix.innerHTML = +(PRIX_UNITAIRE.innerHTML) * parseInt(qte.innerHTML) 
        UpdateTotalPrice()
        
    })
}


