let output = document.querySelector("input");
function display(num) {
  output.value += num;
}
function hasil() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    alert("다시 입력해주세요");
  }
}
function del() {
  output.value = output.value.slice(0, -1);
}
function bersihkan() {
  output.value = "";
}
