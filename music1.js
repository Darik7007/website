const artists = [
  { name: "John Doe", genre: "Pop" },
  { name: "Jane Doe", genre: "Rock" },
  { name: "Jim Smith", genre: "Hip Hop" }
];

const artistList = document.querySelector("#artist-list");

artists.forEach(artist => {
  const li = document.createElement("li");
  li.innerHTML = `
    <b>Name:</b> ${artist.name} <br>
    <b>Genre:</b> ${artist.genre}
  `;
  artistList.appendChild(li);
});
