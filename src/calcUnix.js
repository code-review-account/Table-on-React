function calcUnix(timestamp) {
    var date = new Date(timestamp * 1000);
    var today = new Date();
    let yearNow = today.getFullYear();
    var timeConvert = date.getFullYear();
    return yearNow - timeConvert;
}

export {calcUnix};