const button = document.querySelector(".draw-button")


function buttonPressed() {

    const minimum = Math.ceil(document.querySelector(".min").value)
    const maximum = Math.floor(document.querySelector(".max").value)

    if (minimum < maximum) {

        const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        alert(result)

    }

    else {
        alert('o valor minimo nao pode ser maior que o valor maximo')

    }

}








button.addEventListener("click", buttonPressed)

