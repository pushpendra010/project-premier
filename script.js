const text = document.querySelector('.text');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
        `<span style="transform: rotate(${i * 6.4}deg)">${char}</span>`
).join('');
