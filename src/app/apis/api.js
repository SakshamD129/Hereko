"use server";
import items from "../Items"
export async function forFilter(birl) {
    if (birl == "low") {
        const sortedItems = items.sort((a, b) => a.price - b.price);
        return sortedItems;
    }
    else if (birl == "high") {
        const sortedItems = items.sort((a, b) => b.price - a.price);
        return sortedItems;
    }
    else {
        return items;
    }
}
async function forCart(birl) {
    const herda = birl ? items.filter(item => item.name.includes(birl)) : items;
    return herda;
}
export default forCart;