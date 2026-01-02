const numPlayersSelect = document.getElementById("numPlayers");
const startingLifeSelect = document.getElementById("startingLife");
const resetBtn = document.getElementById("resetGame");
const playersDiv = document.getElementById("players");

const rollDiceBtn = document.getElementById("rollDice");
const diceTypeSelect = document.getElementById("diceType");
const diceResult = document.getElementById("diceResult");

const flipCoinBtn = document.getElementById("flipCoin");
const coinResult = document.getElementById("coinResult");

const chooseFirstBtn = document.getElementById("chooseFirst");
const firstPlayerResult = document.getElementById("firstPlayerResult");

let players = [];

function createPlayers() {
  playersDiv.innerHTML = "";
  players = [];
  const numPlayers = parseInt(numPlayersSelect.value);
  const startingLife = parseInt(startingLifeSelect.value);

  for (let i = 1; i <= numPlayers; i++) {
    const player = { name: `Player ${i}`, life: startingLife };
    players.push(player);

    const playerDiv = document.createElement("div");
    playerDiv.className = "player";
    playerDiv.id = `player${i}`;
    playerDiv.innerHTML = `
      <h3>${player.name}</h3>
      <p>Life: <span class="life">${player.life}</span></p>
      <button class="add1">+1</button>
      <button class="sub1">-1</button>
    `;
    playersDiv.appendChild(playerDiv);

    // Event listeners for buttons
    playerDiv.querySelector(".add1").addEventListener("click", () => {
      player.life++;
      updatePlayerLife(i);
    });
    playerDiv.querySelector(".sub1").addEventListener("click", () => {
      player.life--;
      updatePlayerLife(i);
    });
  }
}

function updatePlayerLife(i) {
  const playerDiv = document.getElementById(`player${i}`);
  playerDiv.querySelector(".life").textContent = players[i-1].life;
}

// Reset Game button
resetBtn.addEventListener("click", createPlayers);

// Dice Roller
rollDiceBtn.addEventListener("click", () => {
  const sides = parseInt(diceTypeSelect.value);
  const result = Math.floor(Math.random() * sides) + 1;
  diceResult.textContent = `Rolled: ${result}`;
});

// Coin Flip
flipCoinBtn.addEventListener("click", () => {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  coinResult.textContent = result;
});

// Random First Player
chooseFirstBtn.addEventListener("click", () => {
  if (players.length === 0) return;
  const first = players[Math.floor(Math.random() * players.length)];
  firstPlayerResult.textContent = `${first.name} goes first!`;
});

// Initialize
createPlayers();
