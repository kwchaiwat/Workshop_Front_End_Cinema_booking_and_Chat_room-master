
<template  >

  <v-app style="background-color:#212121">
    <v-layout>
    <v-flex xs12 sm12>
    <v-carousel hide-delimiters height=680>
        <center>
        <v-carousel-item width="1530" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </center>
    </v-carousel>
      <v-divider class="my-2"></v-divider>
       <center>
          <v-card style="background-color:#424242" height="650" width="1150">
            <v-card-title class="deep-orange ">
              <v-icon dark size="42" class="mr-3">
                mdi-magnify
              </v-icon>
              <h2 class="headline font-white --text font-weight-right" style="color:#ffffff">ภาพยนตร์</h2>
            </v-card-title>
            <v-container>
              <v-layout>



   <v-container>
              <v-layout>
                <v-container fluid>
                  <v-layout >
                    <v-flex xs4>
                      <!-- พารา1 -->
                      <div class="zoom">
                         <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="260"
        height="400"
        color="#ffffff"> <br>
    
		<a href='../book/M1'> <v-img src="https://lh3.googleusercontent.com/G47G-0Zd9MAgdq1yb4rYvY9pNxfFNfSG4i_PAREi5ouDIW6o1h6vM3uQ6qcbLUhjkLCLCf3dfX2GG9QEvhLRig=w260"
		 height="300" width="200"></v-img>
		
        <v-card-title >
            <div>
                  <span class="body-1" style="color:#FF5722" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;วันที่เข้าฉาย: 2019-07-03 </span>
                  <br>
         <span class="subheading" > &nbsp;&nbsp;
          สไปเดอร์แมน ฟาร์ ฟรอม โฮม</span>
                 

            <div class="d-flex">
              
              <div class="ml-2 grey--text text--darken-2">
              
              </div>
            </div> 
          </div>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title></a>
      </v-card>
    </v-hover> 
</div>

                    </v-flex>
<!-- พารา2 -->
                    <v-flex xs4>
                      <div class="zoom">
                     <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="260"
        height="400"
        color="#ffffff"><br>
    
		<a href='../book/M2'> <v-img src="https://lh3.googleusercontent.com/86Cl7Ubx2remvlsNDiDmd2AKdZSoEPBfil_SyZAdWLo0jkmgaWJJgZx2IDkNTyiAgY0Rx5fGkl5b6VKrq63T=w260"  
		 height="300" width="200"></v-img>
		
        <v-card-title>
            <div>
                  <span class="body-1" style="color:#FF5722" >&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;วันที่เข้าฉาย: 2019-06-20 </span>
                  <br>
         <span class="subheading" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           ที่ตรงนั้น มีฉันหรือเปล่า </span>
                 

            <div class="d-flex">
              
              <div class="ml-2 grey--text text--darken-2">
              
              </div>
            </div> 
          </div>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title></a>
      </v-card>
    </v-hover> 
</div>
                    </v-flex>
<!-- พารา3 -->
                    <v-flex xs4>
                     <div class="zoom">
                      <v-hover>
                       
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="260"
        height="400"
        color="#ffffff"> <br>
      
		<a href='../book/M5'> <v-img src="https://f.ptcdn.info/349/064/000/pso5e1wclptJyjAh7Eq-o.jpg"
		 height="300" width="200"></v-img>
		
        <v-card-title>
            <div>
                  <span class="body-1" style="color:#FF5722" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;วันที่เข้าฉาย: 2019-06-06   </span>
                  <br>
         <span class="subheading" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           X-MEN</span>
                 

            <div class="d-flex">
              
              <div class="ml-2 grey--text text--darken-2">
              
              </div>
            </div> 
          </div>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title></a>
      </v-card>
    </v-hover> 
         </div>             

                    </v-flex>
                  </v-layout>

                </v-container>
              </v-layout>
            </v-container>   
  
              </v-layout>
            </v-container>
          </v-card>
        </center>

        <v-divider class="my-2"></v-divider>

            <center>
          <v-card style="background-color:#424242" height="780" width="1150">
            <v-card-title class="deep-orange ">
              <v-icon dark size="42" class="mr-3">
                mdi-magnify
              </v-icon>
              <h2 class="headline font-white --text font-weight-right" style="color:#ffffff">โปรโมชัน</h2>
            </v-card-title>
            <v-container>
              <v-layout>



   <v-container>
              <v-layout>
                <v-container fluid>
                  <v-layout >
                    <v-flex xs4>
                      <!-- พารา1 -->
                      <div class="zoom">
                         <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="300"
        height="500"
        color="#ffffff"><br>
    
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
                      </div>
</v-flex>
<!-- พารา2 -->
                    <v-flex xs4>
                      <div class="zoom">
                     <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="300"
        height="500"
        color="#ffffff"> <br>
    
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
    </div>

                    </v-flex>
<!-- พารา3 -->
                    <v-flex xs4>
                    <div class="zoom">
                      <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="300"
        height="500"
        color="#ffffff"> <br>
    
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
     </div>

                    </v-flex>
                  </v-layout>

                </v-container>
              </v-layout>
            </v-container>   
  
              </v-layout>
            </v-container>
          </v-card>
        </center>

        <v-divider class="my-2"></v-divider>


       

        <v-divider class="my-2"></v-divider>

        <center>
          <v-card style="background-color:#424242" height="950" width="1150">
            <v-card-title class="deep-orange ">
              <v-icon dark size="42" class="mr-3">
                mdi-magnify
              </v-icon>
              <h2 class="headline --text font-weight-right " style="color:#ffffff">ข่าวสารและกิจกรรม</h2>
            </v-card-title>
           
              

                        <!-- พารากราฟ1 -->
<v-layout column>
        
                          <v-card-text>
                            <v-container>
                              <v-layout>
                                <v-flex xs3>
      <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="250"
        height="365"
        color="#ffffff"> <br>
       <div class="zoom">
		<a href='../news2'> <v-img src="https://lh3.googleusercontent.com/xdMb03j58W2OSdc1kNVUfovachfiYEZVAwTjda9FoeWNzTdEJIoeZgDR0r6Ln5hj87k8H-sXgzflBALN1CC_=w750" 
	 height="320" width="220"></v-img></a>
       </div>
      </v-card>
    </v-hover> 
                                </v-flex>
                                <v-flex xs12>
                                  <v-card-title>
                                    <div>
                                      <br>  <br>  

                                      <a href='../news2'>
                                        <h2 align='left' style="color:#FF5722"> อีสเตอร์เอ้กใน X-Men : Dark Phoenix </h2>
                                      </a><br>
                                      <span align='left'  style="color:#ffffff"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เข้าฉายไปเรียบร้อยแล้วกับ ภาคสุดท้ายของตำนาน X-men ภายใต้การสร้างของค่าย Fox แล้วจากนี้ก็จะเป็นการรีบู๊ตใหม่ภายใต้การดูแลของ มาร์เวล เองที่จะเชื่อมโยงเหล่ามนุษย์กลายพันธุ์ให้เชื่อมโยงเข้ากับจักรวาลมาร์เวล X-men เป็นแฟรนไชส์หนังที่สร้างต่อเนื่องกันมาแล้วถึง 12 เรื่อง (นับรวม Deadpool 2 ภาคด้วย) ภายในระยะเวลา 19 ปี กับทีมนักแสดง 2 ชุด เมื่อมาถึง Dark Phoenix
                                      </span>
                                      <a href='../news2' style="color:#FF5722"> อ่านต่อ </a>
                                      <br>
                                    </div>
                                  </v-card-title>
                                </v-flex>

                              </v-layout>
                            </v-container>
                          </v-card-text>
                            </v-layout>
                      

                        <!-- พารากราฟ2 -->
<v-layout column>
                          <v-card-text>
                            <v-container>
                              <v-layout>
                                <v-flex xs3>
                                  <v-hover>
                                
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="250"
        height="365"
        color="#ffffff"> <br>
    <div class="zoom">
		<a href='../new3'> <v-img src="https://lh3.googleusercontent.com/da1ehPemWseVmzHE7fR1Mva3Hw5qZ1mL6YkZLy685TJsvmgDZEPB3a5WljjRo0JCAeRCseF4RZk01dkSUyrs=w750" 
	 height="320" width="220"></v-img></a>
    </div>
      </v-card>
    </v-hover> 
                                </v-flex>
                                <v-flex xs12>
                                  <v-card-title>
                                    <div>
                                      <br>  <br> 

                                      <a href='../new3'>
                                        <h2 align='left' style="color:#FF5722">ผู้กำกับเผยสาเหตุ.. ทำไม "Toy Story" จึงไม่จบอยู่ที่แค่ภาค 3  </h2>
                                      </a><br>
                                      <span align='left' style="color:#ffffff"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;และแล้วก็ลากยาวมาได้ถึงภาค 4 กับ Toy Story แอนิเมชั่นที่สร้างชื่อให้กับ Pixar และเป็นแฟรนไชส์ที่มีอายุยืนยาวมากว่า 20 ปี ในภาคนี้จะพาแฟนๆ กลับไปหาบรรดาตัวละครคลาสสิคที่คนดูรักและน่าจะคิดถึงอย่าง วู้ดดี้ และคู่หูคู่กัด บัซ ไลต์เยียร์ และความน่าสนใจของภาคนี้ก็คือการแนะนำตัวละครใหม่ๆ มากมาย เพราะภาคนี้วู้ดดี้ และ บัซ ไลต์เยียร์ จะได้ไปอยู่บ้านใหม่ มีเจ้าของใหม่เป็นเด็กหญิงชื่อบอนนี่ ที่บ้านนี้วู้ดดี้ และ บัซ ได้รู้จักกับ ฟอร์คกี้ มันคือส้อมทานอาหารที่บอนนี่นำมาตกแต่งดัดแปลงให้เป็นของเล่นของเธอ
                                      </span>
                                      <a href='../new3' style="color:#FF5722"> อ่านต่อ </a>
                                      <br>
                                    </div>
                                  </v-card-title>
                                </v-flex>

                              </v-layout>
                            </v-container>
                          </v-card-text>
                          </v-layout>  
           
          </v-card>         
        </center>

  <v-card-actions class="grey darken-2 justify-center" style="color:#ffffff"  height="950">
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
          src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10af0b39-a57e-4f10-aeb1-fd388299ed5b/dd30sej-ba00f8a2-fdcf-48ad-8681-e507010cba43.png/v1/fill/w_1192,h_670,q_70,strp/spider_man_far_from_home_wallpaper_hd_by_strikegallery_dd30sej-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzEwYWYwYjM5LWE1N2UtNGYxMC1hZWIxLWZkMzg4Mjk5ZWQ1YlwvZGQzMHNlai1iYTAwZjhhMi1mZGNmLTQ4YWQtODY4MS1lNTA3MDEwY2JhNDMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cb483uweir9IF9AscTs3URV6a3KQy5NIG_D03fa7Ns8'
        },
        {
          src: 'https://www.gamerbraves.com/wp-content/uploads/2019/05/X-Men-Dark-Phoenix-feature-image.jpg'
        },
        {
          src: 'https://i.ytimg.com/vi/dC_S4oKFZ6Q/maxresdefault.jpg'

        },
        {
          src: 'https://i.pinimg.com/originals/de/3f/84/de3f8483f83ec1d6ed2487c0a668a9ef.jpg'
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
