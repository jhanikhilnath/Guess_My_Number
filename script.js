{
  ('use strict');

  let random, currNumber, currScore, highScore;

  highScore = 0;

  init();

  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      main();
    }
  });

  document.querySelector('.check').addEventListener('click', main);

  function main() {
    if (currScore > 0) {
      if (
        document.querySelector('.guess').value !== '' &&
        document.querySelector('.guess').value <= 20
      ) {
        currNumber = document.querySelector('.guess').value;
        console.log(currNumber);

        if (currNumber < random) {
          document.querySelector('.message').textContent = '📉Too low...';
          document.querySelector(
            '.label-score'
          ).textContent = `💯 Score: ${(currScore -= 1)}`;
        } else if (currNumber > random) {
          document.querySelector('.message').textContent = '📈Too High...';
          document.querySelector(
            '.label-score'
          ).textContent = `💯 Score: ${(currScore -= 1)}`;
        } else if ((currNumber = random)) {
          document.getElementById('bods').classList.add('victory');
          document.querySelector('.message').textContent = '✅Correct No. ';
          document.querySelector('.number').textContent = `${random}`;

          highScoreFunc();
        }
      } else {
        document.querySelector('.message').textContent =
          'Enter a value And ensure its under or equal to 20';
      }
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.getElementById('bods').classList.add('lose');
    }

    document.querySelector('.guess').value = '';
  }

  const highScoreFunc = function () {
    if (highScore < currScore) {
      highScore = currScore;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${highScore}`;
    }
  };

  document.querySelector('.again').addEventListener('click', init);

  function init() {
    currScore = 20;
    random = Math.floor(Math.random() * 20);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector(
      '.label-score'
    ).textContent = `💯 Score: ${currScore}`;
    document.querySelector('.guess').value = '';
    let el = document.getElementById('bods');
    el.classList.remove('victory');
    el.classList.remove('lose');
    return random;
  }
}
