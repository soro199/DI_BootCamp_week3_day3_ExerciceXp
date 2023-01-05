

// 1) Copy the code above, to a structured HTML file. ok
// 2) In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
    // The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
    // Hint : use clearInterval as soon as the box reaches the right end side of the container
    // Hint : check out the demonstration in the Course Noted named JS Functions

      //recuperation des id
      const Div1 = document.querySelector('#animate');
      const Div2 = document.querySelector('#container');
      const button = document.querySelector('button');

      //Declaration des variables  
      let segment
      let gauche =0
      // une fonction pour le deplacement du box

        function deplacement() {
            if(gauche === 350 ) return
        gauche += 1;
        Div1.style.left = gauche + "px";

        
        //   l'animation
            
        

        if (gauche >= Div1.offsetWidth - Div2.offsetWidth) {
            clearInterval(segment);
        }
    }


      //définition une fonction myMove qui crée un intervalle
      function myMove() {
       setInterval(deplacement, 1);
    }
