export let form = (event) => {
    event.preventDefault();
    alert("Дані збережено")
    let text = document.createElement("h2")
    text.textContent = "Дані відправлено"
    let totalForm = document.querySelector(".forma")
    totalForm.appendChild(text)
    text.style.color = "green"
}