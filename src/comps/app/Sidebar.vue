<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">

    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-gray pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Home', url: '/', exact: true},
      {title: 'Заказы', url: '/orders'},
      {title: 'Заказчики', url: '/customers'},
      {title: 'Товары', url: '/items'},
      {title: 'Категории', url: '/categories'}
    ]
  })
}
</script>



