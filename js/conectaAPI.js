async function listaVideos(){
    const resposta = await fetch('http://localhost:3000/videos');
    const respostaConvertida = await resposta.json();
    
    return respostaConvertida;
}

async function criaVideos(titulo, descricao, url, imagem){
    const conexao = await fetch('http://localhost:3000/videos', {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possivel adicionar o video.");
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideos(dadosDaBusca){

    const conexao = await fetch(`http://localhost:3000/videos?q=${dadosDaBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criaVideos,
    buscaVideos
};