function pesquisar() {
        // Obtém a seção onde os resultados da pesquisa serão exibidos
        let section = document.getElementById("resultados-pesquisa");
    
let campoPesquisa = document.getElementById("campo-pesquisa").value

//se campoPesquisa se for uma string sem nada
if(campoPesquisa == ""){
        section.innerHTML = "<p>Digite o conteúdo</p>"
return
}
campoPesquisa = campoPesquisa.toLowerCase()
//console.log(campoPesquisa);
        // Inicializa uma string vazia para armazenar os resultados da pesquisa
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";
    
        // Itera sobre cada dado na lista de dados
        for (let dado of dados) {
                titulo = dado.titulo.toLowerCase()
                descricao = dado.descricao.toLowerCase()
                tags = dado.tags.toLowerCase()
                //console.log(dado.titulo.includes(campoPesquisa))
                //se título includes campoPesquisa
                if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                        //cria um novo elemento HTML para cada resultado
                        resultados += `
                        <div class="item-resultado"> 
                            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                            <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank" >Mais informações</a>
                        </div>`;
                    
                }
        }
        
        if (!resultados) {
resultados = "<p>Nada foi encontrado</p>"
        }
            // Cria uma nova div para cada resultado, formatando o HTML com template literals
           
    
        // Atribui a string com os resultados ao conteúdo HTML da seção
        section.innerHTML = resultados;}
    

// console.log(dados);