let boxes = document.querySelectorAll('.box');
const sizes = document.querySelectorAll('.size');
const gridSize = document.querySelectorAll('.grid');
const grid = document.querySelector('.grid'); 
const homeButton = document.getElementById('returnHome');
let count = 0;
let x = 3;
let y = 3;
const counterElement = document.getElementById('counter');
counterElement.classList.toggle('hidden');

function randomize(){


    alert("When you click on a box it will turn the opposite color along with its adjacent boxes. You have to turn all the boxes the same color- yellow!");

boxes.forEach(box => {

if(Math.random() > 0.5){
    box.classList.add('light-on');
}
else{
    box.classList.remove('light.on');
}

});

}

homeButton.addEventListener('click', ()=> home());


sizes.forEach((size,index) => {

    size.addEventListener('click', ()=> handleSize(index));
});

function handleButton() {
   boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
    box.addEventListener('click', () => handleClick(index));    
  });

  counterElement.classList.toggle('hidden');
}

  function turnOpposite(indexBox){

    indexBox.classList.toggle('light-on');

  }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function handleSize (index){
     sizes.forEach((size) => {
        size.classList.toggle('hidden');
    });

    if(index == 0){
        gridSize.forEach((grid) => {
            grid.classList.toggle('grid3');
          });
    }

    else if(index == 1){
      y = 4;
      x= 4;

        gridSize.forEach((grid) => {
            grid.classList.toggle('grid4');
          });
       
    }
    else if(index == 2){
      x = 5;
      y= 5;
      gridSize.forEach((grid) => {
        grid.classList.toggle('grid5');
      });
    }

    for(let i=0; i<(x*y);i++){
        const button = document.createElement('button');  
        button.classList.add('box');
        grid.appendChild(button);
    }
     handleButton();
    randomize();
    
}

  function handleClick(index){

    turnOpposite(boxes[index]);

    if(index >= x) turnOpposite(boxes[index - x]);
    if(index <= (x*y - x -1)) turnOpposite(boxes[index +x]);
    if(index % x != 0) turnOpposite(boxes[index -1]);
    if(index % x != x-1) turnOpposite(boxes[index +1]);

    checkWinner();
    if(count == 50){
        alert("You're at 50 Tries!");
    }
    else if(count == 100) alert("Passed 100 Tries!");
    else if(count == 150) alert("Alright time to switch to another game");
    count++;
    counterElement.innerHTML = `Total Tries: ${count}`;

  }


  
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  function checkWinner() {

    let allLit = true;
    let on = 0;
    let off = 0;

    boxes.forEach(box => {
      if (!box.classList.contains('light-on')) off++;
      else{
        on++;
      }
    });
  
    if(off == 0 ) alert(`Only took you about ${count} Tries !`);
    if(on == 0) alert(`You were supposed to turn all lights ON!`);
  }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function home (){
  location.reload();
}



  
  