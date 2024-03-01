/**
 * This program shows how to get input
 * and deal with numbers.
 *
 * @author Flynn Rundquist
 * @version 1.0
 * @since 2024-02-29
 */

public class LogTruck {
    public static void main(String[] args) throws Exception {
        System.out.println("\nChoose the length of logs you would like to move with a truck.");
        System.out.print("Enter length in meters -> 0.25, 0.5, 1.0: ");

        StringBuilder inputBuffer = new StringBuilder();
        while (true) {
            int c = System.in.read();
            if (c == '\n' || c == '\r' || c == -1) {
                break;
            }
            inputBuffer.append((char) c);
        }

        double lengthOfLogFloat = Double.parseDouble(inputBuffer.toString().trim());

        final int capacity = 1100;
        final int weight = 20;

        double maxLength = (double) capacity / weight;
        double numberOfLogs = maxLength / lengthOfLogFloat;

        System.out.printf("The truck can carry %.2f logs that are %.2f meters long.\n", numberOfLogs, lengthOfLogFloat);
        System.out.println("\nDone.");
    }
}
