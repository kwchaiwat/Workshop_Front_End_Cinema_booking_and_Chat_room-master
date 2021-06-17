
<template  >

  <v-app style="background-color:#212121">
    <v-layout>
      <v-flex xs12 sm12>

        <v-divider class="my-2"></v-divider>

        <center>
          <v-card style="background-color:#424242" height="1000" width="1150">
            <v-card-title class="deep-orange">
              <v-icon dark size="42" class="mr-3">
                mdi-magnify
              </v-icon>
              <h2 class="headline --text font-weight-right">ภาพยนตร์</h2>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-container fluid>
                  <v-layout justify-space-around>
                    <v-flex xs2>
                      <div class="title mb-1"></div>
                      <v-layout column>
                         
                          <div class="zoom">
                        <v-hover>
                          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="250" height="380" color="#ffffff"> <br>
 <!-- href='../book'  -->
                            <a href="../book/M1"  >
                              <v-img @click="passM1toBook('m1')" src="https://lh3.googleusercontent.com/G47G-0Zd9MAgdq1yb4rYvY9pNxfFNfSG4i_PAREi5ouDIW6o1h6vM3uQ6qcbLUhjkLCLCf3dfX2GG9QEvhLRig=w260" height="300" width="200"></v-img>

                              <v-card-title>

                                <span class="subheading"> &nbsp;&nbsp;&nbsp; สไปเดอร์แมน ฟาร์ ฟรอม โฮม</span>

                                <div class="d-flex">

                                  <div class="ml-2 grey--text text--darken-2">

                                  </div>
                                </div>
                                <v-spacer></v-spacer>
                                <v-btn icon class="mr-0">
                                  <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                              </v-card-title>
                            </a>
                          </v-card>
                        </v-hover> <br><br>
                          </div>
                        <div class="title mb-1"></div>
                         <div class="zoom">
                        <v-hover>
                          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="250" height="380" color="#ffffff"><br>

                            <a href='../book/M4'>
                              <v-img src="https://lh3.googleusercontent.com/g-0QQLYKIDbcQSvhLG5liVcymdOWL0-IIHqUVmWv9YtpcpBpwhtm-QqBxtz9eV6V88Hg-V3hi-pUR1FvmD0=w260" height="300" width="200"></v-img>

                           
                            <div class="title mb-3"></div>
                              <span class="subheading">  ทอยสตอรี่ 4</span>
                            
                            </a>  
                          </v-card>
                        </v-hover> <br>
                         </div> 
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="title mb-1"></div>
                      <v-layout column>
                         <div class="zoom">
                        <v-hover>
                          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="250" height="380" color="#ffffff"> <br>

                            <a href='../book/M2'>
                              <v-img src="https://lh3.googleusercontent.com/86Cl7Ubx2remvlsNDiDmd2AKdZSoEPBfil_SyZAdWLo0jkmgaWJJgZx2IDkNTyiAgY0Rx5fGkl5b6VKrq63T=w260" height="300" width="200"></v-img>

                              <v-card-title>

                                <span class="subheading"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; ที่ตรงนั้น มีฉันหรือเปล่า</span>

                                <div class="d-flex">

                                  <div class="ml-2 grey--text text--darken-2">

                                  </div>
                                </div>
                                <v-spacer></v-spacer>
                                <v-btn icon class="mr-0">
                                  <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                              </v-card-title>
                            </a>
                          </v-card>
                        </v-hover> <br><br>
                         </div>
                          <div class="zoom">
                        <v-hover>
                          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="250" height="380" color="#ffffff"> <br>

                            <a href='../book/M3'>
                              <v-img src="https://lh3.googleusercontent.com/diwC0VldM1Ah33-JZMZ2mSN9LvkSS34LUt3rZrFP4l-C2mVq2cjxZWNvMo1ESsRf6nt9ZgRY4-PJ5-b4qQc=w260" height="300" width="200"></v-img>

                              <v-card-title>

                                <span class="subheading"> &nbsp;&nbsp; แอนนาเบลล์ ตุ๊กตาผีกลับบ้าน </span>

                                <div class="d-flex">

                                  <div class="ml-2 grey--text text--darken-2">

                                  </div>
                                </div>
                                <v-spacer></v-spacer>
                                <v-btn icon class="mr-0">
                                  <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                              </v-card-title>
                            </a>
                          </v-card>
                        </v-hover> <br>
                          </div>
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="title mb-2"></div>
                      <v-layout column>
                         <div class="zoom">
                        <v-hover>
                          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="250" height="380" color="#ffffff"> <br>

                            <a href='../book/M5'>
                              <v-img src="https://f.ptcdn.info/349/064/000/pso5e1wclptJyjAh7Eq-o.jpg" height="300" width="200"></v-img>
                              
                              <div class="title mb-3"></div>
                              
                                <spen class="subheading"> X-Men</spen>

                                
                            </a>
                          </v-card>
                        </v-hover> <br> <br>
                         </div>
                          <div class="zoom">
                        <v-hover>
                          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="250" height="380" color="#ffffff"> <br>

                            <a href='../book/M6'>
                              <v-img src="https://lh3.googleusercontent.com/GnW0vZCW1EbUgrznFqbcJbQ7GZP6I9JjcKPiBT6OG4BJ6lrX_keyXMC_Q2kK1hk7Vxwq-jMZoX951uc5o2k=w260" height="300" width="200"></v-img>

                               <div class="title mb-3"></div>
                                <span class="subheading"> อะลาดิน
                                </span>
                            </a>
                          </v-card>
                        </v-hover> <br>
                          </div>

                      </v-layout>
                    </v-flex>
                  </v-layout>

                </v-container>
              </v-layout>
            </v-container>
          </v-card>
        </center>

        <v-card-actions class="grey darken-2 justify-center" style="color:#ffffff">
          &copy;2019 —
          <strong style="color:#ffffff">MFive</strong>
        </v-card-actions>

      </v-flex>

    </v-layout>
  <!-- <v-btn @click="passM1toBook()">jsdfjgslgslg</v-btn> -->
  </v-app>
</template>

<script>
import { EventBus } from '@/EventBus'

export default {
  data () {
    return {
      urlpath:'',
    
    }
  },
  methods: {
    checkuser (user) {
      // if (true) {
      if (user == null) {
        window.location.href = '/'
      }
    },
    passM1toBook()
    {
      this.urlpath = this.$route.path
      // EventBus.$emit('movieid',cathmovieid)
      console.log(this.urlpath)
      // this.$router.push('/book')
    }
  },
  created () {
    this.checkuser(this.$cookies.get('user'))
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
 <style>
a {
  text-decoration: none;
}
</style>
<style>
.zoom {
  padding: 5px;

  transition: transform 0.2s; /* Animation */

  margin: 0 auto;
}

.zoom:hover {
  transform: scale(
    1.3
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
 }
</style>
