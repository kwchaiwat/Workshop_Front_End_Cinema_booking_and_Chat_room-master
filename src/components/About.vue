
<template  >
  <v-app style="background-color:#ffffff">
    <v-layout>
      <v-flex xs12 sm12>
        <v-toolbar style="background-color: #424242">
          <v-avatar>
            <img src="https://image.shutterstock.com/image-vector/letter-m-line-logo-design-260nw-757203250.jpg" alt="Pang" />
          </v-avatar>

          <v-toolbar-title style="color:#FFFFFF">MFive</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat style="color:#FFFFFF">เข้าสู่ระบบ</v-btn>
            <v-btn flat style="color:#FFFFFF">ลงทะเบียน</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-carousel hide-delimiters height="600">
          <br />

          <v-divider class="my-3"></v-divider>
          <center>
            <v-carousel-item width="1300" v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
          </center>
        </v-carousel>

        <v-divider class="my-2"></v-divider>

        <center>
          <v-card style="background-color:#ffffff" height="900" width="1300">
            <v-card-title class="grey lighten-2">
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
                      <v-layout column>
                        <v-img src="https://f.ptcdn.info/349/064/000/pso5e1wclptJyjAh7Eq-o.jpg" height="300" width="200"></v-img>
                        <br />
                        <center>
                          <div class="subheading ">X-MEN</div>
                        </center>
                        <br />
                        <v-img src="https://lh3.googleusercontent.com/G47G-0Zd9MAgdq1yb4rYvY9pNxfFNfSG4i_PAREi5ouDIW6o1h6vM3uQ6qcbLUhjkLCLCf3dfX2GG9QEvhLRig=w260" height="300" width="200"></v-img>
                        <br />
                        <center>
                          <div class="subheading">
                            สไปเดอร์แมน <br />ฟาร์ ฟรอม โฮม
                          </div>
                        </center>
                        <br />
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="title mb-1"></div>
                      <v-layout column>
                        <v-img src="https://lh3.googleusercontent.com/86Cl7Ubx2remvlsNDiDmd2AKdZSoEPBfil_SyZAdWLo0jkmgaWJJgZx2IDkNTyiAgY0Rx5fGkl5b6VKrq63T=w260" height="300" width="200"></v-img>
                        <br />
                        <center>
                          <div class="subheading">
                            ที่ตรงนั้น มีฉันหรือเปล่า
                          </div>
                        </center>
                        <br />
                        <v-img src="https://lh3.googleusercontent.com/diwC0VldM1Ah33-JZMZ2mSN9LvkSS34LUt3rZrFP4l-C2mVq2cjxZWNvMo1ESsRf6nt9ZgRY4-PJ5-b4qQc=w260" height="300" width="200"></v-img>
                        <br />
                        <center>
                          <div class="subheading">
                            แอนนาเบลล์ <br />ตุ๊กตาผีกลับบ้าน
                          </div>
                        </center>
                        <br />
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="title mb-1"></div>
                      <v-layout column>
                        <v-img src="https://lh3.googleusercontent.com/g-0QQLYKIDbcQSvhLG5liVcymdOWL0-IIHqUVmWv9YtpcpBpwhtm-QqBxtz9eV6V88Hg-V3hi-pUR1FvmD0=w260" height="300" width="200"></v-img>
                        <br />
                        <center>
                          <div class="subheading">TOY STORY 4</div>
                        </center>
                        <br />
                        <v-img src="https://lh3.googleusercontent.com/GnW0vZCW1EbUgrznFqbcJbQ7GZP6I9JjcKPiBT6OG4BJ6lrX_keyXMC_Q2kK1hk7Vxwq-jMZoX951uc5o2k=w260" height="300" width="200"></v-img>
                        <br />
                        <center>
                          <div class="subheading">อะลาดิน</div>
                        </center>
                        <br />
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-layout>
            </v-container>
          </v-card>
        </center>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 —
          <strong>MFive</strong>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src:
            'https://www.prachachat.net/wp-content/uploads/2019/04/mar06290462p1.jpg'
        },
        {
          src: 'https://lifestyle.campus-star.com/app/uploads/2017/05/gex.jpg'
        },
        {
          src:
            'https://cms.dmpcdn.com/movie/2019/06/05/bb6c42dd-a346-44c6-87df-804b95d2c941_1024.jpg'
        },
        {
          src:
            'https://cms.dmpcdn.com/movie/2019/04/04/ad31b12c-3e8e-4ab6-8ffe-383311d05bc3_1024.jpg'
        }
      ]
    }
  },
  methods: {
    checkuser (user) {
      // if (true) {
      if (user == null) {
        window.location.href = '/'
      }
    }
  },
  created () {
    this.checkuser(this.$cookies.get('user'))
  }
}
</script>
