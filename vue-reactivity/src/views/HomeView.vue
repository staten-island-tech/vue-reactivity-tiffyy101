<template> 
<h1>Best Bagel Shop</h1>
<div class="home">       
    <div class="first">
<Card
v-for="foods in menu" 
:key="foods.name"
:name="foods.name"
:price="foods.price"
:img="foods.img"/>
</div>
</div>

<div class="cart">
    <div class="second">
    <h1>Your Cart</h1>
      <Cart
        v-for="food in store.cart"
        :key="food.name"
        :name="food.name"
        :price="food.price"
      />
</div>
</div>
</template>
 
<script>
import { store } from "../components/store";
import Card from "../components/CardList.vue"
import Cart from "../components/ShoppingCart.vue"
export default {
  name: "Home",
  components: {
    Card, Cart, 
  },
  data() {
    return{
        store,
        carts: [],
      menu: [
        {
      name: "OG Bagel",
        info: "A simple yet delicious bagel, best paired with our homade cream cheese and jam",
        price: 2,
        bestSeller: "no",
        drink: "no",
        jam: "no",
        img: "https://www.einsteinbros.com/wp-content/uploads/2019/04/EBB-Bagel-Plain-800x700-1.png"
    },
    {
        name: "Sesame Bagel",
        info: "A twist from our OG bagel, generously topped with roasted sesame seeds",
        price: 3,
        bestSeller: "yes",
        drink: "no",
        jam: "no",
        img: "https://www.einsteinbros.com/wp-content/uploads/2019/04/EBB-Bagel-SesameSeed-800x700-1.png"
    },
    {
        name: "Cinnamon Raisan Bagel",
        info: "A sweet bagel with the crispiness of raisins and the subtle flavor of cinnamon",
        price: 3,
        bestSeller: "no",
        drink: "no",
        jam: "no",
        img: "https://cdn.shopify.com/s/files/1/0549/1117/2815/products/bagelista_cinnamonraisin_2_900x.jpg?v=1654008008"
    },
    {
        name: "Everything Bagel",
        info: "Savory bagels topped with a mixture of everything bagel seasoning, including garlic powder, onion powder, poppy seeds, sesame seeds, and sea salt",
        price: 3,
        bestSeller: "yes",
        drink: "no",
        jam: "no",
        img: "https://thebusybaker.ca/wp-content/uploads/2020/05/homemade-everything-bagels-fb-ig-7-scaled.jpg"
    },
    {
        name: "Jalapeno Cheddar Bagel",
        info: "Includes cheese baked inside as well on top of the bagel, paired along with spicy jalapenos",
        price: 5,
        bestSeller: "no",
        drink: "no",
        jam: "no",
        img: "https://thumbs.dreamstime.com/b/cheddar-jalapeno-bagel-delicious-cheese-rustic-wood-table-top-170935927.jpg"
    },
    {
        name: "Smoked Salmon Bagel",
        info: "Homemade herbed cream cheese against smoky, buttery salmon, herbaceous dill against briny capers, in a fluffy, perfectly toasted bagel",
        price: 12,
        bestSeller: "yes",
        drink: "no",
        jam: "no",
        img: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/smoked-salmon-bagel-su.jpg"
    },
    {
        name: "Bacon Egg & Cheese Bagel",
        info: "Crispy bacon pair with the fluffiest fried egg and slices of delicious gooey American cheese",  
        price: 6,
        bestSeller: "yes",
        drink: "no",
        jam: "no",
        img: "https://www.oliviascuisine.com/wp-content/uploads/2016/07/bacon-egg-and-cheese-1-735x1103.jpg"  
    },
    {
       name: "Matcha Expresso Fusion", 
       info: "Whisked matcha mixed with hot expresso",
       price: 8,
       bestSeller: "no",
       drink: "yes",
       jam: "no",
       img: "https://www.siftandsimmer.com/wp-content/uploads/2021/03/matcha-espresso-fusion2-683x1024.jpg"
    },
    {
        name: "Dalgona Coffee",
        info: "fluffy whipped coffee on top of sweet milk",
        price: 3,
        bestSeller: "yes",
        drink: "yes",
        jam: "no",
        img: "https://www.acoupleofsips.com/wp-content/uploads/2020/05/caramel-dalgona-coffee.jpg"
    },
    {
        name: "Strawberry Jam",
        info: "Homemade jam made from handpicked strawberries with the perfect balance of sweetness",
        price: 10,
        bestSeller: "yes",
        drink: "no",
        jam: "yes",
        img: "https://www.simplyhappyfoodie.com/wp-content/uploads/2019/05/instant-pot-strawberry-jam-2b.jpg"
    },
    {
        name: "Orange Jam",
        info: "Homemade orange jam with a hint of lemon",
        price: 10,
        bestSeller: "no",
        drink: "no",
        jam: "yes",
        img: "https://www.abakershouse.com/wp-content/uploads/2018/02/orange-lemon-marmalade-in-a-jar.jpg"
    },
    {
        name: "Apple Jam",
        info: "Fresh-picked crab apples, made into a sweet and delicious jam",
        price: 10,
        bestSeller: "no",
        drink: "no",
        jam: "yes",
        img: "https://crockpotladies.com/wp-content/uploads/2011/12/Crock-Pot-Apple-Jelly-05.jpg"
    }]
    }
  }};
</script>
<style>
html,
body,
* {
  text-align: center;
  color: rgb(70, 48, 18);
  background-color: antiquewhite;
}

.home {
  display: flex;
    width: 90vw;
}

.first {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
