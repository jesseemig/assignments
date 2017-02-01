function money(input) {
    return `$${(input/100).toLocaleString(undefined, {minimumFractionDigits: 2})}`
}

console.log(money(123456789));