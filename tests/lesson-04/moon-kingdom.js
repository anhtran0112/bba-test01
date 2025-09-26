// Bài 1: Tạo hàm createCharacters (Khai báo mảng các object, tạo ra mảng mới: charactersPowerUp, lọc ra các phần tử có chỉ số health > 1000)
function createCharacters() {
    // Khai báo mảng các object
    const characters = [
        { name: "Messi", level: 12, health: 600 },
        { name: "RuiCosta", level: 11, health: 250 },
        { name: "Pirlo", level: 10, health: 300 },
        { name: "Rivaldo", level: 12, health: 250 },
        { name: "Totti", level: 11, health: 350 },
        { name: "Adriano", level: 10, health: 450 },
        { name: "Maldini", level: 12, health: 300 },
        { name: "Nesta", level: 11, health: 300 },
        { name: "Zidance", level: 10, health: 500 },
        { name: "Ronaldo", level: 10, health: 600 },
    ];

    // Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp
    const charactersPowerUp = characters.map(function (character) {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });

    // Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000
    const possibleWinners = charactersPowerUp.filter(function (character) {
        const highHealth = character.health > 1000;
        return highHealth;
    });

    const finalResult = {
        original: characters,
        poweredUp: charactersPowerUp,
        possibleWinners: possibleWinners
    };
    return finalResult;
}

const result = createCharacters();
console.log("Bài 1: Tạo hàm createCharacterst");
console.log(result);

// ===========================================================================
//
// Bài 2: Tạo hàm printLeaderboard
function printLeaderboard(players) {
    /* .sort(), hàm so sánh cần trả về một số để chỉ định thứ tự:
        Âm (-1) → Phần tử đầu tiên nên đứng TRƯỚC phần tử thứ hai
        Dương (1) → Phần tử đầu tiên nên đứng SAU phần tử thứ hai
        Zero (0) → Giữ nguyên thứ tự (bằng nhau) */
    players.sort(function (firstPlayer, secondPlayer) {

        if (firstPlayer.score > secondPlayer.score) {
            return -1;
        } else if (firstPlayer.score < secondPlayer.score) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log("===========================================================================");
    console.log("Bài 2: Bảng xếp hạng");
    for (let i = 0; i < players.length; i++) {
        const currentRank = i + 1;
        const currentPlayer = players[i];
        let medalType = "";
        if (currentRank === 1) {
            medalType = "🥇 ";
        } else if (currentRank === 2) {
            medalType = "🥈 ";
        } else if (currentRank === 3) {
            medalType = "🥉 ";
        }
        console.log(medalType + currentRank + " . " + currentPlayer.name + " - " + currentPlayer.score + " điểm");
    }
}

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];

printLeaderboard(players);