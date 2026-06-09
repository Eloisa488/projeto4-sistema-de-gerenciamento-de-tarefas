function adicionarTarefa(lista, texto) {

  if (!texto || texto.trim() === "") {
    return lista;
  }

  lista.push({
    texto,
    concluida: false
  });

  return lista;
}

function concluirTarefa(lista, indice) {

  if (lista[indice]) {
    lista[indice].concluida = true;
  }

  return lista;
}

module.exports = {
  adicionarTarefa,
  concluirTarefa
};