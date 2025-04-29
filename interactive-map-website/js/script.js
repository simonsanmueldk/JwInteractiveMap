const markers = document.querySelectorAll('.location-marker');
const popup = document.getElementById('popup');
const popupInfo = document.getElementById('popup-info');
const closePopup = document.getElementById('close-popup');

// Example info for each location
const locationInfo = {
  perga: `<h2>Perga</h2>
         <p>Perga was a key stop on Paul’s first missionary journey (~47–48 AD), serving as an entry point into Asia Minor.<br>
         After arriving from Cyprus, John Mark left for Jerusalem (<a href="https://www.jw.org/en/library/bible/study-bible/books/acts/13/#v44013013
" target="_blank">Acts 13:13</a>), while Paul and Barnabas continued inland to Pisidian Antioch, spreading the gospel despite difficult terrain.<br>
         A Greco-Roman city in Pamphylia, Perga was known for its worship of Artemis and strategic location along the Kestros River.</p>`,
  paphos: `<h2>Paphos</h2>
         <p>Paphos was the Roman capital of Cyprus, known for its pagan worship activities.<br>
         The key moment here was Paul’s encounter with Sergius Paulus, a Roman proconsul who was open to the message—but they faced opposition from Elymas the sorcerer.</p>`,
         antioch_syria: `<h2>Antioch of Syria</h2>
         <p></p>`,
         salamis: `<h2>Salamis</h2>
         <p></p>`,
         antioch_pisidia: `<h2>Antioch of Pisidia</h2>
         <p></p>`,
         iconium: `<h2>Iconium</h2>
         <p></p>`,
         lystra: `<h2>Lystra</h2>
         <p></p>`,
         derbe: `<h2>Derbe</h2>
         <p></p>`,
         attalia: `<h2>Attalia</h2>
         <p></p>`,
         selucia: `<h2>Selucia</h2>
         <p></p>`,
};

markers.forEach(marker => {
  marker.addEventListener('click', () => {
    const loc = marker.dataset.location;
    popupInfo.innerHTML = locationInfo[loc] || "Information coming soon.";
    popup.style.display = "flex";
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = "none";
});

document.querySelectorAll('.location-list button').forEach(btn => {
  btn.addEventListener('click', () => {
    const loc = btn.dataset.location;
    popupInfo.innerHTML = locationInfo[loc] || "Information coming soon.";
    popup.style.display = "flex";
  });
});




