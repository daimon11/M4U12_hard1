'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getFigure = lang => lang[(getRandomIntInclusive(0, (lang.length - 1)))];

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ?
    FIGURES_ENG : FIGURES_RUS;
    console.log(lang);

    return function start() {
      const langGame = language === 'EN' || language === 'ENG' ? 'ENG' : 'RUS';
      console.log(langGame);

      const dataValue = {
        'rock': {
          'ENG': 'rock',
          'RUS': 'камень',
        },
        'scissors': {
          'ENG': 'scissors',
          'RUS': 'ножницы',
        },
        'paper': {
          'ENG': 'paper',
          'RUS': 'бумага',
        },
        'exitOrNot': {
          'ENG': 'Are you sure you want to get out?',
          'RUS': 'Точно ли Вы хотите выйти?',
        },
        'resultAllGames': {
          'ENG': `The result of the games:\nComputer: ${result.computer}
          You: ${result.player}`,
          'RUS': `Результат игр:\nКомпьютер: ${result.computer}
          Вы: ${result.player}`,
        },
      };

      const exit = () => {
        const choice = (confirm(dataValue.exitOrNot[langGame]));
        if (choice === true) {
          alert(dataValue.resultAllGames[langGame]);
          console.log(dataValue.resultAllGames[langGame]);
          return;
        } else {
          start();
        }
      };

      const userDateTransform = (string) => {
        switch (true) {
          case (langGame === 'ENG'):
            switch (true) {
              case (string === 'r' || string === 'R' || string === 'rock' ||
              string === 'камень'):
                string = dataValue.rock[langGame];
                break;
              case (string === 'scissors' || string === 's' || string === 'S'):
                string = dataValue.scissors[langGame];
                break;
              case (string === 'paper' || string === 'p' || string === 'P'):
                string = dataValue.paper[langGame];
                break;
              default:
                break;
            }
            break;
          case (langGame === 'RUS'):
            switch (true) {
              case (string === 'камень' || string === 'кам' || string === 'к' ||
              string === 'К'):
                string = dataValue.rock[langGame];
                break;
              case (string === 'ножницы' || string === 'нож' ||
              string === 'н' || string === 'Н'):
                string = dataValue.scissors[langGame];
                break;
              case (string === 'бумага' || string === 'бум' ||
              string === 'б' || string === 'Б'):
                string = dataValue.paper[langGame];
                break;
              default:
                break;
            }
            break;
          default:
            start();
        }
        return string;
      };

      const userData = () => {
        const data = prompt(`${lang}?`, '');
        return userDateTransform(data);
      };
      const computerData = getFigure(lang);
      const newUserData = userData();
      console.log('______________');

      const resultPrint = {
        date: {
          RUS: `Вы: ${newUserData}\nКомпьютер: ${computerData}`,
          ENG: `You: ${newUserData}\nComputer: ${computerData}`,
        },
      };

      const playerWin = {
        RUS: 'Вы выиграли',
        ENG: 'You win',
      };

      const computerWin = {
        RUS: 'Компьютер выиграл',
        ENG: 'Computer win',
      };

      const draw = {
        RUS: 'Ничья',
        ENG: 'draw',
      };

      const gameProcess = (a, b) => {
        switch (true) {
          case (a === dataValue.rock[langGame] &&
            b === dataValue.scissors[langGame]):
            alert(`${resultPrint.date[langGame]}
            ${playerWin[langGame]}`);
            console.log(`${resultPrint.date[langGame]}
            ${playerWin[langGame]}`);
            console.log(`${a}\n${b}`);
            result.player += 1;
            start();
            break;
          case (a === dataValue.scissors[langGame] &&
            b === dataValue.rock[langGame]):
            alert(`${resultPrint.date[langGame]}
            ${computerWin[langGame]}`);
            console.log(`${resultPrint.date[langGame]}\n
            ${computerWin[langGame]}`);
            console.log(`${a}\n${b}`);
            result.computer += 1;
            start();
            break;
          case (a === b):
            alert(`${resultPrint.date[langGame]}
            ${draw[langGame]}`);
            console.log(`${resultPrint.date[langGame]}\n${draw[langGame]}`);
            start();
            break;
          case (a === dataValue.rock[langGame] &&
            b === dataValue.paper[langGame]):
            alert(`${resultPrint.date[langGame]}
            ${computerWin[langGame]}`);
            console.log(`${resultPrint.date[langGame]}\n
            ${computerWin[langGame]}`);
            console.log(`${a}\n${b}`);
            result.computer += 1;
            start();
            break;
          case (a === dataValue.scissors[langGame] &&
            b === dataValue.paper[langGame]):
            alert(`${resultPrint.date[langGame]}
            ${playerWin[langGame]}`);
            console.log(`${resultPrint.date[langGame]}\n
            ${playerWin[langGame]}`);
            console.log(`${a}\n${b}`);
            result.player += 1;
            start();
            break;
          case (a === dataValue.paper[langGame] &&
            b === dataValue.rock[langGame]):
            alert(`${resultPrint.date[langGame]}
            ${playerWin[langGame]}`);
            console.log(`${resultPrint.date[langGame]}\n
            ${playerWin[langGame]}`);
            console.log(`${a}\n${b}`);
            result.player += 1;
            start();
            break;
          case (a === dataValue.paper[langGame] &&
            b === dataValue.scissors[langGame]):
            alert(`${resultPrint.date[langGame]}
            ${computerWin[langGame]}`);
            result.computer += 1;
            console.log(`${resultPrint.date[langGame]}\n
            ${computerWin[langGame]}`);
            console.log(`${a}\n${b}`);
            start();
            break;
          case (a === null):
            exit();
            return;
          default:
            start();
        }
      };
      gameProcess(newUserData, computerData);
    };
  };
  window.rps = game;
})();

