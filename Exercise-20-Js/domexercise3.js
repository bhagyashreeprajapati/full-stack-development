let stars = document.querySelectorAll("#rating i");

function rate() {
    // let pos = 0;
    // while (pos < stars.length) {
    //     stars[pos].style.color = "orange";
    //     if (this === stars[pos]) {
    //         break;
    //     }
    //     pos++;
    // }
    // pos++;
    // while (pos < stars.length) {
    //     stars[pos].style.color = "black";
    //     pos++;
    // }
    // Alternative 1
    // let color = "orange";
    // let pos = 0;
    // while (pos < stars.length) {
    //     stars[pos].style.color = color;
    //     if (stars[pos] === this) {
    //         color = "black";
    //     }
    //     pos++;
    // }
    let color = "orange";
    for (let pos = 0; pos < stars.length; pos++) {
        stars[pos].style.color = color;
        if (stars[pos] === this) {
            color = "black";
        }
    }
}

for (let star of stars) {
    star.addEventListener("click", rate);
}

