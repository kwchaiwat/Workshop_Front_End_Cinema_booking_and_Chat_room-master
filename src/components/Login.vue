<template>
<v-app style="background-image: url(http://image.free.in.th/v/2013/ip/190620034355.png)">
    <br><br><br><br><br><br><br><br>
   <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="600"
        height="350"
        color="#F57F17">
      <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex>
           <center>
            <h1 style="color:#000000">Login</h1><br>
         </center>
          <v-flex xs8 offset-xs2>

          <h3 style="color:#000000">Username:</h3><v-text-field @keyup.enter="signin" v-model="login.username" placeholder="Username" solo></v-text-field>

          <h3 style="color:#000000">Password:</h3><v-text-field @keyup.enter="signin" v-model="login.password" placeholder="Password" type="password" solo></v-text-field>
          </v-flex>
           <v-flex xs12 offset-xs4>
          <v-btn color="success" @click="signin()">Login</v-btn>
          <v-btn color="success" @click="register()">Register</v-btn>
           </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
 
     
      </v-card>
    </v-hover>
</v-app>
</template>


<script>
import { EventBus } from '@/EventBus'
import { sync } from 'vuex-pathify'
import axios from 'axios'
import Swal from 'sweetalert2'
// import { connect } from '@/config'
const CONNECT = require('@/config')

export default {
  data () {
    return {
      login: {},
      token: '',
      userData: ''
    }
  },
  methods: {
    async signin () {
      if (this.login.username && this.login.password) {
        try {
          var { data } = await this.axios.post(
            `${CONNECT.API}/api/login`,
            {
              username: this.login.username,
              password: this.login.password
            }
          )
          this.token = data.token
          // console.log('hjk'+ this.token)
          if (this.token != '0') {
            this.getToken()
          } else {
            Swal.fire({
              position: 'center',
              type: 'error',
              title: 'กรอกข้อมูลไม่ถูกต้อง !',
              showConfirmButton: false,
              timer: 3500
            })
          }
        } catch (error) {
          console.dir(error)
        }
      } else {
        alert('กรุณากรอก Username และ Password')
      }
    },
    async getToken () {
      try {
        const configToken = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }
        const { data } = await this.axios.get(
          `${CONNECT.API}/api/me`,
          configToken
        )
        this.userData = data
        this.$cookies.set('user', this.userData.payload)
        this.isLogin(this.$cookies.get('user'))
      } catch (error) {
        console.dir(error)
      }
    },
    register () {
      this.$router.push('/register')
    },
    isLogin (obj) {
      if (this.token != 0) {
        window.location.href = '/home'
      } else {
        alert('login fail')
      }
    }
  },
  created () {
    // this.$cookies.remove('test')
    // this.$cookies.set('test', 'OK')
    // alert(this.$cookies.get('test'))
  }
}
</script>