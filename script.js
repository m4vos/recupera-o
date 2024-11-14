
function adicionarItem() {
    const inputItem = document.getElementById("inputItem");
    const erroMensagem = document.getElementById("erroMensagem");
    const lista = document.getElementById("lista");

  
    if (inputItem.value.trim() === "") {
        erroMensagem.style.display = "block"; 
    } else {
        erroMensagem.style.display = "none"; 

      
        const li = document.createElement("li");
        li.textContent = inputItem.value.trim();
        lista.appendChild(li);

      
        inputItem.value = "";
    }
}
