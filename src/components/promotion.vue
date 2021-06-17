
<template  >

  <v-app style="background-color:#212121">
    <v-layout>
      <v-flex xs12 sm12>

        <v-divider class="my-2"></v-divider>

        <center>
          <v-card style="background-color:#424242" height="700" width="1150">
            <v-card-title class="deep-orange">
              <v-icon dark size="42" class="mr-3">
                mdi-magnify
              </v-icon>
              <h2 class="headline --text font-weight-right">โปรโมชัน</h2>
            </v-card-title>
             <v-container>
              <v-layout>
                <v-container fluid>
                  <v-layout >
                    <v-flex xs4>
                      <!-- พารา1 -->
                         <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="300"
        height="500"
        color="#ffffff">
      <br>
		<a href='../promo2'> <v-img src="https://www.img.in.th/images/31ed5359de717e2655740780a9438309.jpg"
		 height="380" width="250"></v-img>
		
        <v-card-title>
            <center>
                          <div class="subheading ">
                            <a href='../promo2'>  
                              <h5 style="color:#0D47A1"> Spider Man: Far From Home ซื้อตั๋วล่วงหน้า ได้แล้ววันนี้</h5>
                            </a>
                          </div>
                          <h5>ทุก 2 ที่นั่ง รับ Eye Mask <br>มูลค่า 199 บาท ฟรี </h5>
                        </center>
                        
          <v-spacer></v-spacer>
          <v-btn icon class="mr-0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title></a>
      </v-card>
    </v-hover> 
</v-flex>
<!-- พารา2 -->
                    <v-flex xs4>
                     <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="300"
        height="500"
        color="#ffffff">
      <br>
		<a href='../promo2'> <v-img src="https://www.img.in.th/images/40b3b8e00880d8da8f5dc16769986e9c.jpg"
	 height="380" width="250"></v-img>
		
        <v-card-title> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                          <center>
                            <div class="subheading">
                                <a href='../promo2'>  
                              <h5 style="color:#0D47A1">Toy Story 4 ซื้อตั๋วล่วงหน้า ได้แล้ววันนี้</h5>
                            <h5>ทุก 2 ที่นั่ง รับเข็มกลัด Toy story ฟรี </h5>
                                </a>
                           </div>
                          </center>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title></a>
      </v-card>
    </v-hover> 

                    </v-flex>
<!-- พารา3 -->
                    <v-flex xs4>
                      <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="300"
        height="500"
        color="#ffffff">
    <br>
		<a href='../promo2'> <v-img src="https://www.img.in.th/images/1ceb452ba2681d6d0f7d486a4c9b3db9.jpg" 
	 height="380" width="250"></v-img>
        <v-card-title>
          <center>
                          <div class="subheading">
                             <a href='../promo2'>  
                            <h5 style="color:#0D47A1">SF Movie Club Card บัตรโดนๆ ของคนรักหนัง ไม่ควรพลาด !!</h5>
                          <h5>สมัครสมาชิกวันนี้ รับบัตร Limited Edition Movie Club Card </h5>
                        </a>
                          </div>
                        </center> <br>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title></a>
      </v-card>
    </v-hover> 

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
  data () {
    return {
      items: [
        {
          src: 'https://www.prachachat.net/wp-content/uploads/2019/04/mar06290462p1.jpg'
        },
        {
          src: 'https://lifestyle.campus-star.com/app/uploads/2017/05/gex.jpg'
        },
        {
          src: 'https://cms.dmpcdn.com/movie/2019/06/05/bb6c42dd-a346-44c6-87df-804b95d2c941_1024.jpg'

        },
        {
          src: 'https://cms.dmpcdn.com/movie/2019/04/04/ad31b12c-3e8e-4ab6-8ffe-383311d05bc3_1024.jpg'
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
<style>
a {
  text-decoration: none;
}
</style>
