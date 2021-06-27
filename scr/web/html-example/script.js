loadfib()
function loadfib() {
/*    console.log("loading")

    console.log(indexArray(5))
    console.log(indexArray(10))

    console.log(indexArray(2455))
    console.log(indexArray(234))
    console.log(indexArray(2479))
    console.log(indexArray(487))
*/
   //  console.log(closestIndex(5))
    const fib = allResults()
    var total = 0
    console.log(fib.length)
    document.getElementById("fib").innerHTML = `
        ${fib.map(function(result) {
            total = total + 1
            return `
                <p>${result}<p>
            `
        }).join(" ")}
    `
}