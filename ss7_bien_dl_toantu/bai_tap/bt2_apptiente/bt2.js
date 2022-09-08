function CFA() {
    let amount = document.getElementById("tienvao").value;
    let fromCurrency = document.getElementById("select1").value;
    let toCurrency = document.getElementById("select2").value;
    let result1;
    if (fromCurrency == "VND" && toCurrency == "USD1") {
        result1 = (amount / 23000) + " USD";
    } else if (fromCurrency == "USD1" && toCurrency == "VND") {
        result1 = (amount * 23000) + " VND";
    } else if (fromCurrency == "VND" && toCurrency == "VND") {
        result1 = amount + " VND";
    } else if (fromCurrency == "USD1" && toCurrency == "USD1") {
        result1 = amount + " USD";
}
        document.getElementById("result").innerText = result1;
}