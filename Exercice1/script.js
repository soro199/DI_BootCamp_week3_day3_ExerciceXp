//  Exercise 1: Timer

// Part I
// 1)In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2) The function will alert “Hello World”.


function hello(){

    alert("Hello World")
}

setTimeout(hello,2000)



// Part II
// 1) In your Javascript file, using setTimeout, call a function after 2 seconds.



// 2) The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


const container = document.getElementById("container")


 function world(){
    const  hworld = document.createElement('p') 
   
     hworld.textContent = "Hello World"

    container.appendChild(hworld);


 }

 setTimeout(world,2000)




// Partie III
// 1) Dans votre fichier Javascript, à l'aide de setInterval, appelez une fonction toutes les 2 secondes.

   



function world(){
    const  hworld = document.createElement('p') 

     hworld.textContent = "Hello World"

    container.appendChild(hworld);   // 2) La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.


}
let set = setInterval(world,2000)

const button = document.getElementById('clear'); // 3) L'intervalle sera effacé (c'est-à-dire clearInterval), lorsque l'utilisateur cliquera sur le bouton.

button.addEventListener('click', function() {
    clearInterval(set);
});




//4)  Au lieu de cliquer sur le bouton, l'intervalle sera effacé (c'est-à-dire clearInterval) dès qu'il y aura 5 paragraphes à l'intérieur du <div id="container">.


function world() {
    if (container.childElementCount === 5) {
        clearInterval(set);
        return;
    }

    const  hworld = document.createElement('p') 
    hworld.textContent = "Hello World"
    
    container.appendChild(hworld); 
}

setInterval(world, 2000)