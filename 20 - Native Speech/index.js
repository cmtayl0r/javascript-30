window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    p.textContent = transcript;
    if (e.result[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
    if (transcript.includes('Get the weather')) {
        // You can run a function on voice command
        console.log(`☀️☀️☀️☀️☀️☀️☀️☀️☀️ 🌧️🌧️🌧️🌧️🌧️`);
    }
});
recognition.addEventListener('end', recognition.start());

recognition.start();
