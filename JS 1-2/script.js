 function pow( base, exponent ) {
     var result = 1;

     for (var i = 0; i < exp; i++) {
         result *= base;
     }
     
     return (result);
 }

 var base = +prompt('Укажите число: '),
     exp = +prompt('Укажите степень: ');

     if ( exp <= 0 ) {
       alert('Степень ' + exp + ' не поддерживается, введите целую степень, больше 0');
     }else {
       alert('Ваше число ' + base +  ', возведенное в степень ' + exp + ' = ' + pow(base, exp) );
     }
