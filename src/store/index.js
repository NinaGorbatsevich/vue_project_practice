import { createStore } from 'vuex'

export default createStore({
  state: {
    Products: [
      {
        id: 0,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 1,
        img: require('../assets/image/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        subtitle: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 2,
        img: require('../assets/image/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 1820
      },
      {
        id: 3,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 4,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 5,
        img: require('../assets/image/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        subtitle: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 6,
        img: require('../assets/image/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 1820
      },
      {
        id: 7,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      }
    ],

    CountProductsInBasket: 0,
    AllPricePoductsInBasket: 0,
    BasketProducts: []
  },
  getters: {
    getProducts: state => state.Products,
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPricePoductsInBasket: state => state.AllPricePoductsInBasket,
    getBasketProducts: state => state.BasketProducts
  },
  mutations: {
    setAddProductInBasket: (state, val) => { /* val это значение которое мы ищем, конкретно здесь это id */
      state.BasketProducts.push(val)
      state.CountProductsInBasket = state.BasketProducts.length
      state.AllPricePoductsInBasket = state.BasketProducts.reduce((sum, current) => {
        return sum + current.price
      }, 0) /* к нулю будет прибавляться цена */
    },
    setDeleteProductInBasket: (state, val) => {
      state.BasketProducts = state.BasketProducts.filter((item) => item.idx !== val)
      state.CountProductsInBasket = state.BasketProducts.length
      state.AllPricePoductsInBasket = state.BasketProducts.reduce((sum, current) => {
        return sum + current.price
      }, 0)
    }
  }
})
