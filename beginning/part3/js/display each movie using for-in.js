var movies = ["Schindler's List", "Lawrence of Arabia", "The Shawshank Redemption", "12 Angry Men", "The Dark Knight", "Braveheart", "The Godfather"];

for (var index in movies) {
  console.log("Movie " + (parseInt(index) + 1) + ": " + movies[index]);
}
