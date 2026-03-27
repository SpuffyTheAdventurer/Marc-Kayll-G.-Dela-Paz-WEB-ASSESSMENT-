function calculateTotal() {

    let cost = document.getElementById("cost").value;
    let litres = document.getElementById("litres").value;




    cost = parseFloat(cost);
    litres = parseFloat(litres);

    let total = cost * litres;

    document.getElementById("result").textContent = "Total: £" + total.toFixed(2);
}
