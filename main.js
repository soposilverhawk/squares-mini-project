let squaresContainer = document.querySelector("#squares-container")
for (i = 0; i < 550; i++) {
    let squares = document.createElement("div");
    squares.classList.add("small-squares");
    squaresContainer.appendChild(squares);
    squares.addEventListener("mouseover", function () {
        let maxVal = 0xFFFFFF; 
        let randomNumber = Math.floor(Math.random() * maxVal); 
        let randColor = randomNumber.toString(16);
        squares.style.backgroundColor = "#" + randColor;
    })
    squares.addEventListener("mouseout", function(){
        // squares.style.backgroundColor = null
    })
}

