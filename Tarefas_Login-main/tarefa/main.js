const form = document.querySelector('.form');
const input = document.getElementById('input');
const lista = document.getElementById('lista');
let todos = [];

function listarTarefas() {
    lista.innerHTML = '';

    todos.forEach(function (tarefa, i) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.textContent = tarefa;

        button.textContent = 'Excluir';
        button.addEventListener('click', function () {
            todos.splice(i, 1);
            listarTarefas();
        });

        li.appendChild(span);
        li.appendChild(button);

        lista.appendChild(li);
    });
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const texto = input.value.trim();

    if (texto.length === 0) {
        return;
    }

    todos.push(texto);
    input.value = '';
    listarTarefas();
});