# Response-from-Api-Requests-in-a-File
A simple command-line tool that allows us to send an API request and save the results in a text file! Your application should perform an API request to the dad joke API (https://icanhazdadjoke.com/api) to search for a joke based on the search phrase. GET: https://icanhazdadjoke.com/search?term=?  If it discovers jokes that match the phrase, it should output a random joke and save it to a file named jokes.txt. If it fails to discover a joke, it should log a message to the console informing the user that no jokes for that search query were found. A command-line option called leaderboard should be accepted. Your application should return the most popular joke depending on how many times it appears in jokes.txt if that command-line input is passed in.

api.js ->Contains tha code
a.txt ->Contains randomly picked jokes by using user keywords
test.txt ->Organised file which is used to find the leaderboard. Modified a.txt i.e) removed extra lines for the leaderboard to be accurate
