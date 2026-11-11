const URL_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`);
      return await response.data;
    } catch (e) {
      alert("Erro ao buscar pensamentos.", e);
    }
  },
  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
      return await response.data;
    } catch (e) {
      alert("Erro ao salvar pensamento.", e);
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      return await response.data;
    } catch (e) {
      alert("Erro ao buscar pensamento.", e);
    }
  },

  async editarPensamento(pensamento) {
    try {
      console.log(pensamento);

      const response = await axios.put(
        `${URL_BASE}/pensamentos/${pensamento.id}`,
        pensamento,
      );
      return await response.data;
    } catch (e) {
      alert("Erro ao editar pensamento.", e);
    }
  },

  async excluirPensamento(id) {
    try {
      await axios.delete(`${URL_BASE}/pensamentos/${id}`);
    } catch (e) {
      alert("Erro ao excluir pensamento.", e);
    }
  },
};

export default api;
