// “Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới  100 chia hết cho 17”
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
console.log("Tổng cộng:" , findPairDivisibleBy17() , "cặp");
