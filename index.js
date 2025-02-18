let grid = document.getElementById("root")
let timer;

for (let i = 0; i < 10000; i++) {
    let item = document.createElement("div")
    item.id = 'item-' + i
    item.addEventListener("click", () => {
        if (item.classList.contains("item-selected")) {
            item.classList.remove("item-selected")
        } else {
            item.classList.add("item-selected")
        }
    })
    item.classList.add("item")
    grid.appendChild(item)
}

let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', () => {
        if (isMouseDown) {
            if (item.classList.contains('item-selected')) {
                item.classList.remove('item-selected');
            } else {
                item.classList.add('item-selected');
            }
        }
    });
});
