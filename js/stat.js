//stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  //тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  //облако
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  //текст
  ctx.fillStyle = '#000'; 
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  
  var max = -1;
  var maxIndex = -1;
  //расчет максимального времени
  for (var i = 0 ; i < times.length; i++) {  
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  //ищем индекс игрока в .names[]
  var r = names.indexOf('Вы'); 
  //лимит высоты гистограммы
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0); 
  //рисуем гистограмму игрока 'Вы'
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';   
  ctx.fillRect(150, 240, 40, - times[r] * step);
  ctx.fillStyle = '#000';
  ctx.fillText(names[r], 150, 260);
  ctx.fillText(times[r], 150, 240 - times[r] * step - 10); 
  //убераем 'Вы' из .names[]
  names.splice(r, 1); 
  //генерируем прозрачность
  function randomInteger(min, max) { 
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
    }
  //Рисуем гистограммы остальных участников
  for (var i = 0; i < times.length -1; i++) {
    ctx.fillStyle = 'rgba(0, 0, 255,' + ((randomInteger(2, 10) * 0.1).toFixed(1)) + ')';
    ctx.fillRect(240 + 90 * i, 240, 40, -times[i] * step);
  }
  //рисуем имена и время остальных участников
  for (var i = 0; i < times.length -1; i++){
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], 240 + 90 * i, 260);
  ctx.fillText(times[i].toFixed(0), 240 + 90 * i, 240 - times[i] * step -10);
      }
  };
  
  