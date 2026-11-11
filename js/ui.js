import api from './api.js'

const ui = {
    async preencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoPorId(pensamentoId)
        document.getElementById('pensamento-id').value = pensamento.id
        document.getElementById('pensamento-conteudo').value = pensamento.conteudo
        document.getElementById('pensamento-autoria').value = pensamento.autoria
    },


    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById('lista-pensamentos');
        listaPensamentos.innerHTML = ''

        try{
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(this.adicionarPensamentoNaLista)
        } catch(e) {
            alert('Erro ao criar listas de pensamentos.', e)
        }
    },

    adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.getElementById('lista-pensamentos');
        
        const li = document.createElement('li');
        li.setAttribute('data-id', pensamento.id);
        li.classList.add('li-pensamento');

        const iconeApas = document.createElement('img');
        iconeApas.src = 'assets/imagens/aspas-azuis.png';
        iconeApas.alt = 'Aspas azuis';
        iconeApas.classList.add('icone-aspas');

        const pensamentoConteudo = document.createElement('div');
        pensamentoConteudo.classList.add('pensamento-conteudo');
        pensamentoConteudo.textContent = pensamento.conteudo;

        const pensamentoAutoria = document.createElement('div');
        pensamentoAutoria.classList.add('pensamento-autoria');
        pensamentoAutoria.textContent = pensamento.autoria;

        const botaoEditar = document.createElement("button")
        botaoEditar.classList.add("botao-editar")
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id)

        const iconeEditar = document.createElement("img")
        iconeEditar.src = "assets/imagens/icone-editar.png"
        iconeEditar.alt = "Editar"
        botaoEditar.append(iconeEditar)

        const botaoExcluir = document.createElement("button")
        botaoExcluir.classList.add("botao-excluir")
        botaoExcluir.onclick = async () => {
            try {
                await api.excluirPensamento(pensamento.id);
                ui.renderizarPensamentos();
            } catch (error) {
                alert('Erro ao excluir pensamento.')
            }
        }

        const iconeExcluir = document.createElement("img")
        iconeExcluir.src = "assets/imagens/icone-excluir.png"
        iconeExcluir.alt = "Excluir"
        botaoExcluir.append(iconeExcluir)

        const icones = document.createElement("div")
        icones.classList.add("icones")
        icones.append(botaoEditar)
        icones.append(botaoExcluir)

        li.append(iconeApas, pensamentoConteudo, pensamentoAutoria, icones);

        listaPensamentos.append(li);
    },

    limparFormulario() {
        document.getElementById("pensamento-form").reset();
    },
}

export default ui;