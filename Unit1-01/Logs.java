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
* This program calculates the number of logs that can
* the truck can carry.
*/
final class Logs {
    /**
     * Constants.
     *
     */
    public static final double MASS_OF_LOGS = 20.0;

    /**
     * Constants.
     *
     */
    public static final int LOGGING_TRUCK_LIMIT = 1100;

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException
    * if this is ever called.
    *
    * @throws IllegalStateException if this is ever called
    */
    private Logs() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        final Scanner scanner = new Scanner(System.in);

        // Ask user for the length of maple logs
        System.out.print("Enter the length of logs in meters -> 0.25, 0.5, 1.0: ");
        final double logLength = scanner.nextDouble();

        // Calculate the weight of one log based on its length
        final double logWeight = logLength * MASS_OF_LOGS;

        // Calculate the number of logs that can be placed on the truck
        final int numOfLogs = (int) (LOGGING_TRUCK_LIMIT / logWeight);

        // Display the result
        System.out.println("Logs placed on the truck: " + numOfLogs);

        System.out.println("\nDone.");

        scanner.close();
    }
}