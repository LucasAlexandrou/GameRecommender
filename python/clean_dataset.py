import json

input_file = "data/raw_games.json"
output_file = "data/cleaned_games.json"

fields_to_keep = [
    "name",
    "release_date",
    "price",
    "metacritic_score",
    "genres",
    "categories",
    "tags",
    "positive",
    "negative"
]

with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total entries: {len(data)} ")

cleaned_data = {}

for game_id, game_info in data.items():
    if not game_info.get("name") or not game_info.get("genres") or not game_info.get("release_date"):
        continue

    cleaned_entry = {key: game_info.get(key, None) for key in fields_to_keep}

    cleaned_data[game_id] = cleaned_entry

print(f"Cleaned entries: {len(cleaned_data)}")

with open(output_file, "w", encoding= "utf-8") as f:
    json.dump(cleaned_data, f, indent=4, ensure_ascii=False)

print(f"Cleaned data, saved to {output_file}")