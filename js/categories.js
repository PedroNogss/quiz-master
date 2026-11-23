const btnSelectAll = document.getElementById("btn-select-all"); // Busca o botão que seleciona todas as categorias.
const btnClearAll = document.getElementById("btn-clear"); // Busca o botão que remove a seleção das categorias.
const btnStartConfig = document.getElementById("btn-start-config"); // Busca o botão que inicia o fluxo de configuração do quiz.
const categoryCards = document.querySelectorAll(".category-card"); // Seleciona todos os cartões de categoria existentes na página.
let selectedCategories = []; // Cria uma lista mutável para guardar os nomes das categorias selecionadas.
function updateSelectedCategories() {
  // Declara uma função que sincroniza a lista com os cartões selecionados no HTML.
  selectedCategories = []; // Esvazia a lista antes de reconstruí-la com as seleções atuais.
  categoryCards.forEach((card) => {
    // Percorre cada cartão de categoria.
    if (card.classList.contains("selected")) {
      // Verifica se o cartão possui a classe que indica seleção.
      selectedCategories.push(card.dataset.category); // Adiciona à lista o nome da categoria definido no atributo data-category.
    } // Encerra a verificação de seleção deste cartão.
  }); // Encerra a repetição por todos os cartões.
} // Encerra a função que atualiza a lista de categorias selecionadas.

categoryCards.forEach((card) => {
  // Percorre cada cartão para configurar sua interação individual.
  card.addEventListener("click", () => {
    // Registra uma função que será executada quando o cartão receber um clique.
    card.classList.toggle("selected"); // Alterna a classe selected para selecionar ou desmarcar o cartão clicado.
    updateSelectedCategories(); // Atualiza a lista para refletir o estado atual de todos os cartões.
  }); // Encerra o registro do evento de clique do cartão.
}); // Encerra a configuração dos eventos dos cartões.

btnSelectAll.addEventListener("click", () => {
  // Registra a ação do botão para selecionar todas as categorias ao ser clicado.
  categoryCards.forEach((card) => {
    // Percorre todos os cartões disponíveis.
    card.classList.add("selected"); // Adiciona a classe selected ao cartão, marcando-o como selecionado.
  }); // Encerra a repetição por todos os cartões.
  updateSelectedCategories(); // Atualiza a lista com todas as categorias selecionadas.
}); // Encerra o evento de clique do botão de selecionar todas.

btnClearAll.addEventListener("click", () => {
  // Registra a ação do botão para limpar a seleção ao ser clicado.
  categoryCards.forEach((card) => {
    // Percorre todos os cartões disponíveis.
    card.classList.remove("selected"); // Remove a classe selected do cartão, deixando-o desmarcado.
  }); // Encerra a repetição por todos os cartões.
  updateSelectedCategories(); // Atualiza a lista, que ficará vazia se nenhum cartão estiver selecionado.
}); // Encerra o evento de clique do botão de limpar seleção.
btnStartConfig.addEventListener("click", () => {
  if (selectedCategories.length > 0) {
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories),
    );
    window.location.href = "settings.html";
  } else {
    alert("Selecione pelo menos uma categoria para começar!");
  }
});
