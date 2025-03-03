<template>
  <div class="cards">
    <div class="card">
      <img :src="srcImg" alt="" class="card__image">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__subtitle">{{ subtitle }}</p>
      <div class="card__price">
        <p class="price">{{ price }}</p>
        <button class="button-price">
          <span class="line1"></span>
          <span class="line2"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    srcImg: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default:''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 312px;
    height: 552px;
    font-family: "Montserrat", serif;
    border: 1px solid #D58C51;
    color: #FFFFFF;
    padding: 43px 21px 36px 21px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      color: #D58C51;
      transition: color 0.3s ease;
    }

    &__title {
      font-weight: 500;
      font-size: 17px;
      margin: 31px 0 13px 0;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 52px;
    }

    &__price {
      font-weight: 500;
      font-size: 17px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .button-price {
    width: 30px;
    height: 30px;
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
    border-radius: 15px;
    background-color: transparent;
    cursor: pointer;
    position: relative;

    &:hover {
      background-color: #D58C51;
      border: 2px solid #D58C51;
      transition: background-color 0.3s ease;
    }

    &:active {
      background-color: #85552e;
    }
  }

  .line1 {
    border: 2px solid #FFFFFF;
    border-radius: 2px;
    display: block;
    height: 1px;
    width: 14px;
    position: absolute;
    top: 12px;
  }

  .line2 {
    border: 2px solid #FFFFFF;
    border-radius: 2px;
    display: block;
    height: 1px;
    width: 14px;
    transform: rotate(90deg);
    position: absolute;
    top: 12px;
  }
</style>
