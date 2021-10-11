const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

class NumberGameApp {

    constructor(isRunning) {
        this.isRunning = true
    }

    runGame() {

        while (this.isRunning) {

            let vogalCorreta
            
              console.log("Descubra a vogal, seu filho da puta!")
              
              let numero = Math.floor(Math.random() * 5) 
            
              switch (numero) {
                  case 1: vogalCorreta = "A"
                break;
                  case 2: vogalCorreta = "E"
                break;
                  case 3: vogalCorreta = "I"
                break;
                  case 4: vogalCorreta = "O"
                break;
                  case 5: vogalCorreta = "U"
                break;
              }
            
              rl.on('line', (input) => {
               if (input.toLocaleUpperCase() === vogalCorreta) {
                   console.log("vc acertou!")
                   process.exit()
               } else {
                   console.log("Errou!, tente novamente!")
               }
            });
                this.isRunning = false
            }
    }
}

const game = new NumberGameApp()

game.runGame()

//Agora farei o contador




