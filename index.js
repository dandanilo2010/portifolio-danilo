const button = document.querySelector(".btn-mostrar-projetos")
const projetoInativos = document.querySelectorAll(".projeto:not(.ativo")


button.addEventListener('click', () => {
    mostrarMaisProjetos();

    esconderBotao();
})

function esconderBotao() {
    button.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetoInativos.forEach(element => {
        element.classList.add("ativo");
    });
}
