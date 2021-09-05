const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  refs = {
      start: document.querySelector('[data-action="start"]'),
      stop:document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body'),
  }

  refs.start.addEventListener('click', onStartClick);
  refs.stop.addEventListener('click', onClickStop);


  const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };


  function  onStartClick (e) {
    id = setInterval (colorSwitch, 1000);
    refs.start.disabled = true;
  }

   function colorSwitch () {
       refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`
   }

   function onClickStop () {
      clearInterval(id); 
   }