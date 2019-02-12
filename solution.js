function checksum(data) {
    checksumarr = []
    for (i = 0; i < data.length; i++) { 
        min = Math.min(...data[i])
        max = Math.max(...data[i])
        diff = max - min
        checksumarr.push(diff)
    }
    return ans = checksumarr.reduce((a, b) => a + b, 0)
}