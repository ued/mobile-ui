<template>
    <div>
      <input v-model="newTodo" v-on:keyup.enter="addTodo">
      <ul>
       <li v-for="todo in todos">
         <span>{{ todo.text }}</span>
         <button v-on:click="removeTodo($index)">X</button>
       </li>
      </ul>
      <button v-on:click="greet">Greet</button>
      <input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
    </div>

</template>

<script>
export default {
  data: function () {
    return {
      newTodo: '',
      todos: [
        { text: 'Add some todos' }
      ],
      checked: true
    }
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    },
    greet: function (event) {
      // 方法内 `this` 指向 vm
      window.alert('Hello ' + this.newTodo + '!')
      // `event` 是原生 DOM 事件
      window.alert(event.target.tagName)
    }
  }
}
console.log(window.Vue)
</script>

<style scoped>

</style>
