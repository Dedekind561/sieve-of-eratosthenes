export const setupGrid = (n: number) => {
    return Array.from({length: n},(_,i) => ({value: i + 1}))
}