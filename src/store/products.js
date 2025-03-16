import { createStore } from 'vuex'

export default createStore({
  state: {
    Products: [
      {
        id: 0,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 1,
        img: require('../assets/image/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 2,
        img: require('../assets/image/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 1820
      },
      {
        id: 3,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 4,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 5,
        img: require('../assets/image/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 6,
        img: require('../assets/image/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 1820
      },
      {
        id: 7,
        img: require('../assets/image/1.png'),
        title: 'Устрицы по Рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      }
    ]
  },
  getters: {
    getProducts: state => state.Products
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
