const api = {
    async buscarPensamentos() {
        try{
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json();
        } catch (e) {
            alert('Erro ao buscar pensamentos.', e);
        }
    },
    async salvarPensamento(pensamento) {
        try{
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(pensamento)
            });
            return await response.json()
        } catch (e) {
            alert('Erro ao salvar pensamento.', e);
        }
    },

    async buscarPensamentoPorId(id) {
        try{
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
            return await response.json();
        } catch (e) {
            alert('Erro ao buscar pensamento.', e);
        }
    },

    async editarPensamento(pensamento) {
        try{
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(pensamento)
            });
            return await response.json()
        } catch (e) {
            alert('Erro ao editar pensamento.', e);
        }
    },
}

export default api;