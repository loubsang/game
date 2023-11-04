let gameArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let currentPlayer = 'cross'
let isStart = true
let isLock = false





const clickable = document.querySelectorAll('.box_clickable');

clickable.forEach(
    (item) => item.addEventListener('click', function () {
        let isWin = checkIsWin(item)
        if (!isLock) {
            if (isWin && isClickable(item)) {
                isLock = true
                heighLightWinner()
            }
            if (isClickable(item)) {
                tipIconChange()
            }
            changeStyle(item)
        }
    })
)


function isClickable(item) {

    let itemClassList = item.classList
    for (let i = 0; i < itemClassList.length; i++) {
        if (itemClassList[i].indexOf('clickable') > 0)
            return true
    }

    return false
}



function checkIsWin(item) {
    let rowAndColum = getRowAndColum(item)
    setArray(rowAndColum)
    return crosschecking() || checkColum(rowAndColum.colum) || checkRow(rowAndColum.row)
}


function heighLightWinner() {
    for (let i = 0; i < 3; i++) {
        for (let a = 0; a < 3; a++) {
            if (gameArray[i][a] == currentPlayer)
                document.getElementById('' + i + '-' + a).classList.add('win_tag')
        }
    }
}


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



function tipIconChange() {
    let crossTip = document.getElementById('tip_cross')
    crossTip.classList.toggle('tip_icon_disappear')
}



