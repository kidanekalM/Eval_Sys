using Microsoft.EntityFrameworkCore;

namespace EvaluationAPI.models;
public class Course{
 public required string Code; //add the primary key in the configuration
public required string Name;
public required String Description;
public required List<Instructor> Instructors;
}