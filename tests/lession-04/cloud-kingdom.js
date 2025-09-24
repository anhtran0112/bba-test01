let playerName = "Mario";
let currentLives = 3;
const level1Coins = 25;
const level2Coins = 30;
const level3Coins = 45;

function divideWithRemainder(a, b, c) {
    return (a + b + c) % currentLives;
}
const remainder = divideWithRemainder(level1Coins, level2Coins, level3Coins);
console.log(`Số coin dư khi chia tổng coin cho 3: ${remainder}`);