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
        <br>

        <v-container>

          <v-layout>
            <v-flex xs12>

            </v-flex>
            <v-flex style="padding-left:30px">
              <v-img class="white--text" height="450px" width="300px" :src="this.moviedata.picpath">
              </v-img>
            </v-flex>
            <v-flex xs12>
              <v-card-title>
                <div>
                  <br> <br> <br> <br> <br>
                  <span>
                    <h6 class="white--text" style=" font-size:18px">{{this.moviedata.moviename}}</h6>
                  </span><br>

                  <p class="white--text" style="font-size:16px">หมวดหมู่: {{this.moviedata.group}}</p>

                  <p class="white--text" style="font-size:16px">เวลา {{this.moviedata.time}} นาที</p>

                </div>
              </v-card-title>
            </v-flex>

            <v-flex xs8>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container>
          <v-card-title class="white">
            <v-icon dark size="42" class="mr-3">
              mdi-magnify
            </v-icon>

            <v-btn style="width:130px; height:130px" outline color="black" class="title --text font-weight-right" href="/ticket">โรงภาพยนตร์<br><br>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 1</v-btn>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <v-icon large color="black">event_seat</v-icon><br><br><br><br> &nbsp; &nbsp;
            <h2 class="subheading --text font-weight-right">Executive <br>150 บาท</h2>
          </v-card-title>

        </v-container>
        <br>
        <center>
          <v-card style="background-color:rgba(255,255,255)" height="680" width="1150">

            <!-- RollA -->
            <v-flex style="padding-right:85px">
              <v-container>
                <v-flex xs12 sm12 offset-xs1>
                  <br>
                  <v-img src="https://sv1.picz.in.th/images/2019/06/20/15Qhiu.png"> <br>
                    <h2 class="black--text">จอภาพยนตร์</h2>
                  </v-img> <br><br>
                  <tr>
                    <td class="A">
                      <td class="black--text">A &nbsp;</td>
                      <a v-for="i in rollAs.length" :key="i">
                        <span v-if="seat[i-1]=='unbook'">
                          <v-btn large outlie v-on:click="say(rollAs[i-1].status)" :color="rollAs[i-1].status ? 'warning' : 'blue'" @click="addticketA(rollAs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollAs[i-1].status">done</v-icon>
                            <v-icon color="black" v-else>event_seat</v-icon>
                          </v-btn>
                        </span>
                        <span v-else>
                          <v-btn large outlie v-on:click="say(rollAs[i-1].status)" class="disable-events" color="#888888" @click="addticketA(rollAs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollAs[i-1].status">person</v-icon>
                            <v-icon color="black" v-else>person</v-icon>
                          </v-btn>
                        </span>
                      </a>

                      <td class="black--text">&nbsp; A</td>
                      <!-- </td> -->
                  </tr>
                </v-flex>
              </v-container>

              <v-container>
                <v-flex xs12 sm12 offset-xs1>
                  <tr>
                    <td class="B">
                      <td class="black--text">B &nbsp;</td>

                      <a v-for="i in rollBs.length" :key="i">
                        <span v-if="seat[i+7]=='unbook'">
                          <v-btn large outlie v-on:click="say(rollBs[i-1].status)" :color="rollBs[i-1].status ? 'warning' : 'blue'" @click="addticketB(rollBs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollBs[i-1].status">done</v-icon>
                            <v-icon color="black" v-else>event_seat</v-icon>
                          </v-btn>
                        </span>
                        <span v-else>
                          <v-btn large outlie v-on:click="say(rollBs[i-1].status)" class="disable-events" color="#888888" @click="addticketB(rollBs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollBs[i-1].status">person</v-icon>
                            <v-icon color="black" v-else>person</v-icon>
                          </v-btn>
                        </span>
                      </a>

                      <td class="black--text">&nbsp; B</td>
                      <!-- </td> -->
                  </tr>
                </v-flex>
              </v-container>

              <v-container>
                <v-flex xs12 sm12 offset-xs1>
                  <tr>
                    <td class="C">
                      <td class="black--text">C &nbsp;</td>

                      <a v-for="i in rollCs.length" :key="i">
                        <span v-if="seat[i+15]=='unbook'">
                          <v-btn large outlie v-on:click="say(rollCs[i-1].status)" :color="rollCs[i-1].status ? 'warning' : 'blue'" @click="addticketC(rollCs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollCs[i-1].status">done</v-icon>
                            <v-icon color="black" v-else>event_seat</v-icon>
                          </v-btn>
                        </span>
                        <span v-else>
                          <v-btn large outlie v-on:click="say(rollCs[i-1].status)" class="disable-events" color="#888888" @click="addticketC(rollCs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollCs[i-1].status">person</v-icon>
                            <v-icon color="black" v-else>person</v-icon>
                          </v-btn>
                        </span>
                      </a>

                      <td class="black--text">&nbsp; C</td>
                      <!-- </td> -->
                  </tr>
                </v-flex>
              </v-container>

              <v-container>
                <v-flex xs12 sm12 offset-xs1>
                  <tr>
                    <td class="D">
                      <td class="black--text">D &nbsp;</td>

                      <a v-for="i in rollDs.length" :key="i">
                        <span v-if="seat[i+23]=='unbook'">
                          <v-btn large outlie v-on:click="say(rollDs[i-1].status)" :color="rollDs[i-1].status ? 'warning' : 'blue'" @click="addticketD(rollDs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollDs[i-1].status">done</v-icon>
                            <v-icon color="black" v-else>event_seat</v-icon>
                          </v-btn>
                        </span>
                        <span v-else>
                          <v-btn large outlie v-on:click="say(rollDs[i-1].status)" class="disable-events" color="#888888" @click="addticketD(rollDs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollDs[i-1].status">person</v-icon>
                            <v-icon color="black" v-else>person</v-icon>
                          </v-btn>
                        </span>
                      </a>

                      <td class="black--text">&nbsp; D</td>
                      <!-- </td> -->
                  </tr>
                </v-flex>
              </v-container>

              <v-container>
                <v-flex xs12 sm12 offset-xs1>
                  <tr>
                    <td class="E">
                      <td class="black--text">E &nbsp;</td>

                      <a v-for="i in rollEs.length" :key="i">
                        <span v-if="seat[i+31]=='unbook'">
                          <v-btn large outlie v-on:click="say(rollEs[i-1].status)" :color="rollEs[i-1].status ? 'warning' : 'blue'" @click="addticketE(rollEs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollEs[i-1].status">done</v-icon>
                            <v-icon color="black" v-else>event_seat</v-icon>
                          </v-btn>
                        </span>
                        <span v-else>
                          <v-btn large outlie v-on:click="say(rollEs[i-1].status)" class="disable-events" color="#888888" @click="addticketE(rollEs[i-1].title,i-1)">
                            <v-icon color="black" v-if="rollEs[i-1].status">person</v-icon>
                            <v-icon color="black" v-else>person</v-icon>
                          </v-btn>
                        </span>
                      </a>

                      <td class="black--text">&nbsp; E</td>
                      <!-- </td> -->
                  </tr>
                </v-flex>
              </v-container>
            </v-flex>
          </v-card>
        </center>
        <center>
          <br>
          <v-btn color="info" @click="popsum()">ดำเนินการต่อ</v-btn>
          <br>
          <br>
        </center>

        <v-card-actions class="grey darken-2 justify-center" style="color:#ffffff" height="950">
          &copy;2019 —
          <strong style="color:#ffffff">MFive</strong>
        </v-card-actions>

      </v-flex>

    </v-layout>
  </v-app>
</template>

<script>
import axios from 'axios';
import CONNECT from '../config.js'
import Swal from 'sweetalert2'

export default {
  created () {
    this.checkuser(this.$cookies.get('user'))
    this.user = this.$cookies.get('user')
    this.urlpathseat = this.$route.path
    this.urlpath = this.$route.path.split('/')
    this.urlpathM1 = this.urlpath[this.urlpath.length - 2]
    this.urlpathRound = this.urlpath[this.urlpath.length - 1]
    this.getSeat()
    this.getMovie()
  },
  data () {
    return {
      seat: [],
      ticket: [],
      e1: 2,
      sumPrice: 0,
      moviedata: {},
      rollAs: [
        { title: 'A1', status: false },
        { title: 'A2', status: false },
        { title: 'A3', status: false },
        { title: 'A4', status: false },
        { title: 'A5', status: false },
        { title: 'A6', status: false },
        { title: 'A7', status: false },
        { title: 'A8', status: false }


      ],
      rollBs: [
        { title: 'B1', status: false },
        { title: 'B2', status: false },
        { title: 'B3', status: false },
        { title: 'B4', status: false },
        { title: 'B5', status: false },
        { title: 'B6', status: false },
        { title: 'B7', status: false },
        { title: 'B8', status: false }
      ],

      rollCs: [
        { title: 'C1', status: false },
        { title: 'C2', status: false },
        { title: 'C3', status: false },
        { title: 'C4', status: false },
        { title: 'C5', status: false },
        { title: 'C6', status: false },
        { title: 'C7', status: false },
        { title: 'C8', status: false }


      ],
      rollDs: [
        { title: 'D1', status: false },
        { title: 'D2', status: false },
        { title: 'D3', status: false },
        { title: 'D4', status: false },
        { title: 'D5', status: false },
        { title: 'D6', status: false },
        { title: 'D7', status: false },
        { title: 'D8', status: false }


      ],
      rollEs: [
        { title: 'E1', status: false },
        { title: 'E2', status: false },
        { title: 'E3', status: false },
        { title: 'E4', status: false },
        { title: 'E5', status: false },
        { title: 'E6', status: false },
        { title: 'E7', status: false },
        { title: 'E8', status: false }


      ],
      msg: []
    }
  },
  methods: {
    popsum () {
      if (this.sumPrice != 0) {
        Swal.fire({
          title: 'รายการจองที่นั่ง',
          text: "คุณต้องการจองที่นั่งตามรายการนี้หรือไม่ ",
          html: " <h2>" + this.moviedata.moviename + "<br> 14 มิถุนายน 2019<br>เวลา: " + this.urlpathRound + " น.<br>" + "ที่นั่ง: "+ this.ticket + "<br>ราคารวม: " + this.sumPrice + "</h2>",
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
          width: '1500px',
          heightAuto: false,
          height: '1000px',
          customClass: 'swal-height'
        }).then(async (result) => {
          if (result.value) {
            var { data } = await this.axios.put(`${CONNECT.API}/booking`, {
              seats: this.ticket,
              movieid: this.urlpathM1,
              round: this.urlpathRound,
              userid: this.user.username,
              sumprice: this.sumPrice
            })
            this.msg = data
            console.log(this.msg)
            console.log(this.msg.message)
            if (this.msg.message == 'booksuccess') {
              await Swal.fire(
                'Booked!',
                'Your booking has been successed. ',
                'success'
              )
              // this.$router.go('/' + `${this.urlpathseat}`)
              .then(()=>window.location.href="/ticket")
            } else if (this.msg.message == 'book fail') {
              await Swal.fire(
                'Book unsuccesse!',
                'Your seat had been booked. ',
                'error'
              )
              this.$router.go('/' + `${this.urlpathseat}`)
             
            }
            else {
              console.log('if not working')
            }
          }
        })
      }
      else {
        Swal.fire
          (
          'Please select seat.',
          'The system can\'t complete the transaction. Due to not choosing seats',
          'warning'
          )
        // Swal.fire
        // (
        //   {
        //     title: 'Custom animation with Animate.css',
        //     animation: false,
        //     customClass: 
        //     {
        //       popup: 'animated tada'
        //     }
        //   }
        // )
      }

    },
    addticketA (sead, i) {
      if (this.ticket.includes(sead)) {
        let see = this.ticket.indexOf(sead)
        this.ticket.splice(see, 1)
      } else { this.ticket.push(sead) }
      this.rollAs[i].status = !this.rollAs[i].status
    },
    addticketB (sead, i) {
      if (this.ticket.includes(sead)) {
        let see = this.ticket.indexOf(sead)
        this.ticket.splice(see, 1)
      } else { this.ticket.push(sead) }
      this.rollBs[i].status = !this.rollBs[i].status
    },

    addticketC (sead, i) {
      if (this.ticket.includes(sead)) {
        let see = this.ticket.indexOf(sead)
        this.ticket.splice(see, 1)
      } else { this.ticket.push(sead) }
      this.rollCs[i].status = !this.rollCs[i].status
    },
    addticketD (sead, i) {
      if (this.ticket.includes(sead)) {
        let see = this.ticket.indexOf(sead)
        this.ticket.splice(see, 1)
      } else { this.ticket.push(sead) }
      this.rollDs[i].status = !this.rollDs[i].status
    },
    addticketE (sead, i) {
      if (this.ticket.includes(sead)) {
        let see = this.ticket.indexOf(sead)
        this.ticket.splice(see, 1)
      } else { this.ticket.push(sead) }
      this.rollEs[i].status = !this.rollEs[i].status
    },
    say: function (Rstatus) {
      if (Rstatus == false) {
        this.sumPrice += 150
      }
      else {
        this.sumPrice -= 150
      }
    },
    checkuser (user) {
      // if (true) {
      if (user == null) {
        window.location.href = '/'
      }
    },
    async getSeat () {
      try {
        var { data } = await this.axios.post(
          `${CONNECT.API}/round`,
          {
            round: this.urlpathRound,
            movieid: this.urlpathM1
          }
        )
        this.mapSeat(data)
      } catch (error) {
        console.log(error)
      }
    },
    async mapSeat (seatdata) {
      let i = 0
      let j = 0
      await seatdata.forEach(el => {
        this.seat.push(seatdata[i].seatstate)
        i++
      });
      await this.seat.push(seatdata[i].seat)
    },
    async getMovie () {
      try {
        var { data } = await this.axios.post(
          `${CONNECT.API}/movie`,
          {
            movieid: this.urlpathM1
          }
        )
        this.moviedata = data
        console.log(this.moviedata)
      } catch (error) {
        console.log(error)
      }
    }

  }
}
</script>

<style>
.disable-events {
  pointer-events: none;
}
.swal-height {
  height: 80vh;
}
</style>