

function convertHeigth(height) {
    let heigthArray = height.split("'");
    let feet = heigthArray[0];
    let inches = parseInt(heigthArray[1]);
    let sm = feet*30 + inches*2.54;
    let metres = Math.floor(sm/100);
    let restSm = Math.round(sm - metres*100);
    return metres + "м "+ restSm + "см";
};

export {convertHeigth};