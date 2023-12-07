const button = document.querySelector(".draw-button")


function buttonPressed() {

    const minimum = Math.ceil(document.querySelector(".min").value)
    const maximum = Math.floor(document.querySelector(".max").value)

    const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    alert(result)
}









button.addEventListener("click", buttonPressed)

