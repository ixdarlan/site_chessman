window.onload = function () {
    // Obtém o caminho do áudio do atributo data-audio no elemento <body>
    const audioPath = document.body.getAttribute('data-audio');

    if (!audioPath) {
        console.error("Caminho do áudio não encontrado. Verifique o atributo 'data-audio' no HTML.");
        return;
    }

    // Cria o elemento de áudio
    const audioElement = document.createElement('audio');
    audioElement.src = audioPath; // Caminho obtido do atributo data-audio
    audioElement.id = 'audioReceita'; // ID para referência futura
    document.body.appendChild(audioElement); // Adiciona o áudio ao body (oculto por enquanto)
    audioElement.style.display = 'none'; // Oculta o elemento de áudio padrão

    // Cria o botão estilizado
    const button = document.createElement('button');
    button.innerText = '⏯️ Reproduzir'; // Texto inicial do botão
    button.id = 'audioButton'; // ID para aplicar estilo no CSS
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';

    // Adiciona o botão ao cabeçalho
    const header = document.querySelector('header');
    header.appendChild(button);

    // Função para reproduzir ou pausar o áudio
    button.addEventListener('click', function () {
        if (audioElement.paused) {
            audioElement.play();
            button.innerText = '⏸️ Pausar'; // Atualiza o texto do botão
        } else {
            audioElement.pause();
            button.innerText = '⏯️ Reproduzir'; // Atualiza o texto do botão
        }
    });
};


