namespace EvaluationAPI.Repositories;
public record RatingDto(String Email,int Value,
    Guid InstructorId,
    Guid RatingDetailsId,
    Guid CriteriaId)
{
    
}