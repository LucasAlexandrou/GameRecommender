import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        List<Integer> year = new ArrayList<>();
        double price = 0.0;
        int metaScore = 0;
        int userScore = 0;
        List<String> genres = new ArrayList<>();
        List<String> categories = new ArrayList<>();
        List<String> tags = new ArrayList<>();

        Scanner scan = new Scanner(System.in);

        System.out.println("----------------------------------------");
        System.out.println("Welcome to the recommender");

        //Getting the years
        System.out.println("Years available: 1997-2025");
        System.out.println("Please enter the years you want the video game to be from:");
        System.out.println("When your done adding the years you want, type 'done'");
        System.out.println("If you want to use all years type 'all'");
        while (true) {
            if (scan.hasNextInt()) {
                year.add(scan.nextInt());
                scan.nextLine();
                System.out.println("Years: " + year);
            }  else if (scan.nextLine().equalsIgnoreCase("done")) {
                break;
            }
            else if (scan.nextLine().equalsIgnoreCase("all")) {
                for (int i = 1997; i < 2025; i++) {
                    year.add(i);
                }
                break;
            } else {
                System.out.println("Please enter a valid year, type 'done', or 'all'");
            }
        }
        System.out.println("----------------------------------------");

        //Getting the price
        System.out.println("Please enter the price you want the video game to be from:");
        System.out.println("Type a negative number if you don't mind whatever price");
        boolean validPrice = false;
        while (!validPrice) {
            if (scan.hasNextDouble()) {
                price = scan.nextDouble();
                validPrice = true;
            } else {
                System.out.println("Please enter a valid price");
            }
        }
        scan.nextLine();
        System.out.println("----------------------------------------");

        //Getting metacritic score
        System.out.println("Please enter the metacritic score you want the video game to have:");
        System.out.println("Type a negative number if you don't mind whatever metacritic score");
        boolean validMetaScore = false;
        while (!validMetaScore) {
            if (scan.hasNextInt()) {
                metaScore = scan.nextInt();
                validMetaScore = true;
            } else  {
                System.out.println("Please enter a valid meta score");
            }
        }
        scan.nextLine();
        System.out.println("----------------------------------------");

        //Getting steam review score
        System.out.println("Please enter the steam review score you want the video game to have:");
        System.out.println("Type a negative number if you don't mind whatever steam review score");
        boolean validSteamScore = false;
        while (!validSteamScore) {
            if (scan.hasNextInt()) {
                userScore = scan.nextInt();
                validSteamScore = true;
            } else {
                System.out.println("Please enter a valid steam score");
            }
        }
        scan.nextLine();
        System.out.println("----------------------------------------");

        //Getting genres
        System.out.println("Example of Genres - Action, Indie, Casual, RPG, Racing, Simulation, Strategy, Sports");
        System.out.println("Please enter the genres you want the video game to be from:");
        System.out.println("When your done adding the genres you want, type 'done'");
        String inputGenre;
        while (true) {
            inputGenre = scan.nextLine();
            if (inputGenre.equalsIgnoreCase("done")) {
                break;
            } else {
                genres.add(inputGenre);
                System.out.println("Genres: " + genres);
            }
        }
        System.out.println("----------------------------------------");

        //Getting categories
        System.out.println("Example of Categories - Single_player, Steam Achievements, Multi-player, Co-op, PVP, Steam Cloud");
        System.out.println("Please enter the categories you want the video game to be from:");
        System.out.println("When your done adding the categories you want, type 'done'");
        String inputCategories;
        while (true) {
            inputCategories = scan.nextLine();
            if (inputCategories.equalsIgnoreCase("done")) {
                break;
            } else {
                categories.add(inputCategories);
                System.out.println("Categories: " + categories);
            }
        }
        System.out.println("----------------------------------------");

        //Getting tags
        System.out.println("Example of Tags - Immersive Sim, 1990s, Violent, FPS, Cinematic, Hidden Object, Survival, Crafting, Exploration, Gothic");
        System.out.println("Please enter the tags you want the video game to be from:");
        System.out.println("When your done adding the tags you want, type 'done'");
        String inputTags;
        while (true) {
            inputTags = scan.nextLine();
            if (inputTags.equalsIgnoreCase("done")) {
                break;
            } else {
                tags.add(inputTags);
                System.out.println("Tags: " + tags);

            }
        }
        System.out.println("----------------------------------------");

        Preferences userPreferences = new Preferences(year,price,metaScore,userScore,genres,categories,tags);
    }
}
