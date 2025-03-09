namespace EvaluationAPI.models;
public class RatingDetails{
 public Guid Id;
 public required string Term;
 public int Year;
 public List<Rating>? Ratings;
}