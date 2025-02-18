
const change = (elem) => {
    if (elem.classList.contains('item-selected')) {
        elem.classList.remove('item-selected')
    } else {
        elem.classList.add('item-selected')
    }
}

const generate = () => {
    let start = new Date()
    let items = document.querySelectorAll("[id^='item']")
    toChange = []
    items.forEach(item => {
        let arround = getArroundItems(item.id).filter(itemId => document.getElementById('item-' + itemId).classList.contains("item-selected"))

        if (item.classList.contains("item-selected")) {
            if (arround.length < 2 || arround.length > 3) {
                toChange.push(item)
            }
        } else {
            if (arround.length == 3) {
                toChange.push(item)
            }
        }
    })
    toChange.forEach(change)
    console.log(new Date() - start)
}

const playAction = (speed) => {
    document.getElementById("stop").style.display = "block"
    document.getElementById("play").style.display = "none"
    document.getElementById("play-2").style.display = "none"
    timer = setInterval(generate, speed)
}

const stopAction = () => {
    clearInterval(timer)
    document.getElementById("stop").style.display = "none"
    document.getElementById("play").style.display = "block"
    document.getElementById("play-2").style.display = "block"
}

const resetAction = () => {
    let items = document.querySelectorAll("[id^='item']")
    items.forEach(item => {
        item.classList.remove("item-selected")
    })
}

const randomAction = () => {
    let items = document.querySelectorAll("[id^='item']")
    items.forEach(item => {
        if (Math.random() > 0.7) {
            item.classList.add("item-selected")
        } else {
            item.classList.remove("item-selected")
        }
    })
}

const getArroundItems = (strId) => {
    let id = parseInt(strId.split('-')[1])
    let items = []
    items.push(id - 100)
    items.push(id + 100)
    items.push(id - 1)
    items.push(id + 1)
    items.push(id - 100 - 1)
    items.push(id + 100 - 1)
    items.push(id + 100 + 1)
    items.push(id - 100 + 1)
    return items.filter((item) => item > 0 && item < 10000)
}