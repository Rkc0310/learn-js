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



// Image list with properties
    const images = [
      {
        url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
      },
      {
        url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
      },
      {
        url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
      }
    ];

    function showRandomImage(){
        const randomIndex = Math.floor(Math.random() * images.length )
        console.log(randomIndex);
       const selectedImg = images[randomIndex];

       //creating new image container 
       const newImg = document.createElement('img');
       newImg.src = selectedImg.url;
       newImg.width = selectedImg.width;
       newImg.height = selectedImg.height;


       const imageContainer =  document.getElementById('image-container')
       imageContainer.innerHTML = '';
       imageContainer.appendChild(newImg)
    }

    //Highlight Bold on Hover
    // var boldItems ;
    // window.onload = get_BoldItem();
   
    
const bold_Word = document.getElementsByTagName('strong')
        function highlight(){
        //  for (const word of bold_Word) {
        //     word.style.color = "green"
        //  } 

        // for(i = 0; i< bold_Word.length; i++){
        //     bold_Word[i].style.color = "green"
        // }

           Array.from(bold_Word).forEach(word=>{
            word.style.color = "green"
           })
        }

        function return_normal(){
      for (const word of bold_Word) {
        word.style.color = "black"
      }
            
        }
     


