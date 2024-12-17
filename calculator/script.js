let output = document.getElementById("display");

function display(val) {
    output.value += val;
}
function clr() {
    output.value = "";
}
function del() {
    output.value = output.value.slice(0, -1);
}
function calculate() {
    try {
        output.value = eval(output.value);
    }
    catch (e) {
        output.value = "Syntax error!";
    }
}