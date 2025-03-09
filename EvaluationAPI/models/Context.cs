using Microsoft.EntityFrameworkCore;

namespace EvaluationAPI.models;
public class EvalContext(DbContextOptions options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Course>().HasKey(c=>c.Code);
}
public DbSet<Course> Courses;
public  DbSet<Criteria> Criterias;
public DbSet<Instructor> Instructors;
public DbSet<Rating> Ratings;
public DbSet<RatingDetails> RatingDetails;

}