/**
 * This program shows how to get input
 * and deal with numbers.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-02-29
 */

import java.util.Scanner;

public class Logs {
    private Logs() {}

    public static void main(String[] args) {
        System.out.println("\nChoose the length of logs you would like to move with a truck.");
        System.out.print("Enter length in meters -> 0.25, 0.5, 1.0: ");

        Scanner scanner = new Scanner(System.in);
        double lengthOfLogFloat = scanner.nextDouble();
        final int capacity = 1100;
        final int weight = 20;
        final double maxLength = (double) capacity / weight;
        final double numberOfLogs = maxLength / lengthOfLogFloat;

        System.out.printf("The truck can carry %.2f logs that are %.2f meters long.\n", numberOfLogs, lengthOfLogFloat);
        System.out.println("\nDone.");
    }
}

