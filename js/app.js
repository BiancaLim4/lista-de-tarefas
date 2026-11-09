let tarefaInformada = document.querySelector('input#tarefa')
let listagemTarefas = document.querySelector('ul#listaTarefas')
let tarefas = []

function adicionarTarefa() {
    if (tarefaInformada.value.length != 0 && tarefaInformada.value.trim() != 0) {
        //tarefas.push(tarefaInformada.value)
        let item = document.createElement('li')
        item.textContent = tarefaInformada.value
        listagemTarefas.appendChild(item)
    }
    else {
        window.alert('[ERRO] Informe uma tarefa e tente novamente!')
    }
    tarefa.value = ' ';
    tarefa.focus();
}