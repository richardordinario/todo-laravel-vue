<template>
  <section>
    <v-sheet  color="transparent" style="border: 2px solid #fff !important; border-radius: 8px;"
      max-width="500"
      class="mx-auto"
    >
      <div class="ma-3 d-flex align-center justify-space-between">
        <div class="text-h6 white--text mx-2" style="max-height: 50px; overflow-y: auto;" contenteditable @blur="updateTodo">{{data.title}}</div>
        <div class="d-flex flex-column">
          <div class="d-flex align-center my-2 " style="border-bottom: 2px solid #fff">
          <input v-model="title" type="text" class="flex-grow-1 input-add mx-1" placeholder="New Sub list"/>
            <v-btn icon color="#fff" @click="save">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <div class="white--text caption font-weight-bold">{{errs.title ? errs.title[0] : ''}}</div>
        </div>
      </div>
      <div style="border: 1px solid #ffff !important" class=""/>
      <div class="col-12 col-lg-10 ma-2">
        <div class="d-flex align-center justify-space-between my-2 pa-2"
        style="border: 2px solid #fff !important; border-radius: 8px;"
        v-for="item in data.sub_todos" :key="item.id">
          <div class="">
            <div contenteditable
              style="max-height: 30px; overflow-y: auto;"
              class="body-1 white--text font-weight-bold"
              @blur="updateSubTodo($event, item.id)"
            >
              {{item.title}}
            </div>
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
import { mapActions, mapState } from 'vuex'
export default {
  props: ['data'],

  data: () => ({
    title: '',
    errs: []
  }),

  computed: {
    ...mapState({
      errors: (state) => state.errors
    })
  },

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
      }).then(_ => {
        this.errs= []
        if(this.$errors()) {
          console.log(this.errors);
          alert(`${this.errors.title[0]}`)
          location.reload()
        }
      })
    },

    save() {
      this.createSubTodoAction({
        todo_id: this.data.id,
        title: this.title
      }).then(_ => {
        this.errs= []
        if(this.$errors()) {
          console.log(this.errors);
          return this.errs= this.errors
        }
        this.title = ''
      })
    },

    updateSubTodo(e, id) {
      let title = e.target.innerText

      this.updateSubTodoAction({
        id: id,
        _method: 'PUT',
        title: e.target.innerText
      }).then(_ => {
        this.errs= []
        if(this.$errors()) {
          console.log(this.errors);
          alert(`${this.errors.title[0]}`)
          location.reload()
        }
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
