export function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength).trim() + '…';
    }
    return str;
}

export function insertNewlines(input: string, maxLineLength: number = 25): string {
    const lines = input.split("\n");
    const result: string[] = [];

    for (const line of lines) {
        const words = line.split(" ");
        let currentLine = "";

        for (const word of words) {
            // If the word itself is longer than the max line length, we need to split it
            if (word.length > maxLineLength) {
                // If there's something already in the current line, push it and start fresh
                if (currentLine.trim().length > 0) {
                    result.push(currentLine.trim());
                    currentLine = "";
                }

                // Break the long word into chunks of maxLineLength
                let start = 0;
                while (start < word.length) {
                    const chunk = word.slice(start, start + maxLineLength);
                    // If this chunk doesn't fit into the current line, push and start a new line
                    if (currentLine.length + chunk.length > maxLineLength) {
                        if (currentLine.trim().length > 0) {
                            result.push(currentLine.trim());
                            currentLine = "";
                        }
                        currentLine = chunk; // Start a fresh line with the chunk
                    } else {
                        // If there's room, append the chunk to the current line
                        if (currentLine.length === 0) {
                            currentLine = chunk;
                        } else {
                            // If adding a space plus the chunk breaks the limit, we push and start new
                            if (currentLine.length + 1 + chunk.length > maxLineLength) {
                                result.push(currentLine.trim());
                                currentLine = chunk;
                            } else {
                                currentLine += " " + chunk;
                            }
                        }
                    }
                    start += maxLineLength;
                }
            } else {
                // For normal words that fit the line
                if (currentLine.length === 0) {
                    // Start a new line with this word
                    currentLine = word;
                } else {
                    // Check if we can append the word to the current line
                    if (currentLine.length + 1 + word.length > maxLineLength) {
                        // Push the current line and start a new one
                        result.push(currentLine.trim());
                        currentLine = word;
                    } else {
                        // Add the word to the current line
                        currentLine += " " + word;
                    }
                }
            }
        }

        // Push the last line if not empty
        if (currentLine.trim().length > 0) {
            result.push(currentLine.trim());
        }
    }

    return result.join("\n");
}
