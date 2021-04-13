

function checkboxSelectRow (e) {
    let targetELement = e.currentTarget;
    targetELement.parentNode.classList.toggle('selected');
    document.querySelector("button").classList.toggle('disabled');
}

function checkboxSelectAll (e) {
    let targetELement = e.currentTarget;
    let targetAll = document.getElementsByClassName('checkbox');
    for (let i = 0; i < targetAll.length; i++) {
        if(targetELement.checked) {
            targetAll[i].checked = true;
            targetAll[i].parentNode.classList.add('selected');
            document.querySelector("button").classList.remove('disabled');
        } else {
            targetAll[i].checked = false;
            targetAll[i].parentNode.classList.remove('selected');
            document.querySelector("button").classList.add('disabled');
        }
    }
    
}



export {checkboxSelectRow, checkboxSelectAll};