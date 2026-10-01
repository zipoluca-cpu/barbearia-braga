const contatos = {
    barbearia: {
        telefone: "5521967598688",
        mensagem: "Olá! Gostaria de agendar um horário na Barbearia Braga com o Cristhiano."
    },

    trancista: {
        telefone: "5521982929634",
        mensagem: "Olá, Eliete! Gostaria de consultar horários e valores para fazer tranças."
    }
};

// ABRIR E FECHAR O MENU NO CELULAR

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        const aberto = menu.classList.toggle("aberto");

        menuBtn.setAttribute("aria-expanded", String(aberto));
        menuBtn.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

        menuBtn.textContent = aberto ? "×" : "☰";
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("aberto");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Abrir menu");
            menuBtn.textContent = "☰";
        });
    });
}

// AGENDAMENTO PELO WHATSAPP

document.querySelectorAll("[data-agendar]").forEach((botao) => {
    botao.addEventListener("click", () => {
        const tipo = botao.dataset.agendar;
        const contato = contatos[tipo];

        if (!contato) return;

        const url =
            `https://wa.me/${contato.telefone}?text=` +
            encodeURIComponent(contato.mensagem);

        window.open(url, "_blank", "noopener,noreferrer");
    });
});

// ATUALIZAR O ANO NO RODAPÉ

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}
