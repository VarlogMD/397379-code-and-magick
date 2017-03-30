'use strict';

window.renderStatistics = function (ctx, names, times) {
  /* тень */
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  /* облако */
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  /* текст */
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  /* Определяем цвет бара */
  function getRandomColor(playerName) {
    if (playerName !== 'Вы') {
      return 'rgba(0, 0, 255,' + ((randomInteger(2, 10) * 0.1) + ')');
    } else {
      return 'rgba(255, 0, 0, 1)';
    }
  }

  /* расчет максимального значения */
  var getMaxValue = function(arrayName) {
    var maxValue = 0;
    for (i = 0; i < arrayName.length; i++) {
      var value = arrayName[i];
      console.log(value);
      if (value > maxValue) {
        maxValue = value;
      }
    }
    return maxValue;
  };

  /* лимит высоты гистограммы */
  var timeMaxValue = getMaxValue(times);
  var histogramHeight = 150;
  var step = histogramHeight / timeMaxValue;

  /* рисуем гистограмму */
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = getRandomColor(names[i]);
    ctx.fillRect(150 + 90 * i, 240, 40, -times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 150 + 90 * i, 260);
    ctx.fillText(times[i].toFixed(0), 150 + 90 * i, 240 - times[i] * step - 10);
  }

    /* генерируем прозрачность */
  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
};

