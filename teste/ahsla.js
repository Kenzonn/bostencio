const readline = require("readline");
const { compileFunction } = require("vm");
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

          let erros = 0
         let trava = false

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
                   trava = true
                
               } else {
                   console.log("Errou!, tente novamente!")
               }

               if (input.toLocaleUpperCase() !== vogalCorreta){
                 erros =  erros + 1
                 
               }


            if (trava) {
              if (erros === 0) {
                console.log("E ainda foi de primeira! Parabens!!")
                process.exit()
              } else {
                console.log(`mas errou ${erros} vezes`)
                process.exit()
              }}

            });

  

              
                this.isRunning = false

              
               
                  

                
            }
    }
}

const game = new NumberGameApp()

game.runGame()

