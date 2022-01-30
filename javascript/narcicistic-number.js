function narcissistic(value) {
    let str = value + ''
    let result = 0
    for(let i = 0; i < str.length; i++) {
        result += Math.pow(Number(str[i]), str.length)
    }
    return result === value
}

console.log(narcissistic(153))