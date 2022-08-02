'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getFigure = lang => (getRandomIntInclusive(0, (lang.length - 1)));

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

      const userData = (x) => {
        switch (true) {
          case (x === null):
            exit();
            break;
          case (lang.indexOf(x) !== -1):
            return lang.indexOf(x);
          default:
            return start();
        }
      };
      const newUserData = userData(prompt(`${lang}?`, ''));
      const computerData = getFigure(lang);
      console.log(newUserData);
      console.log('______________');

      const resultPrint = {
        date: {
          RUS: `Вы: ${lang[newUserData]}\nКомпьютер: ${lang[computerData]}`,
          ENG: `You: ${lang[newUserData]}\nComputer: ${lang[computerData]}`,
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
          case (a === 0 && b === 1 || a === 1 && b === 2):
            alert(`${resultPrint.date[langGame]}
            ${playerWin[langGame]}`);
            console.log(`${resultPrint.date[langGame]}
            ${playerWin[langGame]}`);
            console.log(`${a}\n${b}`);
            result.player += 1;
            start();
            break;
          case (a === b):
            alert(`${resultPrint.date[langGame]}
            ${draw[langGame]}`);
            console.log(`${resultPrint.date[langGame]}\n${draw[langGame]}`);
            start();
            break;
          case (a === undefined):
            break;
          default:
            alert(`${resultPrint.date[langGame]}
            ${computerWin[langGame]}`);
            console.log(`${resultPrint.date[langGame]}
            ${computerWin[langGame]}`);
            result.computer += 1;
            start();
            break;
        }
      };
      gameProcess(newUserData, computerData);
    };
  };
  window.rps = game;
})();

