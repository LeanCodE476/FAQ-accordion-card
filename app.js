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


for (let i of containerTitleQuest) {
    i.addEventListener('click',prueba)
}


function prueba(e) {
    
    if (
        e.target.classList[0] === "container-title" ||
        e.target.classList[0] === "title-quest" ||
        e.target.classList[0] === "img-arrow"
        ) {
            for (let i of textAnswer) {
                i.classList.remove('active')
                i.parentNode.children[0].children[0].classList.remove('text-bold');

            }
        
        e.target.parentNode.parentNode.children[1].classList.add("active");
        e.target.classList.add("text-bold");
 
        }
 
}



