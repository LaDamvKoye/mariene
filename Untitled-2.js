

// Exemplo de evento de rolagem

window.addEventListener('scroll', function() {

    console.log('Você está rolando a página!');

});

document.getElementById("meuBotao").onclick = function() {

    alert("sem novidades por enquanto!");

};






// Selecionando todos os grupos de mensagens
document.querySelectorAll('.grupo-mensagens').forEach(grupo => {
    const container = grupo.querySelector('.mensagens-container');
    const nomeInput = grupo.querySelector('.nomeUsuario');
    const mensagemInput = grupo.querySelector('.mensagemTexto');
    const botao = grupo.querySelector('.adicionarMensagem');

    botao.addEventListener('click', () => {
        const nomeUsuario = nomeInput.value.trim();
        const mensagemTexto = mensagemInput.value.trim();

        if (nomeUsuario === '' || mensagemTexto === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Criando a nova mensagem
        const mensagemDiv = document.createElement('div');
        mensagemDiv.classList.add('mensagem');

        const usuarioDiv = document.createElement('div');
        usuarioDiv.classList.add('usuario');
        usuarioDiv.textContent = nomeUsuario;

        const textoDiv = document.createElement('div');
        textoDiv.classList.add('texto');
        textoDiv.textContent = mensagemTexto;

        mensagemDiv.appendChild(usuarioDiv);
        mensagemDiv.appendChild(textoDiv);

        container.appendChild(mensagemDiv);

        nomeInput.value = '';
        mensagemInput.value = '';
    });
});