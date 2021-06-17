
<template  >

  <v-app style="background-color:#212121">
    <v-layout>
      <v-flex xs12 sm12>

        <v-divider class="my-2"></v-divider>

        <center>
          <v-card style="background-color:#424242 " height="1340" width="1150">
            <v-card-title class="deep-orange">
              <v-icon dark size="42" class="mr-3">
                mdi-magnify
              </v-icon>
              <h2 class="headline --text font-weight-right" style="color:#FFFFFF">ผู้กำกับเผยสาเหตุ.. ทำไม "Toy Story" จึงไม่จบอยู่ที่แค่ภาค 3  </h2>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-container fluid>
                  <v-layout justify-space-around>
                    <v-flex xs12>
                      <v-layout column>

                        <center>
                         
                            <v-img src="https://lh3.googleusercontent.com/OWA_pZCLEFTkOPn_cZLgCbcy2Qju5fIMWzgCc_qvvP7DNJN0fMxqdaO6AivLrSzFF6mwYiM5RcfeMENwPTPJ=w750"	 height="500" width="800"></v-img>
                        
                        </center>
                        <br> <br> 
                        <h2 style="color:#ffffff">  HIGHLIGHTS</h2><br>
                          <p class="text-sm-left" style="color:#ffffff"> Toy Story 4 จะเป็นการเล่าเรื่องผ่านชีวิตของ 'วู้ดดี้' ของเล่นผู้จงรักภักดีต่อเจ้าของต้องปล่อยมือจากเจ้าของเดิมอย่าง 'แอนดี้' ไปหาเจ้าของใหม่ นั่นคือ ‘บอนนี่’ แต่เมื่อบอนนี่ได้นำของเล่นชิ้นใหม่ที่ไม่เต็มใจจะเป็นของเล่นที่ชื่อ 'ฟอร์คกี้' มาสู่ห้องของเธอ การเดินทางผจญภัยตามท้องถนนไปกับเพื่อนเก่าและใหม่จะทำให้วู้ดดี้เห็นว่าโลกนี้ใหญ่โตแค่ไหนสำหรับของเล่น </p>
                       <br>
                       <h2 style="color:#ffffff">  TRAILER Toy Story4</h2><br>
                       <iframe width="800" height="400" src="https://www.youtube.com/embed/Tuge97lt4q8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
  </v-app>
</template>
<script>
export default {
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
