//importação do axios
import axios from 'axios';

//criação de uma constante
const api = axios.create({
    // passando a rota da api
    baseURL: 'http://localhost:5000/api'
});

// fazendo a exportação da api
export default api;