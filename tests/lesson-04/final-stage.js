
function findPairDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                count++;
            }
        }
    }
    return count;
}
console.log("Số lượng cặp số chia hết cho 17 là: " + findPairDivisibleBy17());
