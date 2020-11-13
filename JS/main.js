//main für Index.html

function TextFlaps(flaps) {
    if(document.getElementById(flaps).style.display === "none") {
        document.getElementById(flaps).style.display = "inline";
    } else {
        document.getElementById(flaps).style.display = "none";
    }
 }