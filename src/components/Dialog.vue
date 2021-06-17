<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field @keyup.enter="save" v-model="editedItem.firstname" label="firstname"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field @keyup.enter="save" v-model="editedItem.lastname" label="lastname"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field @keyup.enter="save" v-model="editedItem.tel" label="tel"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field @keyup.enter="save" v-model="editedItem.lineid" label="lineid"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="save">save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from '@/EventBus'
import { sync } from 'vuex-pathify'
import swal from 'sweetalert'
// import { constans } from 'crypto'

export default {
  data () {
    return {
      dialog: false,
      formTitle: '',
      editedItem: {},
      action: ''
    }
  },
  computed: {
    datas: sync('items')
  },
  mounted () {
    EventBus.$on('newItem', this.newItem)
    EventBus.$on('editItem', this.editItem)
  },
  methods: {
    close () {
      this.dialog = false
    },
    newItem () {
      this.formTitle = 'New Item'
      this.action = 'newItem'
      this.dialog = true
    },
    editItem (item = 'component') {
      this.formTitle = 'Edit Item'
      this.action = 'editItem'
      this.dialog = true
      this.editedItem = item
    },
    async save () {
      if (this.action === 'newItem') {
        if (
          this.editedItem.firstname &&
          this.editedItem.lastname &&
          this.editedItem.tel &&
          this.editedItem.lineid
        ) {
          console.log(this.editedItem)
          this.close()

          try {
            var { data } = await this.axios.post(
              'http://labkk.ga:3000/person',
              this.editedItem
            )
            EventBus.$emit('getData')
          } catch (error) {
            console.log(error.message)
          }
        } else {
          // alert ("กรุณากรอกข้อมูล")
          swal('คำเตือน', 'กรุณากรอกข้อมูล', 'warning', {
            buttons: false,
            timer: 1500 //คือหน่วยมิมิเซล1.5วิแล้วมันจะปิดไบ
          })
        }
      } else if (this.action === 'editItem') {
        try {
          var { data } = await this.axios.put(
            'http://labkk.ga:3000/person/' + this.editedItem._id,
            this.editedItem
          )
          EventBus.$emit('getData')
          swal('สำเร็จ', 'แก้ไข้ข้อมูลเรียบร้อย', 'success', {
            buttons: false,
            timer: 2000 //คือหน่วยมิมิเซล1.5วิแล้วมันจะปิดไบ
          })
          this.close()
        } catch (error) {
          console.log(error.message)
        }
      }
    }
  }
}
</script>
