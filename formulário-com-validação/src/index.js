const campos = [document.getElementById('nome'), 
                document.getElementById('email'), 
                document.getElementById('telefone'), 
                document.getElementById('mensagem')
               ];


function verificarCampos(){
   const erros = document.querySelectorAll('.erro');
      campos.forEach((campo, index) =>{
         if (campo.value.trim() === ''){
            campo.style.border = '1px solid #F52E2E';
            erros[index].innerHTML = 'campo obrigatório';
         }else{
            campo.style.border = '1px solid #00C22B';
            erros[index].innerHTML = '';
       }
   });
}