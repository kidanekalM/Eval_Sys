namespace EvaluationAPI.models;
public class Instructor
{
    public Guid Id;
    public required String Name;
    public String ?ProfileURL;
    public List<Rating>? Ratings;
    public required List<Course> Courses;
}