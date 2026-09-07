let ClickNextRow = document.getElementById("nextBtn");
let ClickPrevRow = document.getElementById("prevBtn");
let rowNumber = document
  .getElementsByClassName("row")[0]
  .getElementsByTagName("span");
let prevRowSpan = rowNumber[2];
let currentRowSpan = rowNumber[1];
let nextRowSpan = rowNumber[0];
// ovan deklarerar variabeln rowNumber som är den mittersta span i nav.row.
// Denna span ska uppdateras när man klickar på prev eller next knappen.

// När användaren klickar på next knappen ska rowNumber öka med 1,
// och när användaren klickar på prev knappen ska rowNumber minska med 1.
function updateRowNumber(ökning) {
  // Denna funktion tar ett argument "ökning" som anger hur mycket
  // radnumret ska ändras med.

  let currentRow = parseInt(currentRowSpan.textContent);
  // Konverterar textinnehållet i rowNumber till ett heltal.
  let newRow = currentRow + ökning;
  if (newRow >= 1 && newRow <= 20) {
    // Assuming there are 20 rows
    prevRowSpan.textContent = newRow + 1;
    currentRowSpan.textContent = newRow;
    nextRowSpan.textContent = newRow - 1;
    // Här sker själva uppgiften.
    // Den uppdaterar textinnehållet i rowNumber med det nya radnumret.
  }
}
ClickNextRow.addEventListener("click", function (ökning) {
  updateRowNumber(1);
});
ClickPrevRow.addEventListener("click", function (ökning) {
  updateRowNumber(-1);
});
// ovan lägger till event listeners på knapparna. Så man vet när funktionen ska köras
