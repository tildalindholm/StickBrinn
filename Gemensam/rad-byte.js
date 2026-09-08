const rowMarker = document.getElementById('rowMarker');
const currentRow = document.getElementById('currentRow');

const startBottom = 78; //Börjar räkna från 78px (det är rad 1)
const rowHeight = 19.9; //Ska flyttas 20px uppåt eller neråt

function moveMarker(){ //Funktion för att flytta rutan en rad upp
    const row = parseInt(currentRow.textContent); //Hämtar siffran som är den nuvarande raden. parseInt konverterar texten till ett heltal
    const newBottom = startBottom + (row - 1) * rowHeight; //Räknar ut den nya positionen
    rowMarker.style.bottom = `${newBottom}px`; //Går in i rowMarker i CSS och ändrar bottom till det nya uträknade pixel-värdet
}

const observer = new MutationObserver(moveMarker); //En "bevakare" som anropar moveMarker när något ändras i HTML

observer.observe(currentRowSpan, { //Säger åt bevakaren vilket element den ska hålla koll på (den håller koll på Ingrids kod som ändrar mittensiffran, alltså den siffran som visar current row)
    childList: true,
    characterData: true,
    subtree: true
});

