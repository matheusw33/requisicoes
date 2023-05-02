import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostraVideos.js";

async function buscaVideo(event){
    event.preventDefault();

    const dadosDaPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideos(dadosDaPesquisa);
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.url, elemento.titulo, elemento.imagem, elemento.descricao)));
}

const btnPesquisa = document.querySelector("[data-btn-pesquisa]");
btnPesquisa.addEventListener('click', event => buscaVideo(event));

