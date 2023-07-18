let gameArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let currentPlayer = 'cross'
let isStart = true


const clickable = document.querySelectorAll('.box_clickable');

clickable.forEach(
    (item) => item.addEventListener('click', function () {
        let isWin = checkIsWin(item)
        if (isWin)
            console.log(currentPlayer + ' is win')
        changeStyle(item)
    })
)


function changeStyle(item) {
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
    currentPlayer = currentPlayer == 'cross' ? 'tick' : 'cross'
    setAttributeToAll('.icon-unlocked', 'src', 'image/' + currentPlayer + '.svg');
}

function setAttributeToAll(className, attribute, value) {
    let items = document.querySelectorAll(className);
    items.forEach(
        (item) => item.setAttribute(attribute, value)
    )
}


function checkIsWin(item) {
    let rowAndColum = getRowAndColum(item)

    setArray(rowAndColum)
    return crosschecking() || checkColum(rowAndColum.colum) || checkRow(rowAndColum.row)
}

function getRowAndColum(item) {
    let id = item.getAttribute('id')
    let result = {
        'row': -1,
        'colum': -1
    }
    result.row = parseInt(id.substr(0, 1))
    result.colum = parseInt(id.substr(2, 2))

    return result
}




function setArray(rowAndColum) {
    gameArray[rowAndColum.row][rowAndColum.colum] = currentPlayer
}


function checkRow(row) {
    for (let i = 0; i < 3; i++) {
        if (gameArray[row][i] != currentPlayer) {
            return false
        }
    }

    return true
}


function checkColum(colum) {
    for (let i = 0; i < 3; i++) {
        if (gameArray[i][colum] != currentPlayer) {
            return false
        }
    }

    return true
}


function crosschecking() {
    let crossForm00 = true
    let crossFrom22 = true

    for (let i = 0; i < 3; i++) {
        if (gameArray[i][i] != currentPlayer) {
            crossForm00 = false
            break
        }
    }


    for (let i = 2; i > -1; i--) {
        if (gameArray[2 - i][i] != currentPlayer) {

            crossFrom22 = false
            break
        }
    }

    return crossForm00 || crossFrom22

}





