
module.exports = (number, rounding ) => {
    const numberType = typeof number
//     console.log(numberType)
    switch (numberType) {
        case "number":
            number
            break;
        case "object":
            break;
        case "undefined":
            throw new Error(`Must have a valid data type for number, in indexArray. Callback ex: fibseq.indexArray(number, rounding), check docs for more information.`) ;
        default:
            throw new Error(`Must have a valid data type for number, in indexArray. ${number} is not valid.`) ;
    }
    return "---------- not done ----------"
    // if (numberType != number, array)
}