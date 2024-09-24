function speech(texto) {
    if (arguments.length === 0) throw new Error('Sem Argumentos na Funcão.');
    if (window.SpeechSynthesis) {
        if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
        let utterance = new window.SpeechSynthesisUtterance(texto);
        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Seu Dispositivo não suporta O Speech Synthesis.');
    }
}

export { speech }