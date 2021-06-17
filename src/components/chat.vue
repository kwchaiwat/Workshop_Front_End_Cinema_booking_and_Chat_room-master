<template>
  <div >
    
    <div class="box box--container" >  
     <span v-if="ustatus!=undefined"> {{ ustatus.toUpperCase() }} </span>
      <!--class="outsidebox"    ="{always: false, smooth: true, scrollonremoved:true}" -->
      <div class="box box--chat" style="min-height: 544px;" v-chat-scroll="{ smooth: true, scrollonremoved:true}">
        <ul id="chat-history" style="backgroud:red" v-for="(msg, index) in messages" :key="index">
          
          <a v-if="ustatus=='admin'">
         <span  :class="user==msg.user ? 'message--me admin':'message'">
            <div v-if="user==msg.user">
              {{ msg.message }} : <B>{{msg.user}}</B>
            </div>
            <div v-if="user!=msg.user">
              <B>{{msg.user}}</B> : {{ msg.message }}
            </div>
          </span>
          </a>
         
          <a v-if="ustatus==undefined && msg.ustatus==undefined">
         <span  :class="user==msg.user ? 'message--me':'message'">
            <div v-if="user==msg.user">
              {{ msg.message }} : <B>{{msg.user}}</B>
            </div>
            <div v-if="user!=msg.user">
              <B>{{msg.user}}</B> : {{ msg.message }}
            </div>
          </span>
          </a>

          <a v-if="ustatus==undefined && msg.ustatus=='admin'">
         <span  :class="user==msg.user ? 'message--me':'message admin'">
            <div v-if="user==msg.user">
              {{ msg.message }} : <B>{{msg.user}}</B>
            </div>
            <div v-if="user!=msg.user">
              <B>{{msg.user}}</B> : {{ msg.message }}
            </div>
          </span>
          </a>
          
        </ul>
      </div>
      <v-form id="chat-form" @submit.prevent="sendMessage" >
        <input v-focus type="text" id="chat-message" v-model="message" placeholder="ลองพิมพ์ข้อความดูสิ..." class="box" autocomplete="off">
      </v-form>
  
      

    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
const CONNECT = require('@/config')

export default {
  data () {
    return {
      user: this.user,
      message: '',
      messages: [],
      socket: io(`${CONNECT.API}`),
      ustatus : ''
    }
  },
  methods: {
     sendMessage: function (e) {
      e.preventDefault()
      if(!(this.message == ''))
      {
        this.socket.emit('SEND_MESSAGE', {
        user: this.user,
        message: this.message,
        ustatus: this.ustatus
      })
      }
      //  ลบตัวอักษรตรงช่องแชท
      this.message = ''
    },
    getUser (user) {
      this.user = user.firstname
      this.ustatus = user.status
      console.log(this.ustatus)
      return user
    },
    	scrollToEnd() {
				var container = document.querySelector(".box");
				var scrollHeight = container.scrollHeight;
				container.scrollTop = scrollHeight;
			}
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
      // this.message.scrollTop(200)
    });
  },
  created () {
    this.getUser(this.$cookies.get('user'))
  }
}
</script>