// Write your code here
class breakFast {
    constructor(food,drink){
        this.food = food
        this.drink = drink
    }
 
}
const today = new breakFast('bakon', 'ufresh')
console.log(today)

class lunch {
    constructor(salad,soup,drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}
const leo = new lunch('kabej','salmon soup', 'mirinda')
console.log(leo)

class dinner{
    #dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.dessert = dessert
    }
    
}

 let usiku = new dinner('jaba','mavela','coke','codeine')
console.log(usiku)