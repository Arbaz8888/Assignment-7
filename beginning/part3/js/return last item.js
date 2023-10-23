var movies = ["Schindler's List", "Lawrence of Arabia", "The Shawshank Redemption", "12 Angry Men", "The Dark Knight", "Braveheart", "The Godfather"];

var leastFavMovies = ["Maniac", "Reefer Madness", "The Terror of Tiny Town"];

var mergedMovies = movies.concat(leastFavMovies);

mergedMovies.sort().reverse();

var lastItem = mergedMovies[mergedMovies.length - 1];
console.log("The last item in the array is: " + lastItem);