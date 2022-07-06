<template>
  <v-app>
    <TopBar :user="user"/>
    <v-main>
      <v-sheet height="95vh" width="100vw" color="primary">
        <v-container fill-height>
          <v-row justify="center" align="center">
            <v-col cols="12" lg="10">
              <v-row v-if="!loading">
                <v-col cols="12" lg="4">
                  <Todos :data="todos"/>
                </v-col>
                <v-col cols="12" lg="8">
                  <SubTodos :data="todo" v-if="todos.length>0"/>
                </v-col>
              </v-row>
              <div class="d-flex align-center justify-center" v-else>
                <v-progress-circular
                  indeterminate
                  color="#fff"
                ></v-progress-circular>
              </div>
            </v-col>

          </v-row>

        </v-container>


      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Todos from '../components/Todos.vue'
import TopBar from '../components/TopBar.vue'
import SubTodos from '../components/SubTodos.vue'

export default {
  components: {
    Todos,
    TopBar,
    SubTodos
  },
  data: () => ({
    loading: true,
  }),
  computed: {
    ...mapState({
      todo: (state) => state.todo,
      todos: (state) => state.todos,
      user: (state) => state.user,
    })
  },

  mounted() {
    this.authAction().then(_ => {
      this.loading=false
      this.getTodosAction()
    })


  },

  methods: {
    ...mapActions(['getTodosAction','authAction'])
  }
}
</script>
