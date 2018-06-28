<template>
  <div class="chat">
    <h1>チャット画面</h1>
    <input v-model="text" placeholder="ここにメッセージを入力" @keyup.enter="sendMessage()">
    <message v-for="message in messages" :key="message._id" :data="message"></message>
  </div>
</template>

<script>
import Vue from 'vue'
import Message from '@/components/Chat/Message'
const io = require('socket.io-client')
// const baseUrl = 'https://hatasa-server.ichigojam.trap.show'
const baseUrl = 'http://localhost:3000'
export default {
  name: 'chat',
  data: function () {
    return {
      messages: [],
      socket: null,
      text: ''
    }
  },
  created: function () {
    console.log('po')
    io.po = {}
    this.socket = io.connect(baseUrl + '/debug/chatroom', {query: 'pass=cocoroisgod'})
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.socket.on('chatLog', data => {
      this.messages = data
    })
    this.socket.on('message', data => {
      this.messages.push(data)
      console.log(data)
    })
    this.socket.on('error', console.log)
  },
  methods: {
    sendMessage: function () {
      this.socket.emit('message', {message: this.text, user: {username: 'unti'}}, () => {})
      this.text = ''
    }
  }
}

Vue.component('message', Message)
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
