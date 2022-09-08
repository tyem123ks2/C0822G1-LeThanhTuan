function CFA() {
    let tienvao1 = document.getElementById("tienvao").value
    let select1 = document.getElementById("select1").value
    let select2 = document.getElementById("select2").value
    if (select1 == select2) {
        alert(tienvao1);
    }
    if (select1 == "VND" && select2 == "USD1") {
        alert(tienvao1/23000);
    }
    if (select1 == "USD1" && select2 == "VND") {
        alert(tienvao1*23000)
    }
}
