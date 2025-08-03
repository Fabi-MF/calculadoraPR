document.getElementById("btRevelar").addEventListener("click", () => {
    const nomeHeroi = document.getElementById("nomeH").value;
    const vt = parseInt(document.getElementById("vitorias").value);
    const dt = parseInt(document.getElementById("derrotas").value);

    if (isNaN(vt) || isNaN(dt) || nomeHeroi.trim() === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const saldo = vt - dt;
    const saldoVitorias = saldoVt(saldo);

    document.getElementById("resultado").innerText =
        `O Herói de nome ${nomeHeroi} está no nível ${saldoVitorias}`;
});




function saldoVt(saldo){
    if(saldo <= 10)
    return " Ferro";
    else if (saldo <= 20)
    return " Bronze";
    else if (saldo <= 50)
    return " Prata";
    else if (saldo <= 80)
    return " Ouro";
    else if (saldo <= 90)
    return " Diamante";
    else if (saldo <= 100)
    return " Lendário";
    else return " Imortal ";
}


