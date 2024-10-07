function shoppingList(items) {
    let list = "Список покупок:\n"
    for (const item of items){
        list += `-${item}\n`;
    }
    return list.trim();
}

const items = ["Молоко", "Хліб", "Масло", "Ковбаса"]
console.log(shoppingList(items));
