export function saveArrayToLocalStorage(key: string, arr: number[]) {
    localStorage.setItem(key, JSON.stringify(arr))
}
export function getArrayFromLocalStorage(key: string): number[] {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
}