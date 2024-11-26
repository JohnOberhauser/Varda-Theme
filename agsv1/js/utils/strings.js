export function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength).trim() + '…';
    }
    return str;
}