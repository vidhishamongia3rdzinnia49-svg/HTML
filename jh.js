
const favouriteColors = {
    first: "BLUE",
    second: "GREEN",
    third: "RED"
};

const shoppinglist = ["MILK", "BREAD", "EGGS", "CHEESE"];

console.log("MY FAVOURITE COLOR IS: " + favouriteColors.first);

console.log("The first item on list is: " + shoppinglist[0]);
console.log("The second item on list is: " + shoppinglist[1]);
console.log("The third item on list is: " + shoppinglist[2]);
console.log("The fourth item on list is: " + shoppinglist[3]);

const remove = shoppinglist.pop();
console.log("I just removed: " + remove);

console.log("The list now has " + shoppinglist.length + " items.");

const listAsString = shoppinglist.join("+");
console.log("The shopping list as one: " + listAsString);
