<template>
  <section>
    <v-sheet  color="transparent" style="border: 2px solid #fff !important; border-radius: 8px;"
      max-width="500"
      class="mx-auto"
    >
      <div class="ma-3 d-flex align-center justify-space-between">
        <div class="text-h6 white--text mx-2" contenteditable @blur="updateTodo">{{data.title}}</div>
        <div class="d-flex align-center my-2 " style="border-bottom: 2px solid #fff">
          <input v-model="title" type="text" class="flex-grow-1 input-add mx-1" placeholder="New Sub list"/>
          <v-btn icon color="#fff" @click="save">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
      <div style="border: 1px solid #ffff !important" class=""/>
      <div class="col-12 col-lg-10 ma-2">
        <div class="d-flex align-center justify-space-between my-2 pa-2"
        style="border: 2px solid #fff !important; border-radius: 8px;"
        v-for="item in data.sub_todos" :key="item.id">
          <div contenteditable
            class="body-1 white--text font-weight-bold"
            @blur="updateSubTodo($event, item.id)"
          >
            {{item.title}}
          </div>
          <div class="d-flex align-center">
            <v-checkbox
              @change="status(item)"
              class="mb-2"
              hide-details
              color="white"
              dense
              v-model="item.status"
            ></v-checkbox>
            <v-btn icon small color="#fff" @click="remove(item.id)">
              <v-icon small>mdi-delete-outline</v-icon>
            </v-btn>
          </div>

        </div>
      </div>
    </v-sheet>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['data'],

  data: () => ({
    title: ''
  }),

  methods: {
    ...mapActions([
      'updateTodoAction',
      'createSubTodoAction',
      'updateSubTodoAction',
      'deleteSubTodoAction',
    ]),

    updateTodo(e) {
      console.log(e);
      this.updateTodoAction({
        id: this.data.id,
        _method: 'PUT',
        title: e.target.innerText
      })
    },

    save() {
      this.createSubTodoAction({
        todo_id: this.data.id,
        title: this.title
      }).then(_ => {
        this.title = ''
      })
    },

    updateSubTodo(e, id) {
      this.updateSubTodoAction({
        id: id,
        _method: 'PUT',
        title: e.target.innerText
      })
    },

    remove(id) {
      this.deleteSubTodoAction({
        id: id,
        todo_id: this.data.id
      })
    },

    status(item) {
      console.log(item);

      this.updateSubTodoAction({
        id: item.id,
        title: item.title,
        status: item.status,
        _method: 'PUT',
      })
    }

  },

}
</script>

<style>

</style>
