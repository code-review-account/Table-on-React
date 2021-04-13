
function deleteSelected () {
    let selected = document.querySelectorAll('.selected');
    for (let i = 0; i < selected.length; i++) {
        selected[i].parentNode.classList.add('deleted');
    }
};

export {deleteSelected};