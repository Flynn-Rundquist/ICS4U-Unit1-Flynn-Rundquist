/**
 * This program shows how to get input
 * and deal with numbers.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-02-29
 */

import java.util.Scanner;

public class LogTruck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("\nChoose the length of logs you would like to move with a truck.");
        System.out.print("Enter length in meters -> 0.25, 0.5, 1.0: ");
        double lengthOfLogFloat = scanner.nextDouble();
        
        final int capacity = 1100;
        final int weight = 20;
        
        double maxLength = (double) capacity / weight;
        double numberOfLogs = maxLength / lengthOfLogFloat;
        
        System.out.printf("The truck can carry %.2f logs that are %.2f meters long.\n", numberOfLogs, lengthOfLogFloat);
        System.out.println("\nDone.");
        
        scanner.close();
    }
}
