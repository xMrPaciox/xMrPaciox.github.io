// Funzione per cambiare il colore quando il mouse entra nell'elemento
function cambiaColoreEntrata() {
  document.getElementById('titoloHeader').style.color = '#87CEEB'; // Cambia il colore in rosso
}

// Funzione per ripristinare il colore quando il mouse esce dall'elemento
function cambiaColoreUscita() {
  document.getElementById('titoloHeader').style.color = '#fff'; // Ripristina il colore originale
}

function toggleContent(element) {
  // Trova il paragrafo successivo all'elemento h2 cliccato
  var paragraph = element.nextElementSibling;
  // Inverti la visibilità del paragrafo
  paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem("cookieConsent")) {
    document.getElementById("cookie-consent-banner").style.display = "block";
  }
});
  
function accettaCookie() {
  document.getElementById("cookie-consent-banner").style.display = "none";
  localStorage.setItem("cookieConsent", "accettato");
}