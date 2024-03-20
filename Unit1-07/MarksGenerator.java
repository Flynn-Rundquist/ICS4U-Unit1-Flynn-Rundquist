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

class Student {
    private String name;
    private int overallGrade;

    public Student(String name) {
        this.name = name;
        this.overallGrade = 0;
    }

    public String getName() {
        return name;
    }

    public int getOverallGrade() {
        return overallGrade;
    }

    public void addGrade(int grade) {
        overallGrade += grade;
    }

    public void calculateAverageGrade(int totalAssignments) {
        overallGrade /= totalAssignments;
    }
}

class Assignment {
    private String name;

    public Assignment(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Mark {
    private Student student;
    private Assignment assignment;
    private int mark;

    public Mark(Student student, Assignment assignment, int mark) {
        this.student = student;
        this.assignment = assignment;
        this.mark = mark;
    }

    public Student getStudent() {
        return student;
    }

    public Assignment getAssignment() {
        return assignment;
    }

    public int getMark() {
        return mark;
    }
}

public class MarksGenerator {
    public static void main(String[] args) {
        try {
            List<String> studentNames = Files.readAllLines(Paths.get("student-names.txt"));
            List<String> assignmentNames = Files.readAllLines(Paths.get("assignments.txt"));

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
                    int mark = random.nextInt(31) + 70; // Generate random mark between 70 and 100
                    marks.add(new Mark(student, assignment, mark));
                    student.addGrade(mark);
                }
                student.calculateAverageGrade(assignments.size());
            }

            // Write results to marks.csv
            StringBuilder csvContent = new StringBuilder();
            for (Student student : students) {
                csvContent.append(student.getName()).append(",").append(student.getOverallGrade()).append("\n");
            }
            Files.write(Paths.get("marks.csv"), csvContent.toString().getBytes());

            System.out.println("Marks.csv created successfully.");
            System.out.println("\nDone.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
