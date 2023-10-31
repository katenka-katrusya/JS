'use strict';

(function () {
    // создаём и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    // создаём и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        // добавляем boolean атрибут кнопке 'добавить дело'
        button.disabled = true;

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        // Устанавливаем атрибут disabled, когда поле ввода пустое
        input.addEventListener('input', () => {
            input.value === '' ? (button.disabled = true) : (button.disabled = false);
        });

        return {
            form,
            input,
            button,
        };
    }

    // создаём и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(obj) {
        let item = document.createElement('li');
        // кнопки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // устанавливаем стили для элемента списка, а также для размещения кнопок
        // в его правой части с помощью flex
        item.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        );
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        item.textContent = obj.name;

        if (obj.done === true) item.classList.add('list-group-item-success');

        // добавляем обработчики на кнопки
        doneButton.addEventListener('click', function () {
            item.classList.toggle('list-group-item-success');
        });
        deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                item.remove();
            }
        });

        // вкладываем кнопки в отдельный элемент, чтобы объединить в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    // // создаём массив дел
    let arrayOfCases = [];

    function createTodoApp(container, title = 'Список дел') {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // браузер создаёт событие submit на форме по нажатию Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function (e) {
            // эта строчка небходима, чтобы предотвратить стандартное действие браузера
            // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();

            // игнорируем создание элемента, если пользователь ничего не ввёл в поле
            if (!todoItemForm.input.value) {
                return;
            }

            let newCase = {
                id: getId(arrayOfCases),
                name: todoItemForm.input.value,
                done: false,
            };
            // добавляем дела в созданный массив
            arrayOfCases.push(newCase);
            console.log(arrayOfCases);

            function getId(arr) {
                if (arr.length === 0) return 1;
                let maxId = Math.max(...arr.map(el => el.id));
                return maxId += 1;
            }

            let todoItem = createTodoItem(newCase);

            // создаём и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item);

            // снова деактивируем кнопку отправки дела, после нажатия на кнопку или Enter
            todoItemForm.button.disabled = true;

            // обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';
        });
    }

    window.createTodoApp = createTodoApp;
})();
