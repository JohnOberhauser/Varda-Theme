export function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength).trim() + '…';
    }
    return str;
}

export function insertNewlines(input: string, maxLineLength: number = 25): string {
    const lines = input.split("\n"); // Split the input into existing lines
    const result: string[] = [];

    for (const line of lines) {
        const words = line.split(" ");
        let currentLine = "";
        for (const word of words) {
            // Check if adding the next word exceeds the line length
            if (currentLine.length + word.length + 1 > maxLineLength) {
                // Push the current line to the result and start a new line
                result.push(currentLine.trim());
                currentLine = word + " ";
            } else {
                // Add the word to the current line
                currentLine += word + " ";
            }
        }
        // Push the last line if it contains any words
        if (currentLine.trim().length > 0) {
            result.push(currentLine.trim());
        }
    }

    return result.join("\n");
}
