
function firstStatus() {
    document.getElementById("status").innerHTML = "You clicked First button";
};

function secondStatus() {
    document.getElementById("status").innerHTML = "You clicked Second button";
};

function thirdStatus() {
    document.getElementById("status").innerHTML = "You clicked Third button";
};

first.onclick = firstStatus;
second.onclick = secondStatus;
third.onclick = thirdStatus;
