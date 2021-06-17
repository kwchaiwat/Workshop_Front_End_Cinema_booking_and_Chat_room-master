<template>
  <form @submit.prevent="submit">
    <v-container grid-list-xl>
      <v-flex>
        <center>
          <h1>Register</h1>
          <span align="right" class="validate">{{validateFill}}</span>
        </center>
      </v-flex>
      <br>

      <v-layout justify-center>
        <v-flex xs6>
          <h4>Username:</h4>
          <v-text-field v-model="username" v-validate="'required|max:10'" :counter="10" :error-messages="errors.collect('username')" label="Username" data-vv-name="username" required solo></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex xs6>
          <h4>Password:</h4>
          <v-text-field v-model="password" v-validate="'required|max:10'" :counter="10" :error-messages="errors.collect('password')" label="Password" data-vv-name="password" type="password" required solo></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex xs6>
          <h4>Confirm Password:</h4>
          <v-text-field v-model="confirmpassword" type="password" label="Confirm Password" solo></v-text-field>
          <span align="right" class="validate">{{validatePassword}}</span>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex xs6 sm3>
          <h4>Firstname:</h4>
          <v-text-field v-model="firstname" v-validate="'required|max:10'" :counter="10" :error-messages="errors.collect('firstname')" label="Firstname" data-vv-name="firstname" required solo></v-text-field>
        </v-flex>

        <v-flex xs6 sm3>
          <h4>Last Name:</h4>
          <v-text-field v-model="lastname" v-validate="'required|max:10'" :counter="10" :error-messages="errors.collect('lastname')" label="Lastname" data-vv-name="lastname" required solo></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex xs6>
          <h4>Email:</h4>
          <v-text-field v-model="email" v-validate="'required|email'" :error-messages="errors.collect('email')" label="E-mail" data-vv-name="email" required solo></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex xs6 sm3>
          <h4>Tel:</h4>
          <v-text-field v-model="tel" v-validate="'required|max:10'" :counter="10" :error-messages="errors.collect('tel')" label="Tel" data-vv-name="tel" type="number" required solo></v-text-field>
        </v-flex>

        <v-flex xs6 sm3>
          <h4>Age:</h4>
          <v-text-field v-model="age" v-validate="'required|max:3'" :counter="3" :error-messages="errors.collect('age')" label="Age" data-vv-name="age" type="number" required solo></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex xs6>
          <v-checkbox v-model="checkbox" v-validate="'required'" :error-messages="errors.collect('checkbox')" value="1" label="I accept agreement Read agreement" data-vv-name="checkbox" type="checkbox" required></v-checkbox>
          <v-btn type="submit" color="success" block>Register</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </form>
</template>

<script>
import { EventBus } from '@/EventBus'
import { sync } from 'vuex-pathify'
import axios from 'axios'
import Swal from 'sweetalert2'
const CONNECT = require('@/config')
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueSweetAlert from 'vue-sweetalert'

Vue.use(VueSweetAlert)

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    username,
    password,
    firstname,
    lastname,
    email,
    tel,
    age,
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        username: {
          required: () => 'Username can not be empty',
          max: 'The username field may not be greater than 10 characters'
          // custom messages
        },
        password: {
          required: () => 'Password can not be emptysdasdsa',
          max: 'The password field may not be greater than 10 characters'
          // custom messages
        },
        firstname: {
          required: () => 'Firstname can not be empty',
          max: 'The firstname field may not be greater than 10 characters'
          // custom messages
        },
        lastname: {
          required: () => 'Lastname can not be emptysdasdsa',
          max: 'The lastname field may not be greater than 10 characters'
          // custom messages
        },
        tel: {
          required: () => 'Tel can not be emptysdasdsa',
          max: 'The tel field may not be greater than 10 characters'
          // custom messages
        },
        age: {
          required: () => 'Age can not be emptysdasdsa',
          max: 'The age field may not be greater than 3 characters'
          // custom messages
        }
      }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {

    submit () {
      this.$validator.validate().then(valid => {
        console.log(valid)
        if (valid) {
          if (
            this.firstname &&
            this.lastname &&
            this.tel &&
            this.age &&
            this.email &&
            this.username &&
            this.password
          ) {
            this.valispass()
          } else {
            this.validateFill = ''
            this.validatePassword = ''
          }
        }
        // this.$validator.validateAll()

      })
    },
    async valispass () {
      if (this.password === this.confirmpassword) {
        try {
          var { data } = await this.axios.post(
            `${CONNECT.API}/user/insertuser`,
            {
              username: this.username,
              password: this.password,
              firstname: this.firstname,
              lastname: this.lastname,
              age: this.age,
              tel: this.tel,
              email: this.email
            }
          )
          this.$swal("Register Successfully!", "Now you can login", "success")
          this.$router.push('/')
          console.log(this.username, password, firstname, lastname, email, tel)
        } catch (error) {
          console.dir(error)
        }
      } else {
        this.validatePassword = 'Password not match'
        this.validateFill = ''
      }

    },
  }
}
</script>

<style scoped>
.validate {
  color: red;
}
</style>