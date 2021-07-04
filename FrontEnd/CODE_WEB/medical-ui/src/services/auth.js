//Faz a verificação para ver se o usuário está logado
export const usuarioAutenticado = () => localStorage.getItem('usuario-login') !==null;

//Define a variável que retorna a identificação do usuário em JSON
export const parseJwt = () =>{
    //Define  abase64 para receber a codificação do usuário
    let base64 = localStorage.getItem('usuario-login').split('.')[1];

    //Faz a transação para string. Converte a string para JSON
    return JSON.parse(window.atob(base64));
}