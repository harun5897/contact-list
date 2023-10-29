export function isAlphabet(input: string): boolean {
    return /^[A-Za-z ]+$/.test(input) || input === ''
}
export function isNumeric(input: string): boolean {
    return /^[0-9]+$/.test(input) || input === ''
}