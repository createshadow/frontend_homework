function addName() {
  var names = [];
      namesNumber = 5;
  for (var i = 0; i < namesNumber; i++) {
    var tookName = prompt('Enter your name: ');
        names.push(tookName);
  }

  function findName() {
    var takeName = prompt('Введите ваше имя: '),
        nameLogin = [];
        nameLogin.push(takeName);
    var lnNames = names.length,
        lnNameLogin = nameLogin.length,
        cache;

        for (var i = 0; i < lnNames; ++i){
               cache = names[i];
               for (var j = 0; j < lnNameLogin; ++j){
                   if (cache !== nameLogin[j]) {
                     alert(cache + ', вы успешно вошли');
                   }else {
                     alert('Данного имени нет в базе, введите пожалуйста другое имя');
                      }
                   }
               }
            }

  findName();
}

addName();
