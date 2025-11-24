
async function fetchFilteredGames() {
    const url = `https://summer-rice-44d8.lucasalexandrou.workers.dev/games?genres=action&ordering=-metacritic&page_size=5`;
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

                <div id="description-${game.id}"><h3>Description:</h3></div>
                <div id="details-${game.id}"><h3>Details:<h3></div>

                <h3>Screenshots:</h3>
                <div id = "gallery-${game.id}" class = "gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
                </div>
            `;
            gamesList.appendChild(listItem);

            fetchGameScreenshots(game.id);
            fetchGameDescription(game.id);
            fetchGameDetails(game.id);
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

        const gallery = document.getElementById(`gallery-${gameId}`);

        data.results.forEach(img => {

            const cell = document.createElement('div');
            cell.className = 'gallery-cell';

            const screenshot = document.createElement('img');
            screenshot.src = img.image;
            screenshot.width = 200;

            screenshot.addEventListener('click', () => {
                document.getElementById('fullscreen-image').src = img.image;
                document.getElementById('fullscreen-modal').style.display = 'flex';
                
            });

            cell.appendChild(screenshot);
            gallery.appendChild(cell);
        });

        const images = gallery.querySelectorAll('img');
        let loadedImages = 0;
        const totalImages = images.length;

        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
                if (loadedImages === totalImages) {
                    initFlickity(gallery);
                }
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        initFlickity(gallery);
                    }
                });
                img.addEventListener('error', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        initFlickity(gallery);
                    }
                });
            }
        });

    }catch (error) {
            console.error("Error fetching screenshots for game ID " + gameId + ":", error);
    }
}   

function initFlickity(gallery) {
    new Flickity( gallery, {
        wrapAround: true,
        autoPlay: 3000,
        pageDots: false,
        cellAlign: 'left',
        contain: true
    });
}


async function fetchGameDescription(gameId) {
    const url = `https://summer-rice-44d8.lucasalexandrou.workers.dev/games/${gameId}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        const container = document.getElementById(`description-${gameId}`);

        const description = document.createElement('p');
        description.textContent = data.description_raw ;
        container.appendChild(description);
    }catch (error) {
            console.error("Error fetching details for game ID " + gameId + ":", error);
    }  
}

async function fetchGameDetails(gameId) {
    const url = `https://summer-rice-44d8.lucasalexandrou.workers.dev/games/${gameId}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const container = document.getElementById(`details-${gameId}`);

        const genres = document.createElement('p');
        genres.textContent = "Genres: " + data.genres.map(genre => genre.name).join(', ');;
        container.appendChild(genres);

        const tags = document.createElement('p');
        tags.textContent = "Tags: " +  data.tags.map(tag => tag.name).join(', ');
        container.appendChild(tags);

        const platforms = document.createElement('p');
        platforms.textContent = "Platforms: " + data.platforms.map(p => p.platform.name).join(', ');
        container.appendChild(platforms);

        const developers = document.createElement('p');
        developers.textContent = "Developers: " + data.developers.map(dev => dev.name).join(', ');
        container.appendChild(developers);

        const playtime = document.createElement('p');
        playtime.textContent = "Playtime: " + data.playtime + " hours";
        container.appendChild(playtime);

        const rating = document.createElement('p');
        rating.textContent = "Rating on RAWG: " + data.rating + " / " + data.rating_top;
        container.appendChild(rating);
        

    } catch (error) {
        console.error("Error fetching game details for ID " + gameId + ":", error);
    }
}

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('fullscreen-modal').style.display = 'none';
});

fetchFilteredGames();