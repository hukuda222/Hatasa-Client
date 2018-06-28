<template>
  <div>
    <font id="helperCome" v-if="helper" size="10" style="color:red;" @click="goToRoom()">Hero come!</font>
    <div id="roomList">
      <h1 @click="Come(114514)">待機画面</h1>
      <ul>
        <room v-for="room in rooms" :key="room.name" :data="room"></room>
      </ul>
      <hatasa></hatasa>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Room from '@/components/Room'
import Hatasa from '@/components/Stay/hatasa'

export default {
  name: 'stay',
  data () {
    return {
      search: '',
      helper: false,
      hatasaState: 'nai',
      rooms: [{name: 'po1', id: 1}, {name: 'po2', id: 2}, {name: 'po3', id: 3}, {name: 'po4', id: 4}],
      goToId: 0
    }
  },
  methods: {
    po: function () {
      console.log('po')
    },
    get_ajax: function (url, name) {
      return axios.get(url)
      .then((res) => {
        Vue.set(this, name, res.data)
      })
    },
    get: function () {
      return this.get_ajax('http://localhost:3000/api/photo/list', this.search)
    },
    post_ajax: function (url, data) {
      return axios.post(url, data)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    post: function () {
      this.post_ajax('http://localhost:3000/user', {a: 1})
    },
    hatasaChange: function () {
      const hatasa = document.getElementById('hatasa')
      if (this.hatasaState === 'nai') {
        hatasa.src = './static/img/hatasa_y.png'
        this.hatasaState = 'y'
      } else if (this.hatasaState === 'y') {
        this.hatasaState = 'nai'
        hatasa.src = './static/img/hatasa_nai.png'
      }
    },
    goToRoom: function () {
      window.location.href = './Chat?id=' + this.goToId
    },
    Come: function (roomId) {
      let posX = -40
      let t = 0
      this.helper = true
      this.goToId = 114514
      const move = _ => {
        setTimeout(_ => {
          t += 0.1
          posX = -40 + t * t
          document.getElementById('helperCome').style.right = posX + '%'
          if (t < 6.4) move()
        }, 10)
      }
      move()
    }
  }
}
Vue.component('room', Room)
Vue.component('hatasa', Hatasa)
</script>

<style scoped>
textarea {
    resize: none;
}
.rightBottom{
  position:fixed; bottom:0%; right:0%;
  color:black;
  size:5;
}
#hatasa{
  width:200px;
  height:200px;
}
.leftTop{
  position:absolute; top:10%; left:10%;
}
ul {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-start;
  align-items: flex-start;
  flex-basis: auto;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style:none;
  border: 1px solid #fff;
}
#roomList {
  top: 10%;
  left: 10%;
  width: calc(100% - 200px);
}
#helperCome {
  position:fixed;
  top:10%;
  right:-40%;
  color:red;
}

#pi {
  width:100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-start;
  align-items: flex-start;
}
</style>
