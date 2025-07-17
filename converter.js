const BASE_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let dropdowns = document.querySelectorAll(".selections-div select");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerHTML = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if (select.id === "from-currency" && currCode === "USD") {
            newOption.selected = "selected";
        }
        if (select.id === "to-currency" && currCode === "PKR") {
            newOption.selected = "selected";
        }
    }
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    });
}

let updateFlag = (element) => {
    let currCode = countryList[element.value];
    element.parentElement.querySelector(
        "img"
    ).src = `https://flagsapi.com/${currCode}/flat/64.png`;
};
let btn = document.querySelector("button");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let fromCurr = document.querySelector("#from-currency").value.toLowerCase();
    let toCurr = document.querySelector("#to-currency").value.toLowerCase();

    let response = await fetch(`${BASE_URL}/${fromCurr}.json`);
    let data = await response.json();

    let amount = document.querySelector("#amount").value;
    if (amount.value < 1) {
        alert("Enter valid amount!");
        amount = 1;
        document.querySelector("#amount").value = 1;
    }
    let toCurrResult = await data[fromCurr][toCurr];
    let convertedCurr = (amount * toCurrResult).toFixed(2);

    let resultText = document.querySelector("#result");

    resultText.innerText = `${amount} ${fromCurr} = ${convertedCurr} ${toCurr}`;
});
