//criando referencia aos elementos presentes no html que iremos utilizar
let buttonCreate = document.getElementById('create');
let form = document.querySelector('form');
let inputLegenda = document.getElementById('subtitle');
let inputData = document.getElementById('date');
let inputUrl = document.getElementById('urlImage');
//criando objeto que sera preenchido com os valores atuais antes de limpar o formulario
let formValues = {};

//função para criar o card quando clicar no botão
buttonCreate.addEventListener('click', function () {
  //Relacionado a legenda
  let subtitleCard = document.createElement('span');
  subtitleCard.textContent = inputLegenda.value;
  subtitleCard.classList.add("polaroidSubtitle");

  //Relacionado a data
  let dateCard = document.createElement('span');
  dateCard.textContent = inputData.value;
  dateCard.classList.add("polaroidDate");

  //Condição para url vazia
  if (inputUrl.value == "") {
    alert("Insira um imagem");
    formValues = {};
  } else {
    //variaveis dos conteudos que iremos utilizar
    let polaroidContent = document.querySelector(".polaroidContent");
    let image = document.querySelector(".imgCard");

    //resetando dados do card
    image.innerHTML = "";
    polaroidContent.innerHTML = "";

    //Relacionado a url
    let polaroidImage = document.createElement("img");
    polaroidImage.classList.add("polaroidImage");
    polaroidImage.setAttribute("src", inputUrl.value);

    //adicionando imagem, legenda e data no card
    image.appendChild(polaroidImage);
    polaroidContent.appendChild(subtitleCard);
    polaroidContent.appendChild(dateCard);

    //adicionando os valores dos campos no objeto vazio pois iremos usa-los depois de resetar o formulario
    formValues.legend = inputLegenda.value;
    formValues.date = inputData.value;
    formValues.image = inputUrl.value;
  }

  //resetando o formulario
  form.reset();
})

//variavel para manipular o botao do album
let buttonAlbum = document.getElementById('buttonAlbum');

//função para adicionar o card no album
buttonAlbum.addEventListener('click', function () {
  //variavel da div que vamos adicionar conteudo
  let album = document.getElementById('album');

  //Condição para verificar se o formulario esta vazio, então não foi criado o card
  const formularioVazio = !formValues.image;
  if (formularioVazio) {
    alert('Crie seu polaroid!');
  } else {
    //Criando div de coluna para alinhar os cards
    let div = document.createElement('div');
    div.classList.add('col');
    //Adicionando o card no album
    album.appendChild(div);
    div.innerHTML += `<div class="polaroidCard">
        <div class="backgroundCard">
          <div class="imgCard"><img class="polaroidImage" src="${formValues.image}"></div>
          <div class="polaroidContent"><span class="polaroidSubtitle">${formValues.legend}</span><span class="polaroidDate">${formValues.date}</span></div>
        </div>
      </div>`;
  }
});