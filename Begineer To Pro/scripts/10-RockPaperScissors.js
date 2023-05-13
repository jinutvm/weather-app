let scores = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    ties: 0
}

function pickComputerMove() {
    let computerRandom = Math.random();
    let computerSelection = '';
    if (computerRandom>0 && computerRandom <0.33) {
        computerSelection = 'rock';
    } else if (computerRandom >=0.33 && computerRandom < 0.66) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

function pickWinner(computerSelection,yourSelection) {
    if (yourSelection == computerSelection) {
        console.log(`Computer selected ${computerSelection}. Result is Tie`)
        document.querySelector('.js-winner').innerHTML = 'Tie.'
        scores.ties += 1
        let resultDesc = `You
            <img src="images/${yourSelection}-emoji.png" alt="" class="move-icon">
            <img src="images/${computerSelection}-emoji.png" alt="" class="move-icon">
            Computer`
        document.querySelector('.js-selections').innerHTML = resultDesc;
        console.log (`Wins: ${scores.win} Losses: ${scores.loss} Ties: ${scores.ties}`)
        return
    }
    if (yourSelection == 'rock') {
        if (computerSelection == 'paper') {
            document.querySelector('.js-winner').innerHTML = 'Computer WON.'
            console.log(`Computer selected ${computerSelection}. Computer WON`)
            scores.loss += 1
        } else {
            document.querySelector('.js-winner').innerHTML = 'You WON.'
            console.log(`Computer selected ${computerSelection}. You WON`)
            scores.win += 1
        }
    }
    if (yourSelection == 'paper') {
        if (computerSelection == 'scissors') {
            document.querySelector('.js-winner').innerHTML = 'Computer WON.'
            console.log(`Computer selected ${computerSelection}. Computer WON`)
            scores.loss += 1
        } else {
            document.querySelector('.js-winner').innerHTML = 'You WON.'
            console.log(`Computer selected ${computerSelection}. You WON`)
            scores.win += 1 
        }
    }
    if (yourSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log(`Computer selected ${computerSelection}. Computer WON`)
            scores.loss += 1
        } else {
            console.log(`Computer selected ${computerSelection}. You WON`)
           scores.win += 1 
        }
    }
    console.log (`Wins: ${scores.win} Losses: ${scores.loss} Ties: ${scores.ties}`)
    document.querySelector('.js-scores').innerHTML = `Wins: ${scores.win} Losses: ${scores.loss} Ties: ${scores.ties}`
    let resultDesc = `You
    <img src="images/${yourSelection}-emoji.png" alt="" class="move-icon">
    <img src="images/${computerSelection}-emoji.png" alt="" class="move-icon">
    Computer`
    document.querySelector('.js-selections').innerHTML = resultDesc;
    localStorage.setItem('score', JSON.stringify(scores))
}