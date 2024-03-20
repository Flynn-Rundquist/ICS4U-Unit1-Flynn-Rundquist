/**
 * This program generates marks for students
 * and saves it to marks.csv
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-03-19
 */

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Represents a student.
 */
class Student {
    private String name;
    private int overallGrade;

    /**
     * Constructs a student with the given name.
     * @param name The name of the student.
     */
    public Student(String name) {
        this.name = name;
        this.overallGrade = 0;
    }

    /**
     * Gets the name of the student.
     * @return The name of the student.
     */
    public String getName() {
        return name;
    }

    /**
     * Gets the overall grade of the student.
     * @return The overall grade of the student.
     */
    public int getOverallGrade() {
        return overallGrade;
    }

    /**
     * Adds a grade to the student's overall grade.
     * @param grade The grade to add.
     */
    public void addGrade(int grade) {
        overallGrade += grade;
    }

    /**
     * Calculates the average grade of the student.
     * @param totalAssignments The total number of assignments.
     */
    public void calculateAverageGrade(int totalAssignments) {
        overallGrade /= totalAssignments;
    }
}

/**
 * Represents an assignment.
 */
class Assignment {
    private String name;

    /**
     * Constructs an assignment with the given name.
     * @param name The name of the assignment.
     */
    public Assignment(String name) {
        this.name = name;
    }

    /**
     * Gets the name of the assignment.
     * @return The name of the assignment.
     */
    public String getName() {
        return name;
    }
}

/**
 * Represents a mark for a student on an assignment.
 */
class Mark {
    private Student student;
    private Assignment assignment;
    private int mark;

    /**
     * Constructs a mark for a student on an assignment.
     * @param student The student.
     * @param assignment The assignment.
     * @param mark The mark.
     */
    public Mark(Student student, Assignment assignment, int mark) {
        this.student = student;
        this.assignment = assignment;
        this.mark = mark;
    }

    /**
     * Gets the student.
     * @return The student.
     */
    public Student getStudent() {
        return student;
    }

    /**
     * Gets the assignment.
     * @return The assignment.
     */
    public Assignment getAssignment() {
        return assignment;
    }

    /**
     * Gets the mark.
     * @return The mark.
     */
    public int getMark() {
        return mark;
    }
}

/**
 * Generates marks for students and calculates their overall grades.
 */
public class MarksGenerator {
    /**
     * Main method to generate marks and calculate overall grades.
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {
        try {
            List<String> studentNames = Files.readAllLines(
        Paths.get("student-names.txt"));
List<String> assignmentNames = Files.readAllLines(
        Paths.get("assignments.txt"));
            List<Student> students = new ArrayList<>();
            for (String name : studentNames) {
                students.add(new Student(name.trim()));
            }

            List<Assignment> assignments = new ArrayList<>();
            for (String name : assignmentNames) {
                assignments.add(new Assignment(name.trim()));
            }

            List<Mark> marks = new ArrayList<>();
            Random random = new Random();
            for (Student student : students) {
                for (Assignment assignment : assignments) {
                    int mark = random.nextInt(31) + 70;
                    marks.add(new Mark(student, assignment, mark));
                    student.addGrade(mark);
                }
                student.calculateAverageGrade(assignments.size());
            }

            // Write results to marks.csv
            StringBuilder csvContent = new StringBuilder();
            for (Student student : students) {
                csvContent.append(student.getName()).append(",")
                  .append(student.getOverallGrade()).append("\n");
            }
            Files.write(Paths.get("marks.csv"), csvContent.toString().getBytes());

            System.out.println("Marks.csv created successfully.");
            System.out.println("\nDone.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
