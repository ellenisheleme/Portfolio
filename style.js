const buttonSubmit = document.querySelector("submit")

const changeColor =(domElement)=>{

domElement.style.background = white;
domElement.style.text = black;

}

buttonSubmit.addEventListener('click', () => {
    changeColor(buttonSubmit)});