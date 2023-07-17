let gameArray = [3][3];
let currentPlayer = 'cross'
let isStart = true


const clickable = document.querySelectorAll('.box_clickable');

clickable.forEach(
    (item) => item.addEventListener('click', function () {
        changeStyle(item)
    })
)


function changeStyle(item){
    cancelClickable(item)
    changeIconAndPlayer()
}


function cancelClickable(item) {
    let icon = item.getElementsByTagName("img")[0];
    item.classList.remove('box_clickable')
    item.classList.add('box_clicked');
    icon.classList.remove('icon-unlocked')
    icon.classList.remove('box-icon_hidden')
    icon.classList.add('box-icon_show')
}



function changeIconAndPlayer() {
    if (currentPlayer == 'cross')
        currentPlayer = 'tick'
    else
        currentPlayer = 'cross'
    setAttributeToAll('.icon-unlocked', 'src', 'image/' + currentPlayer + '.svg');
    
}

function setAttributeToAll(className, attribute, value) {
    let items = document.querySelectorAll(className);
    items.forEach(
        (item) => item.setAttribute(attribute, value)
    )
}




