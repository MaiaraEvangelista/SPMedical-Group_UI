//Importação do axios
import axios from 'axios';

//Criação de uma constante
const api = axios.create({
    //Passando a rota da api
    baseURL: "http://localhost:5000/api"
})

//Fazendo exportação da api
export default api;