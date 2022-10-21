class Coffee{
  constructor(name){
      this.name = name;
  }
  get getName(){
      return this.name;
  }
}
class Addon{
  #dataStore={
      "Milk+Espresso":80,
      "Cream+Espresso":75,
      "Latte+Espresso":100,
      "Milk+Cappuccino":80,
      "Cream+Cappucino":90,
      "Latte+Cappucino":125,
      "Milk+Latte":100,
      "Cream+Latte":125,
      "Latte+Latte":150,
  }
  constructor(name,coffeeType){
      this.name = name;
      this.coffeeType = coffeeType;
  }
  get getCoffeePrice(){
     return this.#dataStore[`${this.name}+${this.coffeeType.getName()}`];
  }
  get getName(){
      return this.name;
  }
}
const CoffeTypes={
  Espresso:"Espresso",
  Cappucino:"Cappucino",
  Latte:"Latte"
}
const Addons={
  Milk:"Milk",
  Cream:"Cream",
  Latte:"Latte"
}
class Menu{
  constructor(coffee,addon){
      this.coffe=new Coffee(coffee);
      this.addon=new Addon(addon,this.addon);
  }

  get getPriceReciept(){
      return `You have ordered ${this.coffe.getName()} with ${this.addon.getName()}\nTotal:${this.addon.getCoffeePrice()}`;
  }
}
const menu = new Menu(CoffeTypes.Espresso,Addons.Cream);
console.log(menu.getPriceReciept());