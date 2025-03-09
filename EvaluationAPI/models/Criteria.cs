namespace EvaluationAPI.models;
public class Criteria
{
    public Guid Id;
    public required string Name;
    public List<Rating>? Ratings;
}