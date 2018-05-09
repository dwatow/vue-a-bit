<template>
  <div>
    <h1>My To Do List</h1>
    <input type="text" v-model="newItem">
    <button type="button" name="button" @click="addItemToList()">Add New One</button>
    <ul>
      <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      newItem: '',
      listItems: ['幫結衣穿內褲', '穿結衣的內褲', '幫結衣曬四角褲']
    }
  },
  methods: {
    addItemToList () {
      if (this.newItem !== '') {
        this.listItems.push(this.newItem)
        this.newItem = ''
      }
    }
  }
}
</script>
