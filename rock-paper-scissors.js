let score = JSON.parse(localStorage.getItem('score'));

      if(!score){
        score = {
          wins : 0,
          losses : 0,
          ties : 0
        };
      }

      updateScoreElement();

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if(playerMove === 'scissors'){
          if(computerMove === 'rock'){
            result = 'You lose.';
          }
          else if(computerMove === 'paper'){
           result = 'You win.';
          }
          else{
           result = 'Tie.';
          }
        }

        else if(playerMove === 'paper'){
         if(computerMove === 'rock'){
          result = 'You win.';
         }
         else if(computerMove === 'paper'){
          result = 'Tie.';
         }
         else{
          result = 'You lose.';
         }
        }

        else if(playerMove === 'rock'){
         if(computerMove === 'rock'){
           result = 'Tie.';
         }
         else if(computerMove === 'paper'){
           result = 'You lose.';
         }
         else{
           result = 'You win.';
         }
         }

         if(result == 'You win.'){
          score.wins += 1;
         }
         else if(result == 'You lose.'){
          score.losses += 1;
         }
         else if(result == 'Tie.'){
          score.ties += 1;
         }

         localStorage.setItem('score' , JSON.stringify(score));

         updateScoreElement();

         document.querySelector('.js-result').innerHTML = result;
         document.querySelector('.js-moves').innerHTML = 
          `You
          <img src="${playerMove}-emoji.png" class="move-icon">
          <img src="${computerMove}-emoji.png" class="move-icon">
          Computer`;

        //  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        //  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    
      }

      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = 
         `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
      const randomNum = Math.random();
      let computerMove = '';

      if(randomNum >= 0 && randomNum < 1/3){
        computerMove = 'rock';
      }
      else if(randomNum >= 1/3 && randomNum < 2/3){
        computerMove = 'paper';
      }
      else if(randomNum >= 2/3 && randomNum < 1){
        computerMove = 'scissors';
      } 

      return computerMove;

      }