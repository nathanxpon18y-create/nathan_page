let atendimentos = [];

/* FUNÇÃO SALVAR */
function salvarAtendimento() {

    if (atendimentos.length >= 40) {
        alert("Limite de 40 atendimentos atingido");
        return;
    }

    const cliente = document.getElementById("cliente").value;
    const contrato = document.getElementById("contrato").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const tipo = document.getElementById("tipo").value;
    const status = document.getElementById("status").value;
    const obs = document.getElementById("obs").value;

    if (!cliente || !contrato) {
        alert("Preencha cliente e contrato");
        return;
    }

    const atendimento = {
        cliente,
        contrato,
        data,
        horario,
        tipo,
        status,
        obs
    };

    atendimentos.push(atendimento);
    mostrarAtendimentos();
    limparCampos();
}

/* MOSTRAR NO BLOCO DE NOTAS */
function mostrarAtendimentos() {

    const bloco = document.getElementById("blocoNotas");
    bloco.innerHTML = "";

    atendimentos.forEach((a, i) => {

        const div = document.createElement("div");

        // prioridade de cor
        let classe = a.status;
        if (a.tipo === "Suporte") {
            classe = "Suporte";
        }

        div.className = `atendimento ${classe}`;

        div.innerHTML = `
            <strong>#${i + 1} ${a.contrato}</strong> - ${a.cliente}<br>
            ${a.data} ${a.horario} | ${a.tipo} | ${a.status} | ${a.obs}
        `;

        bloco.appendChild(div);
    });
}

/* LIMPAR CAMPOS */
function limparCampos() {
    document.getElementById("cliente").value = "";
    document.getElementById("contrato").value = "";
    document.getElementById("obs").value = "";
}