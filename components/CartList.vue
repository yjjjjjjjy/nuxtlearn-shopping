<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="(cartItem, index) in $store.state.cartItems" :key="index" class="list-item">
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name">
        <div class="description">
          <p>{{cartItem.name}}</p>
          <span>{{cartItem.price}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {FETCH_CART_ITEMS} from '@/store'

export default {
  async fetch() {
     await this.$store.dispatch(FETCH_CART_ITEMS)
  }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
