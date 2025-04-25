// Buku Tamu hanya Nama dengan tombol Selesai dan Hapus
document.getElementById("guestForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("guestName").value;
  
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${name}</span>
      <button onclick="markDone(this)" style="margin-left:10px;">Selesai</button>
      <button onclick="deleteEntry(this)">Hapus</button>
    `;
    document.getElementById("guestList").appendChild(listItem);
    document.getElementById("guestForm").reset();
  });
  
  function markDone(button) {
    const item = button.parentElement.querySelector("span");
    item.style.textDecoration = "line-through";
    item.style.color = "gray";
  }
  
  function deleteEntry(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
  