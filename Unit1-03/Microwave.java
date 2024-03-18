
/*
 * This program tells someone how long to microwave
 * their food.
*
* @author  Flynn Rundquistt
* @version 1.0
* @since   2024-03-15
*/

import java.util.Scanner;

/**
* Program calculates microwave cook time.
*/
final class Microwave {

    /**
     * Constants.
     */
    public static final double MAX_NUMBER = 4.0;

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException
    * if this is ever called.
    *
    * @throws IllegalStateException if this is ever called
    */

    private Microwave() {
        throw new IllegalStateException("Cannot be instantiated");
    }
    /**
    * Function gets index of String in arr.
    *
    * @param arr Array that is searched
    * @param word String that is searched
    * @return return the index found
    */

    public static int includes(final String[] arr, final String word) {
        int counter = 0;
        int result = -1;
        for (String s : arr) {
            if (word.equals(s)) {
                result = counter;
                break;
            }
            counter++;
        }
        return result;
    }

    /**
    * Program calculates microwave cook time.
    *
    * @param args No args will be used
    */

    public static void main(final String[] args) {
        // Defining variables
        final Scanner s = new Scanner(System.in);
        final String[] options = {"sub", "pizza", "soup"};
        final double[] optionsTime = {1.0, 0.75, 1.75};
        String food = "";
        final int mass = 0;

        // Getting user input
        while (includes(options, food) < 0) {
            System.out.print("Food(pizza, sub, or soup): ");
            food = s.next();
            food = food.toLowerCase();
            food = food.strip();
        }

        // Getting user input
        System.out.print("How many " + food + "(s) are you cooking(max:3): ");
        final String amountString = s.next();

        try {
            // Convert string to integer
            final double amount = Double.valueOf(amountString);

            if (amount <= 0) {
                System.out.println("Amount cannot be negative");
            } else if (amount >= MAX_NUMBER) {
                System.out.println("The maximum quantity of food is 3.");
            } else {
                // Calculations
                final double timeOfOne = optionsTime[includes(options, food)];
                final double timeUnFormated =
                    timeOfOne + timeOfOne * ((amount - 1) * 0.5);
                final double seconds = 60 * (timeUnFormated % 1);
                final double minutes = timeUnFormated - (timeUnFormated % 1);

                // Output
                System.out.println("The total cook time is " + minutes
                    + " minutes and " + seconds + " seconds.");
            }

        } catch (NumberFormatException ex) {
            // Exception
            System.out.println("Input invalid :(");
        } finally {
            // Done
            System.out.println("\nDone.");
        }
    }
}
