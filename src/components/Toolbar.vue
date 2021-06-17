<template>
  <div>
    <v-toolbar style="background-color:#FF5722">
      <v-avatar>
        <img src="https://www.img.in.th/images/c4c654f090741726301f1301d471a73e.png">
      </v-avatar>
      <v-toolbar-title class="headline text-uppercase">
        <div class="font-weight-light.font-italic">
          <a flat href="/home"> <span class="display-1 font-weight-light" style="color:#ffffff">Mfive</span>
          <span class="display-1 font-weight-light" style="color:#ffffff">Movie</span> </a>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat href="/home">
        <span class=" subheading mr-2" style="color:#ffffff">หน้าหลัก</span>
      </v-btn>

      <v-btn flat href="/movie">
        <span class=" subheading mr-2" style="color:#ffffff">ภาพยนตร์</span>
      </v-btn>

      <v-btn flat href='../promotion'>
        <span class="subheading mr-2" style="color:#ffffff">โปรโมชัน</span>
      </v-btn>

      <v-btn flat href='../news'>
        <span class="subheading mr-2" style="color:#ffffff">ข่าวสารและกิจกรรม</span>
      </v-btn>
<!--  scrollable="false"    v-model="dialog" -->
      <v-dialog  width="100%">
        <v-btn color="success" dark slot="activator">LINE@admin</v-btn>
        <iframe width="100%"    height="666px"   :src="ipchat" scrolling="no"></iframe>
      </v-dialog>


      <div class="text-xs-center">
    
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        
        <v-btn
          color="info"
          dark 
          v-on="on"
        >
            <v-icon>account_circle</v-icon> &nbsp;
        {{user.username}}
        </v-btn>
      </template>
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-title @click="ticket()">My ticket</v-list-tile-title>
           </v-list-tile>
              <v-list-tile @click="">
              <v-list-tile-title  @click="logout()">Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>

    

    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>
<script>
import CONNECT from '../config.js'

export default {
  data () {
    return {
      ipchat: `${CONNECT.API2}/chat`,
      user: this.$cookies.get('user')
        
    }
  },
  methods: {
    logout () {
      this.$cookies.remove('user')
      window.location.href = '/'
    },
      ticket () {
      
      window.location.href = '../ticket'
    },

    showing () {
      this.$nextTick(this.$refs.txt.focus)
    }
  },
  watch: {
    dialog (val) {
      if (val)
        this.$refs.message.showing();
    }
  },
    created () {
    this.checkuser(this.$cookies.get('user'))
    
  }
}
</script>

