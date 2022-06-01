const containerTitleQuest = document.getElementsByClassName("container-title");
const textAnswer = document.getElementsByClassName('text-answer');
const titleQuest= document.getElementsByClassName(".title-quest")
const containerAcordeon = document.getElementsByClassName("container-accordeon");
const imgArrow = document.getElementsByClassName("img-arrow");



for(let i = 0; i < containerAcordeon.length; i++){

   
    containerTitleQuest[i].addEventListener('click', () => {
        containerTitleQuest[i].children[0].classList.toggle("text-bold");
        containerAcordeon[i].children[1].classList.toggle('active');
        imgArrow[i].classList.toggle("img-rotate")
    })

}

