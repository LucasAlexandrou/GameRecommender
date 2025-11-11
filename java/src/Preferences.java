import java.util.ArrayList;
import java.util.List;

public class Preferences {
    private double price;
    private int metaScore;
    private int userScore;
    private List<String> genres;
    private List<String> categories;
    private List<String> tags;

    public Preferences(double price, int metaScore, int userScore,  List<String> genres, List<String> categories, List<String> tags) {
        this.price = price;
        this.metaScore = metaScore;
        this.userScore = userScore;
        this.genres = new ArrayList<>();
        this.categories = new ArrayList<>();
        this.tags = new ArrayList<>();
    }

    public double getPrice() {
        return price;
    }
    public int getMetaScore() {
        return metaScore;
    }
    public int getUserScore() {
        return userScore;
    }
    public List<String> getGenres() {
        return genres;
    }
    public List<String> getCategories() {
        return categories;
    }
    public List<String> getTags() {
        return tags;
    }
}
