const balloonContainer = document.getElementById('balloon-container');
const catImages = [
    'https://i.imgur.com/8jct8jY.jpeg', 
    'https://i.imgur.com/fbzQfdo.jpeg',
    'https://i.imgur.com/ytuDml2.jpeg',
    'https://i.imgur.com/QjdLAqL.jpeg',
    'https://i.imgur.com/JWIE4PU.jpeg',
];

let usedCatImages = new Set();  // Usaremos para rastrear quais imagens já foram usadas
let catImageIndexes = new Set();
while (catImageIndexes.size < 5) {
    catImageIndexes.add(Math.floor(Math.random() * 20));
}

for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 90}%`;
    balloon.style.top = `${Math.random() * 80}%`;
    
    balloon.addEventListener('click', () => {
        if (catImageIndexes.has(i)) {
            if (catImages.length > 0) {
                const index = Math.floor(Math.random() * catImages.length);
                const randomCat = catImages[index];
                balloon.innerHTML = `<img src="${randomCat}" alt="Gatinho fofo" style="width: 100px; height: 100px; border-radius: 50%;">`;
                catImages.splice(index, 1);  // Remove a imagem usada para evitar repetições
            } else {
                balloon.innerHTML = "POP!";
            }
        } else {
            balloon.innerHTML = "POP!";
        }
        balloon.style.pointerEvents = 'none';
    });
    
    balloonContainer.appendChild(balloon);
}
