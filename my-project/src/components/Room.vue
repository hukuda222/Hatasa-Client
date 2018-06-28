<template>
  <li class="roomFrame">
    <img src="./../assets/logo.png" class="backImage" @click="goToRoom(data.id)">
    <font class="roomInfo" size="7">{{data.id}}</font>
  </li>
</template>

<script>
export default {
  name: 'room',
  props: ['data'],
  methods: {
    goToRoom: function (id) {
      console.log(id)
      this.$router.push('/room/' + id)
    }
  }
}
</script>

<style scoped>
textarea {
    resize: none;
}
.roomFrame {
  display: flex;
  margin: 100px;
  width: 100px;
  height: 100px;
}
.roomInfo {
  color: red;
  position: relative;
}
.backImage {
  position: absolute;
}
</style>
