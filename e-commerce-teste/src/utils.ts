export function convertValue(num: number) : string {
    let numF = num.toFixed(2)
    numF = numF.replace(/\./g, ',')
    return 'R$ ' + numF
}