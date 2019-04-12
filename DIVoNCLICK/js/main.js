let text = document.getElementsByClassName('text');
text = text[0].textContent;
let textarea, button;

function ceratButton() {
  button = document.createElement('button');
  button.innerHTML = 'Create';
  document.body.appendChild(button);
}
ceratButton();

function createForm() {
  textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
};

button.addEventListener("click", createForm);