import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from './../router';
import {uuid} from "vue-uuid";
Vue.use(Vuex)
Vue.use(uuid);
export default new Vuex.Store({
  state: {
    apiUrl:'https://my-json-server.typicode.com/grosseRiese/mockjson/coffeemenu',
    menu:[],
    cart:[],
    confirmed:Object,
  },
  mutations: {
    updateMenuListItems(state,data){
      state.menu = data;
    },
    addToCart(state, {product,quantity}){
      let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
      });
      if(productInCart){
        productInCart.quantity += quantity;
        return;
      }
      state.cart.push({product,quantity})
    },
    orderConfirmed(state, confirm){
      state.confirmed = confirm.data;
    },
    emptyCart(state){
      state.cart = [];
      // Route to confirmation
      router.push('/status')
    },
    removeItemFromCart(state,product){
      let index = state.cart.indexOf(product);
      state.cart.splice(index, 1);
    },
  },
  actions: {
    /*** GET coffe-menu-api**
     * ********************************** */
    async getCoffeeList(ctx) {
      try{
        await axios.get(`${ctx.state.apiUrl}`)
          .then(response =>response.data)
          .then(data =>{
            console.log('Log coffee-data : ',data);
            ctx.commit('updateMenuListItems', data);
        });
      } catch(err) {
        console.error(err)
      }
    },
    /*************************************** */
    /**
     * POST coffe-menu-api**
     * ********************************** */

    async sendOrder(ctx){
      try {
        let data = await axios.post(`${ctx.state.apiUrl}`, {
          items: ctx.state.cart,
          orderNr: uuid.v1(),
          eta: (5+Math.floor(Math.random() * 18)),
        });

        console.log('Sending data: ', data.data);
        // Show order has been successful
        ctx.commit('orderConfirmed', data)
        
        // Empty cart
        ctx.commit('emptyCart');

      }catch (err) {
        console.log(`Somthing went wrong: ${err}`);
      }
    },
  },
  getters:{
    menu:(state) =>{
      return state.menu;
    },
    cartItemCount:(state) => {
      console.log(state.cart.length)
      return state.cart.length;
    },
    cartTotalPrice : (state) =>{
      let total = 0;
      state.cart.forEach(item => {
          total += item.product.price * item.quantity;
      })
      return total;
    },
    cartTotalQuantity : (state) =>{
      let itemQuantity = 0;
      state.cart.forEach(item => {
        itemQuantity += item.quantity;
      })
      return itemQuantity;
    },

  },
  modules: {
  }
})
