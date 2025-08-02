console.log("Roshan")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((btn)=>{
console.log(btn)
btn.addEventListener('click', function(el){
  console.log(el)
  console.log(el.target)
if(el.target.id === 'grey'){
  body.style.backgroundColor = el.target.id
}
if(el.target.id === 'white'){
  body.style.backgroundColor = el.target.id
}
if(el.target.id === 'blue'){
  body.style.backgroundColor = el.target.id
}
if(el.target.id === 'yellow'){
  body.style.backgroundColor = el.target.id 
}

const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 

if (el.target.id === "muti_color"){
body.style.backgroundColor = randomColor
}
})
})




