/*
 * This program finds the length of a wooden board
 * that's 1 board foot in dimesion.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-03-16
 */

import java.util.Scanner;

/**
* This is the BoardFoot program.
*/

final class BoardFoot {
    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private BoardFoot() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * Finds the length of the wood for a board foot.
    *
    * @param width of the wood
    * @param height of the wood
    * @return length needed to be considered a board foot
    */
    static float checkBoardLength(final float width, final float height) {
        final float boardFoot = 144;
        final float length = boardFoot / (width * height);
        return length;
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        final Scanner scanner = new Scanner(System.in);

        // Error Check
        try {
            System.out.print("Enter width (in): ");
            final float width = Float.parseFloat(scanner.nextLine());
            System.out.print("Enter height (in): ");
            final float height = Float.parseFloat(scanner.nextLine());
            if (width > 0 && height > 0) {
                final float length = checkBoardLength(width, height);
                System.out.println("The wood should be " + length
                                 + " inche(es) long.");
            } else {
                // Input is invalid
                Integer.parseInt(null);
            }
        } catch (NumberFormatException exception) {
            // Input is invalid
            System.out.println("Invalid input.");
        }

        // Close scanners
        scanner.close();

        // Show the program as done
        System.out.println("\nDone.");
    }
}