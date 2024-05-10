function calculate(){
    const display = document.getElementById("display");
    console.log("Im in");
    display.addEventListener('keydown', function(event){
      if(event.key == 'Enter'){
        console.log(display.innerHTML);
      }
    })
}

