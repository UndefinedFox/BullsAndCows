export { gameSession };

function gameSession() {
  let cows = 0;
  let bulls = 0;
  let steps = 10;
  let secretNumber = [];

  gameStart();

  function gameStart() {
    clearGameTable();
    secretNumber = makeSecretNumber();
    reRenderBottom("start");
  }

  function reRenderBottom(status = "finish") {
    if (status === "start") {
      
      document.querySelector("#play").remove();

      document.querySelector("div.game_bottom").innerHTML = `
                    <div class="game_input">
                        <input type="text" autofocus autocomplete="off">
                        <button class="play_button" >проверить</button>
                      </div>`;
      document
        .querySelector("button.play_button")
        .addEventListener("click", gameAct);
    } else {
      document.querySelector("div.game_bottom").innerHTML = `
                                        <button id="play" class="play_button">
                                        <span>играть</span></button>`;

      document.querySelector("#play").addEventListener("click", gameSession);
    }
  }

  function makeSecretNumber() {
    let secretNumber = [];
    while (secretNumber.length < 4) {
      let num = Math.floor(Math.random() * 10);
      if (!secretNumber.includes(num)) {
        secretNumber.push(num);
      }
    }
    return secretNumber;
  }

  function getUserAnswer(tag) {
    let arr = document.querySelector(tag).value.split("");
    return arr;
  }

  function checkUserAnswer(answer) {
    if (answer.length == 4) {
      let numAnswer = [];

      for (let i = 0; i < 4; i++) {
        if ( answer[i] != "" && answer[i] != " " && !isNaN(answer[i]) ) {
          if(numAnswer.includes(+answer[i])){
            return false
          }
          numAnswer.push(+answer[i]);
        } else {
          return false;
        }
      }

      return numAnswer;
    } else {
      return false;
    }
  }

  function compareNumbers(answer, secretNumber) {
    bulls = 0;
    cows = 0;
    answer.forEach((num) => {
      if (secretNumber.includes(num)) {
        if (secretNumber.indexOf(num) === answer.indexOf(num)) {
          bulls += 1;
        } else {
          cows += 1;
        }
      }
    });
  }

  function gameAct() {
    let answer = getUserAnswer("input[type=text]");
    answer = checkUserAnswer(answer);
    if (answer) {
      document.querySelector("input[type=text]").value = "";
      steps--;

      compareNumbers(answer, secretNumber);

      renderRow(answer, cows, bulls, steps);

      if (steps == 0 || bulls == 4) {
        reRenderBottom();
        computeResults();
      }
    } else {
      renderMistake();
    }
  }

  function computeResults() {
    if (bulls == 4) {
      renderResults("win");
    } else {
      renderResults("loose");
    }
  }

  function renderRow(answer, cows, bulls, steps) {
    let table = document.querySelector("div.game_table");
    let div = document.createElement("div");
    div.classList.add("game_raw");
    div.innerHTML = `<div class="raw_col">
                        <span>${steps + 1}</span>
                    </div>
                    <div class="raw_col">
                        <span>${answer.join("")}</span>
                    </div>
                    <div class="raw_col">
                        <img src="assets/icons/cow.svg" alt="cow.swg">
                        <span>${cows}</span>
                    </div>
                    <div class="raw_col">
                        <img src="assets/icons/bull.svg" alt="bull.swg">
                        <span>${bulls}</span>
                    </div>`;
    table.append(div);
  }

  function renderResults(result) {
    let div = document.createElement("div");
    div.classList.add("result");
    if (result == "win") {
      let n = 10 - steps;
      let str = "ход";
      if (n > 1 && n < 5) {
        str += "а";
      }
      if (n >= 5) {
        str += "ов";
      }
      div.innerHTML = `<p>ПОБЕДА! За ${n} ${str}</p>`;
    } else {
      div.innerHTML = `<p>LOOOOOOSEEEER</p>`;
    }

    document.querySelector("div.game_container").prepend(div);
  }

  function renderMistake() {
    let input = document.querySelector("input[type=text]");
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
      input.value = "";
    }, 1000);
  }

  function clearGameTable() {
    document.querySelector("div.game_table").innerHTML = "";
    let div = document.querySelector("div.result");
    if (div) {
      div.remove();
    }
  }
}
