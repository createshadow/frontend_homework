var addElement = {
    
    addSection: function () {
        var section = document.createElement('section');
        document.body.appendChild(section);
    },
    
    addSpan: function () {
        var span = document.createElement('span');
        span.innerHTML = 'Тест по программированию';
        document.querySelector('section').appendChild(span);

    },
    
    addOl: function () {
        var ol = document.createElement('ol');
            document.querySelector('section').appendChild(ol);
    },
    
    addLi: function (number) {
        var li = document.createElement('li');
        li.innerHTML = 'Вопрос №' + number;
        document.querySelector('ol').appendChild(li);
    },
    
    addCheckBox: function (number) {
        var checkBox = document.createElement('input'),
            label = document.createElement('label');
        checkBox.type = 'checkbox';
        checkBox.name = "choice";
        checkBox.id = 'choice';
        label.htmlFor = 'choice';
        label.innerHTML = 'Вариант ответа №' + number;
        document.querySelector('ol').appendChild(checkBox);
        document.querySelector('ol').appendChild(label);
    },

    addButton: function () {
        var button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = 'Проверить мои результаты';
        document.querySelector('section').appendChild(button);
    }
};

addElement.addSection();
addElement.addSpan();
addElement.addOl();
addElement.addLi(1);
addElement.addCheckBox(3);
addElement.addCheckBox(2);
addElement.addCheckBox(1);
addElement.addOl();
addElement.addLi(2);
addElement.addCheckBox(3);
addElement.addCheckBox(2);
addElement.addCheckBox(1);
addElement.addOl();
addElement.addLi(3);
addElement.addCheckBox(3);
addElement.addCheckBox(2);
addElement.addCheckBox(1);
addElement.addButton();