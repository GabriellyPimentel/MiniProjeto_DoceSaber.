
class Receita {
    constructor(nome, preparo, ingredientes, dificuldade, categoria, rendimento, dicas) {
        this.nome = nome;
        this.preparo = preparo;
        this.ingredientes = ingredientes;
        this.dificuldade = dificuldade;
        this.categoria = categoria;
        this.rendimento = rendimento;
        this.dicas = dicas;
    }
}

let receitas = [];

function adicionarReceita() {
    const nome = document.getElementById('receita').value;
    const dificuldade = document.getElementById('dificuldade').value;
    const ingredientes = document.getElementById('ingredientes').value;
    const preparo = document.getElementById('preparo').value;
    const rendimento = document.getElementById('rendimento').value;
    const dicas = document.getElementById('dicas').value;
    const categoria = document.querySelector('input[name="categoria"]:checked').value;

    const novaReceita = new Receita(nome, preparo, ingredientes, dificuldade, categoria, rendimento, dicas);
    receitas.push(novaReceita);
    listarReceitas();
    limparFormulario();
}

function listarReceitas() {
    const lista = document.getElementById('lista-receitas');
    lista.innerHTML = '';

    receitas.forEach((receita, index) => {
        const item = document.createElement('li');
        item.classList.add('receita-card'); // Adiciona a classe CSS
        item.innerHTML = `
            <h3>${receita.nome}</h3>
            <p><strong>Dificuldade:</strong> ${receita.dificuldade}</p>
            <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
            <p><strong>Preparo:</strong> ${receita.preparo}</p>
            <p><strong>Rendimento:</strong> ${receita.rendimento}</p>
            <p><strong>Dicas e Observações:</strong> ${receita.dicas}</p>
            <p><strong>Categoria:</strong> ${receita.categoria}</p>
            <br>
            <button onclick="editarReceita(${index})">Editar</button>
            <button onclick="deletarReceita(${index})">Deletar</button>
        `;
        lista.appendChild(item);
    });
}

function editarReceita(index) {
    const receita = receitas[index];
    document.getElementById('receita').value = receita.nome;
    document.getElementById('dificuldade').value = receita.dificuldade;
    document.getElementById('ingredientes').value = receita.ingredientes;
    document.getElementById('preparo').value = receita.preparo;
    document.getElementById('rendimento').value = receita.rendimento;
    document.getElementById('dicas').value = receita.dicas;
    document.querySelector(input[name="categoria"][value="${receita.categoria}"]).checked = true;

    document.getElementById('salvar').onclick = function() {
        salvarEdicao(index);
    };
}

function salvarEdicao(index) {
    receitas[index].nome = document.getElementById('receita').value;
    receitas[index].dificuldade = document.getElementById('dificuldade').value;
    receitas[index].ingredientes = document.getElementById('ingredientes').value;
    receitas[index].preparo = document.getElementById('preparo').value;
    receitas[index].rendimento = document.getElementById('rendimento').value;
    receitas[index].dicas = document.getElementById('dicas').value;
    receitas[index].categoria = document.querySelector('input[name="categoria"]:checked').value;

    listarReceitas();
    limparFormulario();
}

function deletarReceita(index) {
    receitas.splice(index, 1);
    listarReceitas();
}

function limparFormulario() {
    document.getElementById('receita').value = '';
    document.getElementById('dificuldade').value = '';
    document.getElementById('ingredientes').value = '';
    document.getElementById('preparo').value = '';
    document.getElementById('rendimento').value = '';
    document.getElementById('dicas').value = '';
    document.querySelector('input[name="categoria"]:checked').checked = false;
}