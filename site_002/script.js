//VARIAVEIS :)))

const painelMain = document.getElementsByTagName('main')[0];
const titulo = document.getElementById('titulo');
const tb_ConfirmarSenha = document.getElementById('tb_confirmarSenha');
const avisso_cadastrar = document.getElementsByClassName('avisso')[0];
const btn_cadastrar = document.querySelector('.avisso > a')

console.log(btn_cadastrar)

btn_cadastrar.addEventListener('click', ()=>{
    let MostrarPainelCadastro = btn_cadastrar.getAttribute('data-value');

    if (MostrarPainelCadastro){
        painelMain.style.setProperty('animation', 'superAnimacaoDeAlteracaoDePaineis 1s linear forwards');
    }

     if (MostrarPainelCadastro === "0"){
        

        btn_cadastrar.setAttribute('data-value', "1"); // seta para 1, mostrar painel entrar

        // mostra PAINEL CADASTRO
        titulo.textContent = "Cadastro";
        btn_cadastrar.textContent = "Fazer Login"
        avisso_cadastrar.firstChild.textContent = "Já tem conta? "
        document.title = "Cadastro | SuperSite";
        tb_ConfirmarSenha.style.setProperty('display', 'block');

    }else{


        btn_cadastrar.setAttribute('data-value', "0"); // seta para 0, mostrar painel cadastro
  
        // mostra PAINEL ENTRAR
        titulo.textContent = "Entrar";
        btn_cadastrar.textContent = "Cadastrar-se"
        avisso_cadastrar.firstChild.textContent = "Sem uma conta? "
        document.title = "Entrar | SuperSite";
        tb_ConfirmarSenha.style.setProperty('display', 'none');

    }

     setTimeout(()=>{
         painelMain.style.setProperty('animation', 'none');
     }, 1010);


});