
class Receita {
    constructor(nome, preparo, ingredientes, dificuldade, categoria) {
        this.nome = nome;
        this.preparo = preparo;
        this.ingredientes = ingredientes;
        this.dificuldade = dificuldade;
        this.categoria = categoria;
    }
}

let receitas = [];

function adicionarReceita() {
    const nome = document.getElementById('receita').value;
    const preparo = document.getElementById('preparo').value;
    const ingredientes = document.getElementById('ingredientes').value;
    const dificuldade = document.getElementById('dificuldade').value;
    const categoria = document.querySelector('input[name="categoria"]:checked').value;

    const novaReceita = new Receita(nome, preparo, ingredientes, dificuldade, categoria);
    receitas.push(novaReceita);
    listarReceitas();
    limparFormulario();
}

function listarReceitas() {
    const lista = document.getElementById('lista-receitas');
    lista.innerHTML = '';

    receitas.forEach((receita, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>${receita.nome}</strong> - ${receita.preparo} - ${receita.ingredientes} - Dificuldade: ${receita.dificuldade} - Categoria: ${receita.categoria}
            <button onclick="editarReceita(${index})">Editar</button>
            <button onclick="deletarReceita(${index})">Deletar</button>
        `;
        lista.appendChild(item);
    });
}

function editarReceita(index) {
    const receita = receitas[index];
    document.getElementById('receita').value = receita.nome;
    document.getElementById('preparo').value = receita.preparo;
    document.getElementById('ingredientes').value = receita.ingredientes;
    document.getElementById('dificuldade').value = receita.dificuldade;
    document.querySelector(input[name="categoria"][value="${receita.categoria}"]).checked = true;

    document.getElementById('salvar').onclick = function() {
        salvarEdicao(index);
    };
}

function salvarEdicao(index) {
    receitas[index].nome = document.getElementById('receita').value;
    receitas[index].preparo = document.getElementById('preparo').value;
    receitas[index].ingredientes = document.getElementById('ingredientes').value;
    receitas[index].dificuldade = document.getElementById('dificuldade').value;
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
    document.getElementById('preparo').value = '';
    document.getElementById('ingredientes').value = '';
    document.getElementById('dificuldade').value = '';
    document.querySelector('input[name="categoria"]:checked').checked = false;
}

function listarReceitas() {
    const lista = document.getElementById('lista-receitas');
    lista.innerHTML = '';

    receitas.forEach((receita, index) => {
        const item = document.createElement('div');
        item.className = 'receita-card';
        item.innerHTML = `
            <h3>${receita.nome}</h3>
            <p><strong>Preparo:</strong> ${receita.preparo}</p>
            <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
            <p><strong>Dificuldade:</strong> ${receita.dificuldade}</p>
            <p><strong>Categoria:</strong> ${receita.categoria}</p>
            <button onclick="editarReceita(${index})">Editar</button>
            <button onclick="deletarReceita(${index})">Deletar</button>
        `;
        lista.appendChild(item);
    });
}