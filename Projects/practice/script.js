// Style Paragraph
const text = document.getElementById('text');
const js_Style = document.getElementById('jsstyle')

function js_style(){
    js_Style.addEventListener('click',function(){
            text.style.color = 'red'; 
          text.style.fontSize = '50px';
          text.style.backgroundColor =  'blue'; 
          js_Style.style.fontSize = '50px'
    });
};

//Get Link Attributes
const w3r = document.getElementById('w3r');
function getAttributes(){
    
      const val_text = w3r.text 
      alert('text value is :' + val_text);
    
      const types = w3r.type 
      alert('type value is :' + types);

      const href = w3r.href
      alert('href value is :' + href);

      const hreflang = w3r.hreflang 
      alert('hreflang value is :' + hreflang);

      const rel = w3r.rel
      alert('rel value is :' + rel);

      const target = w3r.target 
      alert('target value is :' + target);
    
}


//Add Table Rows
const table = document.getElementById('sampleTable')
let row_count = 2;
function insert_Row(){
    row_count++;
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>Row${row_count} cell1</td> <td>Row${row_count} cell2</td>`;
    table.appendChild(tr);
}

//Remove Dropdown Item
const colorSelect = document.getElementById('colorSelect');
const form = document.querySelector('form')

function removecolor(){
    colorSelect.remove(Option);  
}

const button = document.createElement('button');
button.textContent = "Add-Color";
button.type = "button"

button.addEventListener('click', function(){
    const newColor = prompt("pls enter a color");
    if(newColor){
  const Option = document.createElement("option")
  Option.text = newColor;
  Option.value = newColor.toLowerCase();
  colorSelect.add(Option);
    }
})

form.appendChild(button);

//volume of sphere 
const MyForm = document.getElementById('MyForm');

const  volume = document.getElementById('volume');
const submit = document.getElementById('submit');


MyForm.addEventListener('submit', function(event){
    event.preventDefault();
const radius = parseFloat(document.getElementById('radius').value);
if(isNaN(radius) || radius <= 0 ){
    alert( "pls enter a valid positive num for radius")
    volume.value = " "
    return
}

let volume_result = (4/3) * Math.PI * Math.pow(radius, 3);
 volume.value = volume_result.toFixed(4);
});


