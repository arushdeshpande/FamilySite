var Image = ["Father.png", "Son.png", "Sister.png", "mom.png"];
var family_members = ["Sachin Deshpande",
    "Arush Deshpande",
    "Pari Deshpande",
    "Shubhada deshpande"
];
var position = 1;

function Next() {
    document.getElementById("img1").src = Image[position];
    document.getElementById("R1").textContent = family_members[position];
    position = position + 1;
    if (position == 4) {
        position = 0;
    }
}