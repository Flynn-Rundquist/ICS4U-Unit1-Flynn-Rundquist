/**
 * This program shows how to get input
 * and deal with numbers.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-02-29
 */
import java.util.Scanner;

    /**
     * Utility class for calculating number of logs
     */
final class Logs {
    /**
     * Private constructor to prevent instantiation of this utility class.
     */
    private Logs() {
        // Private constructor to prevent instantiation
    }

    /**
     * Main method to do calculations.
     *
     * @param args Command line arguments (not used).
     */
  import java.util.Scanner;

final class Logs {
    private Logs() {
        // Private constructor to prevent instantiation
    }

    public static void main(String[] args) {
        System.out.println("\nChoose the length of logs you would like to move with a truck.");
        System.out.print("Enter length in meters -> 0.25, 0.5, 1.0: ");

        Scanner scanner = new Scanner(System.in);
        double lengthOfLogFloat = scanner.nextDouble(); // Take user input

        final int capacity = 1100;
        final int weight = 20;

    if (lengthOfLogFloat == 0.25 || lengthOfLogFloat == 0.5 || lengthOfLogFloat == 1.0) {
            final double maxLength = (double) capacity / weight;
            final double numberOfLogs = maxLength / lengthOfLogFloat;
            System.out.printf("The truck can carry %.2f logs that are %.2f meters long.\n", numberOfLogs, lengthOfLogFloat);
    } else {
            System.out.println("Invalid input.");
        }
    }

        System.out.println("\nDone.");
    }
}
