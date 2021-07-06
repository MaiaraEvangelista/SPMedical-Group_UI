//faz a exportação da constante usuárioAutenticado, e mostrando que é diferente de nulo
export const usuarioAutenticado = () => localStorage.getItem('usuario-login') !== null;

//exportação da constante jWT
export const parseJwt = () =>{
    //referência a base64 (permissão)
    let base64 = localStorage.getItem('usuario-login').split('.')[1];

    //faz o retorno
    return JSON.parse(window.atob(base64));
}
