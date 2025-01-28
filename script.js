const rankingData = [];

function addEntry() {
  const nameInput = document.getElementById("name");
  const amountInput = document.getElementById("amount");
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (name === "" || isNaN(amount) || amount < 0) {
    alert("名前と正しい金額を入力してください。");
    return;
  }

  rankingData.push({ name, amount });
  updateRanking();

  nameInput.value = "";
  amountInput.value = "";
}

function deleteEntry(index) {
  if (confirm("このエントリを削除しますか？")) {
    rankingData.splice(index, 1);
    updateRanking();
  }
}

function updateRanking() {
  const tableBody = document.getElementById("rankingTable");
  tableBody.innerHTML = "";

  const sortedData = [...rankingData].sort((a, b) => b.amount - a.amount);

  sortedData.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.amount.toLocaleString()}円</td>
      <td><button class="delete-button" onclick="deleteEntry(${index})">削除</button></td>
    `;
    tableBody.appendChild(row);
  });
}
