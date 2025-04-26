document.getElementById("guestForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("guestName").value.trim();

  if (name === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "guest-item";
  listItem.innerHTML = `
    <span class="guest-name">${name}</span>
    <div class="guest-actions">
      <button class="done-btn" onclick="markDone(this)">Selesai</button>
      <button class="delete-btn" onclick="deleteEntry(this)">Hapus</button>
    </div>
  `;

  document.getElementById("guestList").appendChild(listItem);
  document.getElementById("guestForm").reset();
});

function markDone(button) {
  const item = button.closest(".guest-item").querySelector(".guest-name");
  item.style.textDecoration = "line-through";
  item.style.color = "gray";
}

function deleteEntry(button) {
  const listItem = button.closest(".guest-item");
  listItem.remove();
}
