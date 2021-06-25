document.addEventListener("DOMContentLoaded", function (event) {
var mainBox = document.getElementById("main");
var count = 25;
var booked = 0;
document.getElementById("total-seats").innerText = `Total Seats: ${count}`;
document.getElementById("booked-seats").innerText = `Booked Seats: ${booked}`;

for (let i = 0; i < 36; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = "130px";
    gridDiv.style.height = "90px";
    gridDiv.classList.add("red");
    gridDiv.addEventListener("click", () => {
    if (gridDiv.className === "red") {
        booked += 1;
        count -= 1;
    } else {
        booked -= 1;
        count += 1;
    }
    gridDiv.classList.toggle("dark");

    document.getElementById(
        "total-seats"
    ).innerText = `Total Seats: ${count}`;
    document.getElementById(
        "booked-seats"
    ).innerText = `Booked Seats: ${booked}`;
    });

    mainBox.appendChild(gridDiv);
}
});