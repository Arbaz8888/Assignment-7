var movies = ["Schindler's List", "Lawrence of Arabia", "The Shawshank Redemption", "12 Angry Men", "The Dark Knight", "Braveheart", "The Godfather"];

var leastFavMovies = ["Maniac", "Reefer Madness", "The Terror of Tiny Town"];

var mergedMovies = movies.concat(leastFavMovies);

mergedMovies.sort().reverse();

console.log(mergedMovies);
