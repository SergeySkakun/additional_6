module.exports = function zeros(expression) {

  let evenNumber = 0;
  let fiveNumber = 0;

  let num = expression.split('*');
  for (let i = 0; i < num.length; i++) {

    let parNumb = parseInt(num[i]);

    if (~num[i].indexOf('!!') == 0) { // проверка на !! в конце строки
      evenNumber += Math.trunc(parNumb/2);
      fiveNumber += Math.trunc(parNumb/5);
      while (parNumb >= 25) {
        fiveNumber++;
        parNumb = parNumb - 25;
      }
    }
    else{
      if(parNumb % 2 == 0) {
        evenNumber += Math.trunc(parNumb/2);
        fiveNumber += Math.floor(Math.trunc(parNumb/5)/2);
        while (parNumb >= 50) {
          fiveNumber++;
          parNumb = parNumb - 50;
        }
      }
      else {
        fiveNumber += Math.ceil(Math.trunc(parNumb/5)/2);
        while (parNumb >= 25) {
          fiveNumber++;
          parNumb = parNumb - 50;
        }
      }
    }
  
    
  }

  if (evenNumber >= fiveNumber) return fiveNumber;
  else return evenNumber;
}
