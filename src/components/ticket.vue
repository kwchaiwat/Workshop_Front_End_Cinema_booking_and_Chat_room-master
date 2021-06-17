<template  >

  <v-app style="background-color: #424242">
    <v-layout>
      <v-flex xs12 sm12>

        <!-- พารากราฟ1 -->

        <bb v-for=" i in ticket" :key="i">

          <v-card class="elevation-2 white darken-3 ">
            <v-card-text>
              <v-container border="5">
                <v-layout>
                  <v-flex xs12 sm8 offset-sm2>
                    <v-card>

                      <v-layout>
                        <v-flex xs4 offset-xs2>

                          <v-img class="white--text" height="300px" width="200px" style="padding-left:100px" :src="checkpicpath(i.movieid)">

                          </v-img>
                        </v-flex>
                        <v-card-title>
                          <v-flex xs12>
                            <div>
                              <span class="headline">ชื่อเรื่อง : {{checkmoviename(i.movieid)}} </span> <br>
                              <span class="grey--text">{{i.date}} : {{i.round}} </span><br>
                              <span>โรงภาพยนตร์ 1</span><br>
                              <span>ที่นั่งที่เลือก {{i.seat[0]}} | ราคา 150 บาท</span>

                              <br><br>
                              <qr-code :text="'ไอดีหนัง: '+i.movieid+' รอบ: '+i.round+' ที่นั่ง: '+i.seat" size="100" color="black" bg-color="white" error-level="L">
                              </qr-code>

                            </div>
                          </v-flex>
                        </v-card-title>

                      </v-layout>

                    </v-card>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>

        </bb>

      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
const CONNECT = require('@/config')
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
  data () {
    return {
      ticket: [],
      user: [],
      moviename: '',
      picpath: ''
    }
  },
  methods: {
    checkmoviename (movieid) {
      if (movieid == 'M1') {
        return 'สไปเดอร์แมน ฟาร์ ฟรอม โฮม'
      } else if (movieid == 'M2') {
        return 'ที่ตรงนั้น มีฉันหรือเปล่า'
      }
      else if (movieid == 'M3') {
        return 'แอนนาเบลล์ ตุ๊กตาผีกลับบ้าน'
      }
      else if (movieid == 'M4') {
        return 'ทอย สตอรี่ 4'
      }
      else if (movieid == 'M5') {
        return 'X - เม็น ดาร์ก ฟีนิกซ์'
      }
      else if (movieid == 'M6') {
        return 'อะลาดิน'
      }
    },
    checkpicpath (movieid) {
      if (movieid == 'M1') {
        return 'https://lh3.googleusercontent.com/G47G-0Zd9MAgdq1yb4rYvY9pNxfFNfSG4i_PAREi5ouDIW6o1h6vM3uQ6qcbLUhjkLCLCf3dfX2GG9QEvhLRig=w260'
      } else if (movieid == 'M2') {
        return 'https://lh3.googleusercontent.com/86Cl7Ubx2remvlsNDiDmd2AKdZSoEPBfil_SyZAdWLo0jkmgaWJJgZx2IDkNTyiAgY0Rx5fGkl5b6VKrq63T=w260'
      }
      else if (movieid == 'M3') {
        return 'https://lh3.googleusercontent.com/diwC0VldM1Ah33-JZMZ2mSN9LvkSS34LUt3rZrFP4l-C2mVq2cjxZWNvMo1ESsRf6nt9ZgRY4-PJ5-b4qQc=w260'
      }
      else if (movieid == 'M4') {
        return 'https://lh3.googleusercontent.com/g-0QQLYKIDbcQSvhLG5liVcymdOWL0-IIHqUVmWv9YtpcpBpwhtm-QqBxtz9eV6V88Hg-V3hi-pUR1FvmD0=w260'
      }
      else if (movieid == 'M5') {
        return 'https://f.ptcdn.info/349/064/000/pso5e1wclptJyjAh7Eq-o.jpg'
      }
      else if (movieid == 'M6') {
        return 'https://lh3.googleusercontent.com/GnW0vZCW1EbUgrznFqbcJbQ7GZP6I9JjcKPiBT6OG4BJ6lrX_keyXMC_Q2kK1hk7Vxwq-jMZoX951uc5o2k=w260'
      }
    },
    checkuser (user) {
      if (user == null) {
        window.location.href = '/'
      } else {
        this.user = this.$cookies.get('user')
        // console.log(this.user.username)
      }
    },
    async gettickket () {
      try {
        var { data } = await this.axios.post(
          `${CONNECT.API}/tickets`,
          {
            userid: this.user.username
          }
        )
        console.log(data)
        this.ticket = data
        // console.log(this.ticket.seat)
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.checkuser(this.$cookies.get('user'))
    this.gettickket()
    this.getmovie()
  }
}
</script>


