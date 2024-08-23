document.addEventListener('DOMContentLoaded', () => {
    const playerCardName = document.getElementById('player-card-name');
    const playerCardAttribute = document.getElementById('player-card-attribute');
    const playerCardImg = document.getElementById('player-card-img');
    
    const computerCardName = document.getElementById('computer-card-name');
    const computerCardAttribute = document.getElementById('computer-card-attribute');
    const computerCardImg = document.getElementById('computer-card-img');
    
    const resultDiv = document.getElementById('result');
    const playBtn = document.getElementById('play-btn');

    const player1Count = document.getElementById('player1-count');
    const player2Count = document.getElementById('player2-count');

    // Inicializar contadores
    let player1Victories = 0;
    let player2Victories = 0;

    // Definição das cartas, incluindo URLs das imagens e atributos
    const cards = [
        { name: 'Super Xandão', speed: 85, power: 100, resistance: 100, intelligence: 70, img: 'https://ugc.production.linktr.ee/381d3799-0a0b-458e-869e-4f5c777951e4_IMG-9998.png?io=true&size=avatar-v3_0' },
        { name: 'Xandão presidente', speed: 60, power: 85, resistance: 55, intelligence: 100, img: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f9a09be4766c64b55b7aaa486597d81f~c5_720x720.jpeg?lk3s=a5d48078&nonce=86251&refresh_token=47c6e0c6dd648ca9b844163ca48c86c5&x-expires=1724522400&x-signature=rVFJRnaWpVS540b%2B%2B7%2F8DQTjgTE%3D&shp=a5d48078&shcp=b59d6b55' },
        { name: 'xandão cabeludo', speed: 80, power: 55, resistance: 80, intelligence: 30, img: 'https://pbs.twimg.com/media/E1ryAQDXsAgPmOh.jpg:large' },
        { name: 'xandão magro', speed: 100, power: 20, resistance: 15, intelligence: 90, img: 'https://images.uncyc.org/pt/f/f5/Xand%C3%A3oMagro.jpg' }
    ];

    function getRandomCard() {
        return cards[Math.floor(Math.random() * cards.length)];
    }

    function displayCard(card, nameElement, imgElement, attributeElement) {
        nameElement.textContent = card.name;
        imgElement.src = card.img;
        // Escolhe um atributo aleatório para mostrar
        const attributes = ['speed', 'power', 'resistance', 'intelligence'];
        const randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];
        attributeElement.textContent = `${randomAttribute.charAt(0).toUpperCase() + randomAttribute.slice(1)}: ${card[randomAttribute]}`;
        return randomAttribute; // Retorna o atributo para comparação
    }

    function playGame() {
        const playerCardData = getRandomCard();
        const computerCardData = getRandomCard();

        const playerAttribute = displayCard(playerCardData, playerCardName, playerCardImg, playerCardAttribute);
        const computerAttribute = displayCard(computerCardData, computerCardName, computerCardImg, computerCardAttribute);

        // Compara o atributo escolhido
        if (playerCardData[playerAttribute] > computerCardData[computerAttribute]) {
            resultDiv.innerHTML = '<h2 class="text-success">Você venceu!</h2>';
            player1Victories++;
            player1Count.textContent = player1Victories;
        } else if (playerCardData[playerAttribute] < computerCardData[computerAttribute]) {
            resultDiv.innerHTML = '<h2 class="text-danger">Você perdeu!</h2>';
            player2Victories++;
            player2Count.textContent = player2Victories;
        } else {
            resultDiv.innerHTML = '<h2 class="text-warning">Empate!</h2>';
        }
    }

    playBtn.addEventListener('click', playGame);
});
