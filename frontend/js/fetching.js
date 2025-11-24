
async function fetchFilteredGames() {
    const url = `https://summer-rice-44d8.lucasalexandrou.workers.dev/games?genres=action&ordering=-metacritic&page_size=10`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        const gamesList = document.getElementById("games-ul");
        gamesList.innerHTML = "";

        for (const game of data.results) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h2>${game.name}</h2>
                <p>Released: ${game.released}</p>
                <p>Metacritic: ${game.metacritic}</p>
                <img src="${game.background_image}" alt="${game.name}" width="200">
                <div id="screenshots-${game.id}"><h3>Screenshots:</h3></div>
            `;
            gamesList.appendChild(listItem);

            fetchGameScreenshots(game.id);
        }

        console.log("Filtered Games:", data.results);
    } catch (error) {
        console.error("Error fetching filtered games:", error);
        
    }
}

async function fetchGameScreenshots(gameId) {
    const url = `https://summer-rice-44d8.lucasalexandrou.workers.dev/games/${gameId}/screenshots`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        const container = document.getElementById(`screenshots-${gameId}`);

        data.results.forEach(img => {
            const screenshot = document.createElement('img');
            screenshot.src = img.image;
            screenshot.width = 150;
            container.appendChild(screenshot);
        });

    }catch (error) {
            console.error("Error fetching screenshots for game ID " + gameId + ":", error);
    }
}   


fetchFilteredGames();