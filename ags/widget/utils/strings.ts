export function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength).trim() + '…';
    }
    return str;
}