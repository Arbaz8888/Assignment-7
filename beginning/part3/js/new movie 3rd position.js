var movies = new Array(5);

movies[0] = "Schindler's List";
movies[1] = "Lawrence of Arabia";
movies[2] = "The Shawshank Redemption";
movies[3] = "12 Angry Men";
movies[4] = "The Dark Knight";

movies.splice(2, 0, "Braveheart");

console.log("The length of the array is now: " + movies.length);
