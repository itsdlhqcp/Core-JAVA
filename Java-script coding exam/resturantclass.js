class Restaurant {
    constructor() {
        this.menu = {};  //empty menu first
    }

    // to add new item to it
    addFood(name, cuisine, type, available) {
        this.menu[name] = {
            name: name,
            cuisine: cuisine,
            type: type,
            available: available
        };
    }

    // Method to display the menu
    displayMenu() {
        console.log("Menu:");
        for (const food in this.menu) {
            console.log(`${this.menu[food].name} - Cuisine: ${this.menu[food].cuisine}, Type: ${this.menu[food].type}, Available: ${this.menu[food].available}`);
        }
    }
      

    //Method to update the food Item 

    // updateAvailability(name, available) {
    //     if (this.menu[name]) {
    //         this.menu[name].available ;
    //     } else {
    //         console.log(`${name} not found in the menu.`);
    //     }
    // }
    // Method to delete food item 
    deleteFood(name) {
        if (this.menu[name]) {
            delete this.menu[name];
            console.log(`${name} has been removed from the menu.`);
        } else {
            console.log(`${name} not found in the menu.`);
        }
    }
    
}

const myRestaurant = new Restaurant();

// Q2: Method to add new item to the resturant 
// Adding foods to the menu
myRestaurant.addFood("Chicken Biryani", "South Asian", "Non-Veg", true);
myRestaurant.addFood("Vegetable Curry", "Indian", "Veg", true);
myRestaurant.addFood("Cheese Pizza", "Italian", "Veg", false);
myRestaurant.addFood("Mutton Biriyani", "Italian", "Non-Veg", true);

// Q1: Displaying the menu METHOD
myRestaurant.displayMenu();

// Q:3: create a method to update available key of existing food details in menu 
myRestaurant.updateAvailability("Cheese Pizza", true);
console.log("-----------------------------------------------------------")
// Q:4:create a method to delete a food from the menu 
myRestaurant.deleteFood("Vegetable Curry");
console.log("--------------------------------------------------------------")
// Q:5:Method to update availability
myRestaurant.displayMenu();









