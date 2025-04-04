using EvaluationAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EvaluationAPI.Repositories;
public class RatingRepo  
{
    private readonly EvalContext _context;

    public RatingRepo(EvalContext context)
    {
        _context = context;
    }
    public async Task<Rating?> AddRating(RatingDto ratingDto)
    {
        try
        {
            Rating rating = new(){
                Id= Guid.NewGuid(),
          Email=ratingDto.Email,
          Value=ratingDto.Value,
    Instructor=await _context.Instructors.FindAsync(ratingDto.InstructorId)
                ?? throw new ArgumentException("Instructor not found"),
        RatingDetails= await _context.RatingDetails.FindAsync(ratingDto.RatingDetailsId)
                ?? throw new ArgumentException("RatingDetails not found"),
           Criteria= await _context.Criterias.FindAsync(ratingDto.CriteriaId)
                ?? throw new ArgumentException("Criteria not found")

            };
            _context.Ratings.Add(rating);
            await _context.SaveChangesAsync();
            return rating;
        }

        catch (Exception e)
        {
            Console.WriteLine("Exception Occured! " + e.Message);
            return null; 
        }
    }
public async Task<Rating?> DeleteRatingAsync(Guid id)
    {
        var rating = await _context.Ratings.FindAsync(id);
        if (rating == null)
        {
            return null; // Rating not found
        }

        _context.Ratings.Remove(rating);
        await _context.SaveChangesAsync();
        return rating; // Rating deleted successfully
    }

    public async Task<Rating?> GetRatingByIdAsync(Guid id)
    {
        return await _context.Ratings
            .Include(r => r.Instructor)
            .Include(r => r.RatingDetails)
            .Include(r => r.Criteria)
            .FirstOrDefaultAsync(r => r.Id == id);
    }

    public async Task<List<Rating>> GetAllRatingsAsync()
    {
        return await _context.Ratings
            .Include(r => r.Instructor)
            .Include(r => r.RatingDetails)
            .Include(r => r.Criteria)
            .ToListAsync();
    }
}