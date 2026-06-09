const tarefas = [];

const input = document.getElementById("tarefaInput");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

function atualizarContador() {
  contador.textContent = `Tarefas: ${tarefas.length}`;
}

function renderizar() {

  lista.innerHTML = "";

  tarefas.forEach((tarefa, indice) => {

    const li = document.createElement("li");

    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    li.textContent = tarefa.texto;

    const botaoConcluir =
      document.createElement("button");

    botaoConcluir.textContent = "Concluir";

    botaoConcluir.addEventListener("click", () => {

      tarefa.concluida = true;

      renderizar();
    });

    li.appendChild(botaoConcluir);

    lista.appendChild(li);

  });

  atualizarContador();
}

botao.addEventListener("click", () => {

  const texto = input.value.trim();

  if (texto === "") return;

  tarefas.push({
    texto,
    concluida: false
  });

  input.value = "";

  renderizar();

});

renderizar();