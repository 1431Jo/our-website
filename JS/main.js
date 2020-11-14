//main für Index.html

//function for folding font
function flapThings(flaps) {
    if(document.getElementById(flaps).style.display === "none") {
        document.getElementById(flaps).style.display = "inline";
    } else {
        document.getElementById(flaps).style.display = "none";
    }
}