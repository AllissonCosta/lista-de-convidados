const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");
const enviar = document.getElementById("enviar");
const verConvite = document.getElementById("ver-convite");

const nomesPermitidos = ["admin","teste"]; // nomes permitidos
const nomesNaoPermitidos = ['usuario']; // nomes especificos não permitidos

enviar.addEventListener("click", () => {
  // recupera o valor do input "nome"
  valor = nome.value.toLowerCase();

  // limpa a mensagem
  mensagem.innerHTML = "";

  // limpa o botão "ver convite"
  const verConvite = document.getElementById("ver-convite");
  verConvite.style.display = "none";

  // verifica se o nome está na lista dos convidados
  const estaConvidado = nomesPermitidos.includes(valor);
  // verifica se o nome está na lista de não permitidos
  const naoPermitidos = nomesNaoPermitidos.includes(valor);

  if (estaConvidado) {
    mensagem.innerHTML = "Você foi convidado";

    // mostra o botão "ver convite"
    verConvite.style.display = "block";

    // evento de clique no botão "ver convite"
    verConvite.addEventListener("click", () => {
      // abre a página com a imagem
      window.open("./convite.html");
    });
  } else if (naoPermitidos) {
    mensagem.innerHTML = "Você não foi permitido!"
  } else {
    mensagem.innerHTML = "Você não foi convidado";
  }
});

// evento "keydown" do input "nome"
nome.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // código da tecla "enter"
    enviar.click();
  }
});
