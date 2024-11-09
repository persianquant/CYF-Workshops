const express = require("express");
const albumsData = require("./albums.json");
const app = express();

const express = require("express");
const albumsData = require("./albums.json");
const app = express();
app.use(express.json());


app.get("/albums", (req, res) => {
  res.send(albumsData);
});

app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  const album = albumsData.find(album => album.albumId === albumId);
  if (album) {
    res.send(album);
  } else {
    res.send("Album not found");
  }
 // now find the given album from the `albumsData` using the `albumId`
 // finally send the album you found back to the client
});
app.post("/albums", function (req, res) { 
  const newAlbum = req.body; 
  albumsData.push(newAlbum); 
  res.send("Album added successfully!"); 
});

// notice .delete
app.delete("/albums/:albumID", function (req, res) {
  console.log("DELETE /albums route");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080. Ready to accept requests!");
});



app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
