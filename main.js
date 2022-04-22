let origArray = ["2", "3", "4"];

document.addEventListener("DOMContentLoaded", function (event) {
document.getElementById("Square").addEventListener("click", function () {
    let x = origArray.map(Math.pow(output,2));
    document.getElementById("output").value = x;
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
document.getElementById("Cube").addEventListener("click", function () {
    let y = origArray.map(Math.pow(output,3));
    document.getElementById("output").value = y;
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
document.getElementById("firstLetter").addEventListener("click", function () {
    let z = origArray.map(Math.pow(output,4))
    document.getElementById("output").value = x;
    });
});

function firstBox(Square) {
    document.getElementById("output").value = x
}

function secondBox(Cube) {
    document.getElementById("output").value = y
}

function secondBox(Cube) {
    document.getElementById("output").value = z
}
