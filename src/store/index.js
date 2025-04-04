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
    AllPriceProductsInBasket: 0,
    BasketProducts: [],
    CurrentProduct: null
  },
  getters: {
    getProducts: state => state.Products,
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPriceProductsInBasket: state => state.AllPriceProductsInBasket,
    getBasketProducts: state => state.BasketProducts,
    getCurrentProduct: state => state.CurrentProduct
  },
  mutations: {
    setAddProductInBasket (state, val) {
      state.BasketProducts.push(val)
      this.commit('setUpdateCounts')
      this.commit('setUpdateInfoUserBasket')
    },
    setDeleteProductInBasket (state, val) {
      state.BasketProducts = state.BasketProducts.filter((item) => item.idx !== val)
      this.commit('setUpdateCounts')
      this.commit('setUpdateInfoUserBasket')
    },
    setCurrentProduct (state, val) {
      state.Products.forEach((item) => {
        if (item.id === +val) {
          state.CurrentProduct = item
        }
      })
    },
    setUpdateCounts (state) {
      state.CountProductsInBasket = state.BasketProducts.length
      state.AllPriceProductsInBasket = state.BasketProducts.reduce((sum, current) => {
        return sum + current.price
      }, 0)
    },
    setClearBasket (state) {
      state.BasketProducts = []
      this.commit('setUpdateCounts')
      this.commit('setUpdateInfoUserBasket')
    },
    setDataDistribution (state) {
      state.BasketProducts = JSON.parse(localStorage.currentUser).basket
      this.commit('setUpdateCounts')
      this.commit('setUpdateInfoUserBasket')
    },
    setUpdateInfoUserBasket (state) {
      const infoUser = JSON.parse(localStorage.currentUser)
      const users = JSON.parse(localStorage.userList)

      const user = users.find((item) => item.login === infoUser.currentUser)

      if (user) {
        user.basket = state.BasketProducts
        infoUser.basket = state.BasketProducts
      }

      localStorage.userList = JSON.stringify(users)
      localStorage.currentUser = JSON.stringify(infoUser)
    }
  }
})
