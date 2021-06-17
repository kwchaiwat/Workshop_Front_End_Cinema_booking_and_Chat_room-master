<template>
  <v-data-table :headers="headers" :items="datas" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.firstname }}</td>
      <td>{{ props.item.lastname }}</td>
      <td>{{ props.item.tel }}</td>
      <td>{{ props.item.lineid }}</td>
      <td>
        <v-icon small class="mr-2" @click="editItem(props.item)">
          edit
        </v-icon>
        <v-icon small @click="deleteItem(props.item)">
          delete
        </v-icon>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { EventBus } from '@/EventBus'
import { sync } from 'vuex-pathify'
export default {
  computed: {
    datas: sync('items')
  },
  data () {
    return {
      headers: [
        {
          text: 'firstname',
          align: 'left',
          value: 'firstname'
        },
        { text: 'lastname', align: 'left', value: 'lastname' },
        { text: 'tel', align: 'left', value: 'tel' },
        { text: 'lineid', align: 'left', value: 'lineid' },
        { text: 'action', align: 'left', sortable: false }
      ]
    }
  },
  mounted () {
    EventBus.$on('getData', this.getData)
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        var { data } = await this.axios.get('http://labkk.ga:3000/persons')
        console.log(data)
        this.datas = data
      } catch (error) {
        console.log(error.message)
      }
    },
    async createdData () {
      try {
        var { data } = await this.axios.post(
          'http://labkk.ga:3000/person',
          this.editItem
        )
      } catch (error) {
        console.log(error.message)
      }
    },

    editItem (item) {
      EventBus.$emit('editItem', item)
    },
    async deleteItem (item) {
      if (confirm('Are you sure you want to delete this item?')) {
        console.log(item)
        try {
          let data = await this.axios.delete(
            'http://labkk.ga:3000/person/' + item._id
          )
          swal('สำเร็จ', 'ลบข้อมูลเรียบร้อย', 'success', {
            buttons: false,
            timer: 2000 //คือหน่วยมิมิเซล1.5วิแล้วมันจะปิดไบ
          })
          this.getData()
        } catch (error) {
          console.log(error.message)
        }
      }
    }
  }
}
</script>

