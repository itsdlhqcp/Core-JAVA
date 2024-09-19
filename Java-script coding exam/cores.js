class Restaurant {
    constructor(){
        this.menu = {}
    }

    addFood(name, cuisine,type,available){
        this.menu[name] = {
            name : name,
            cuisine: cuisine,
            type: type,
            available: available
        }
    }

    displayMenu(){
        console.log("Menu:");
        for(const food in this.menu){
            console.log(`${this.menu[food].name} - Cuisine: ${this.menu[food].cuisine}, Type: ${this.menu[food].type}, Available: ${this.menu[food].available}`);
        }
    }

    deleteFood(name){
        if(this.menu[name]){
            delete this.menu[name];
            console.log(`${name} has been removed from the menu.`);
        }else{
            console.log(`${name} not found in the menu.`);
        }
    }


}

const myRestaurant = new Restaurant();
myRestaurant.addFood("Chiken Biriyani","South Asian","Non -veg",true)
myRestaurant.addFood("Vegetable curry","Indian","Veg","true")
myRestaurant.addFood("Cheese Pizza","Italian","Veg",false)

myRestaurant.displayMenu();
myRestaurant.updateAvailability("Cheese",true);
myRestaurant.deleteFood("Vegetalble Curry")
myRestaurant.displayMenu();