<template  >

  <v-app style="background-color: #424242">
    <v-layout>
      <v-flex xs12 sm12>

        <div>

          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-divider></v-divider>
             <v-stepper-step :complete="e1 > 1" step="1">เลือกรอบฉาย</v-stepper-step>
             

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">เลือกที่นั่ง</v-stepper-step>
<v-divider></v-divider>
            </v-stepper-header>
          </v-stepper>

        </div>

        <!-- พารากราฟ1 -->

        <v-card class="elevation-2 grey darken-3 ">
          <v-card-text>
            <v-container border="5">
              <v-layout>
                <v-flex xs5>
                  <v-img class="white--text" height="400px" width="300px" :src="movie.picpath">
                  </v-img>

                </v-flex>
                <v-flex xs12>
                  <v-card-title>
                    <div><br><br><br>

                      <a href='../news2'>
                        <h2 style="color:#ffffff">{{movie.moviename}}</h2>
                      </a>

                      <br>
                      <h3 style="color:#ffffff">หมวดหมู่ {{movie.group}} </h3>

                      <br>
                      <h3 style="color:#ffffff">เวลา {{movie.time}} นาที</h3>
                      <br><br>
                      <div class="text-xs-center">

                        <v-dialog v-model="dialog"   width="830">
                          <template v-slot:activator="{ on }">

                            <v-flex xs1>
                              <v-btn color="orange darken-4"  v-on="on" style="padding-right=150px">
                                รายละเอียดภาพยนตร์
                              </v-btn>
                            </v-flex>
                          </template>
                           
                          <v-card style="background-color:#424242" height="950px"   width="830">
                            <v-card-title class="headline deep-orange " primary-title>
                              &nbsp; &nbsp; &nbsp; <span> {{movie.moviename}}</span>
                            </v-card-title>
                            <br>
                           <v-hover>
                          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`"
                            class="mx-auto"
                            width="750" 
                            height="800"
                            color="#ffffff"><br>
                            <v-card-text >
                              <!-- style="background-color:#424242" -->
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span style="color:#000000"> {{movie.desc}} </span>
                                <br> <br>
                              <div>
                              <center> 
                                
                             <h2> TRAILER  {{movie.moviename}}</h2>   <br>
                                 <iframe width="700" height="400" :src="movie.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </center>
                              </div>
                                  </v-card-text> 
                          </v-card>
                        </v-hover> <br>

                        
                           

                            
                          </v-card>
                        </v-dialog>
                      </div>
                    </div>

                  </v-card-title>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>

        <v-container style="background-color:#EFC63E" height="900" width="1300">
          <v-card-title class="deep-orange">
            <v-icon dark size="42" class="mr-7">
              mdi-magnify
            </v-icon>
            <h2 class="title --text font-weight-right">14 มิถุนายน 2019</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-container fluid>
                <v-flex xs5>
                  <v-layout justify-space-around>
                    <bb v-for=" i in movie.rounds" :key="i">
                      <v-flex>
                        <v-layout style="margin-right:10px;  ">
                          <v-btn  style="width:110px; height:40px; " :href="`/seat/${urlpath}/${i}`" color="green accent-4; grid-list-{xs5 through x1} ">{{ i }}</v-btn>
                        </v-layout>
                      </v-flex>
                    </bb>
                  </v-layout>
                </v-flex>
              </v-container>

            </v-layout>
          </v-container>

        </v-container>

        <v-card-actions class="grey darken-3 justify-center" style="color:#ffffff">
          &copy;2019 —
          <strong style="color:#ffffff">MFive</strong>
        </v-card-actions>

      </v-flex>

    </v-layout>
  </v-app>
</template>

<script>
import { EventBus } from '@/EventBus'
const CONNECT = require('@/config')
export default {

  data () {
    return {
      x: [1, 2, 3, 4],
      e1: 0,
      movie: [],
      urlpath: '',
      cc: '',
      e1: 0
    }
  },
  methods: {
    checkuser (user) {
      // if (true) {
      if (user == null) {
        window.location.href = '/'
      }
    },
    cathMID (cathmovieid) {
      this.cc = cathmovieid
      console.log(cathmovieid)
      console.log('bos')
    },
    async getSeat () {
      try {
        var { data } = await this.axios.post(
          `${CONNECT.API}/movie`,
          {
            movieid: this.urlpath
          }
        )
        console.log(data)
        // แสดงข้อมูลในdata
        this.movie = data
        // console.log(this.movie.ro)
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.checkuser(this.$cookies.get('user'))
    this.urlpath = this.$route.path.split('/')
    this.urlpath = this.urlpath[this.urlpath.length - 1]
  },
  mounted () {

    console.log(this.urlpath)

    EventBus.$on('movieid', this.cathMID)
    this.getSeat()

  },
  beforeDestroy () {
    EventBus.$off('movieid')
  }
}
</script>

<style>

.column {
  float: left;
  width: 55%;
}
</style>
