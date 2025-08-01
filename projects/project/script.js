console.log("Roshan");

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button);
    
    button.addEventListener('click', function (el) {
  console.log(el);
  console.log(el.target);
  
  
    if (el.target.id === 'grey'){
        body.style.backgroundColor = el.target.id
    }
      if (el.target.id === 'white'){
        body.style.backgroundColor = el.target.id
    }
      if (el.target.id === 'blue'){
        body.style.backgroundColor = el.target.id
    }
      if (el.target.id === 'yellow'){
        body.style.backgroundColor = el.target.id
    }
    if (el.target.id === 'red'){
        body.style.backgroundColor = el.target.id
    }
        
    })
    
});