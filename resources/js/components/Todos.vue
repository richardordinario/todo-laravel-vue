<template>
  <section>
    <div class="text-h5 font-weight-bold white--text mb-4">My Lists</div>
    <v-sheet class="overflow-y-auto my-1" max-height="400" color="transparent">
      <v-list color="transparent" dense>
        <v-list-item-group v-model="tab" mandatory>
          <v-list-item v-for="item in data" :key="item.id" :value="item.id">
           <!-- <v-list-item-icon class="mt-3">
              <v-icon dense color="#fff">mdi-circle-outline</v-icon>
            </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title class="white--text body-1 font-weight-normal">
                {{item.title}}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon small color="#fff" @click.stop="remove(item.id)">
                <v-icon dense small>mdi-delete-outline</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-sheet>

    <div class="d-flex align-center my-2" style="border-bottom: 2px solid #fff">
      <input v-model="title" type="text" class="flex-grow-1 input-add mx-1" placeholder="New lists"/>
      <v-btn icon color="#fff" @click="save">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div class="white--text font-weight-bold">{{errs.title ? errs.title[0] : ''}}</div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: ['data'],

  data: () => ({
    title: '',
    tab: null,
    errs: []
  }),
  computed: {
    ...mapState({
      errors: (state) => state.errors
    })

  },
  methods: {
    ...mapActions(['createTodoAction','deleteTodoAction', 'showTodoAction']),

    save() {
      this.createTodoAction({
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

    remove(id) {
      this.deleteTodoAction(id)
    }
  },

  mounted() {
  },

  watch: {
    tab(val) {
      console.log(val);
      this.showTodoAction(val)
    }
  }
}
</script>
