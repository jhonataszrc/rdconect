document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const motivo = document.getElementById('motivo-' + this.name);
        if (this.value === "nao") {
            motivo.style.display = "block";
        } else {
            motivo.style.display = "none";
        }
    });
});

function mostrarResultado() {
    let resultado = "Execução Concluída!";
    const execucoesNaoConcluidas = document.querySelectorAll('input[type="radio"]:checked[value="nao"]');
    
    if (executacoesNaoConcluidas.length > 0) {
        resultado = "Execução Não Concluída!";
    }

    document.getElementById("status").textContent = resultado;
}
