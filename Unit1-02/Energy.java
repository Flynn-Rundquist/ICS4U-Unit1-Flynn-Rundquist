
/*
 * This program takes the mass of an object
 * and calculates the amount of energy released
 * @author  Flynn Rundquist
 * @version 1.0
 * @since   2024-03-15
 */

import java.util.InputMismatchException;
import java.util.Scanner;

final class Energy {
    public static final int SPEED_OF_LIGHT = 299792458;

    private Energy() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    public static void main(final String[] args) {
        try {
            final Scanner input = new Scanner(System.in);
            System.out.print("Enter the mass of the object in kilograms: ");
            final double mass = input.nextDouble();
            
            if (mass < 0) {
                System.out.println("Invalid input! Mass cannot be negative.");
                System.exit(0); // Exit the program
            }
            
            final double energy = mass * Math.pow(SPEED_OF_LIGHT, 2);
            System.out.println(mass + "kg of mass would produce "
                            + String.format("%.3e", energy) + " J of energy.");
            input.close();
        } catch (InputMismatchException ex) {
            System.out.println("Invalid input! Please enter a valid number.");
        }

        System.out.println("\nDone.");
    }
}
