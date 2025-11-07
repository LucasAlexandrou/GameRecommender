import json

input_file = "data/cleaned_games.json"
output_dir = "data/by_year"

with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total entries: {len(data)} ")

by_year = {}

for game_id, game in data.items():
    date = game.get("release_date")
    if not date:
        continue

    year = None
    for part in date.split():
        if part.isdigit() and len(part) == 4:
            year = int(part)
            break

    if not year:
        continue

    if year not in by_year:
        by_year[year] = {}
    by_year[year][game_id] = game

for year, games in by_year.items():
    with open(f"{output_dir}/{year}.json", "w", encoding= "utf-8") as f:
        json.dump(games, f, indent=4, ensure_ascii=False)
    print(f"Saved {len(games)} games to {year}.json")

print("Done splitting data by year.")