namespace EvaluationAPI.Models;
public class Rating
{
    public Guid Id;
    public required String Email;
    public int Value;
    public required Instructor Instructor;
    public required RatingDetails RatingDetails;
    public required Criteria Criteria;

}