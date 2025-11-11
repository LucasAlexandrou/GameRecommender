import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("----------------------------------------");
        System.out.println("Welcome to the recommender");
        System.out.println("-------------------------------------");
        System.out.println("Main Menu:");
        System.out.println("1. Recommend a game based on my preferences");
        System.out.println("2. Recommend a random game");
        System.out.println("3. Show all the tags");
        System.out.println("4. Exit");
        System.out.println("-------------------------------------");

        boolean inMenu = true;
        int choice = scan.nextInt();
        scan.nextLine();
        while (inMenu) {
            switch (choice) {
                case 1:
                    GetPreferences.getPreferences(scan);
                    break;
                case 2:
                    LoadGameData.loadGameData();
                    break;
                case 3:
                    //show tags
                case 4:
                    inMenu = false;
                    break;
                default:
                    System.out.println("Please enter a valid choice");
            }
        }
    }
}
