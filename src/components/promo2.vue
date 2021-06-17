
<template  >

  <v-app style="background-color:#212121">
    <v-layout>
      <v-flex xs12 sm12>

        <v-divider class="my-2"></v-divider>

        <center>
          <v-card style="background-color:#424242" height="900" width="1150">
            <v-card-title class="deep-orange">
              <v-icon dark size="42" class="mr-3">
                mdi-magnify
              </v-icon>
              <h2 class="headline --text font-weight-right" style="color:#ffffff">โปรโมชัน Spider Man: Far From Home ซื้อตั๋วล่วงหน้า ได้แล้ววันนี้</h2>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-container fluid>
                  <v-layout justify-space-around>
                    <v-flex xs12>
                      <v-layout column>

                        <center>
                          <v-img src="https://www.img.in.th/images/94600b81e388891d2a7f5ad604464220.jpg" width="350"></v-img>
                        </center>
                        <br>
                        <center>
                          <div class="subheading" style="color:#ffffff">Spider Man: Far From Home </div>
                        </center> <br>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-layout>
              <p align='left' style="color:#FF5722" >รายละเอียดโปรโมชั่น</p>
              <p align='left' style="color:#ffffff">เลือกที่นั่งที่ดีที่สุดก่อนใคร โดยการซื้อบัตรชมภาพยนตร์ล่วงหน้าเรื่อง “Spider - Man : Far From Home” ทุก 2 ที่นั่ง ราคาปกติ (ทุกช่องทางการจำหน่าย) รับฟรี “Spider - Man : Far From Home Eye Mask” มูลค่า 199 บาท (10,000 สิทธิ์แรก เท่านั้น)
                <br>
                <b>วันที่ภาพยนตร์เข้าฉาย:</b> วันที่ 3 กรกฎาคม 2562 </p>

              <p align='left' style="color:#FF5722">ระยะเวลาการเปิดจำหน่ายบัตรล่วงหน้า <br></p>
              <p align='left' style="color:#ffffff"> ตั้งแต่วันที่ 6 มิถุนายน – 2 กรกฎาคม 2562</p>

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
