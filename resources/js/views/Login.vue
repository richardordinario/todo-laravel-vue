<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" lg="4" class="primary hidden-md-and-down"/>
      <v-col cols="12" lg="8" class="d-flex flex-column align-center justify-center">
        <v-sheet width="350" flat>
          <v-form @submit.prevent="login">

            <v-text-field
              outlined
              dense
              placeholder="Email Address"
              type="email"
              autofocus
              class="custom-field body-2 font-weight-bold"
              append-icon="mdi-email-outline"
              v-model="email"
              :error-messages="errs.email"
            />

            <v-text-field
              outlined
              dense
              placeholder="Password"
              class="custom-field body-2 font-weight-bold"
              v-model="password"
              :error-messages="errs.password"
              :type="!show?'password':'text'"
              :append-icon="!show?'mdi-eye-outline':'mdi-eye-off-outline'"
              @click:append="show=!show"
            />

            <v-btn type="submit" block color="primary" large class="font-weight-bold rounded-border">Login</v-btn>

            <div class="grey--text caption text-center my-10">
              No registered account yet?
              <a href="/register" class="text-decoration-none">
                Sign up
              </a>
            </div>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data: () => ({
    email: '',
    password: '',
    loading: false,
    errs: [],
    show:false
  }),
  computed: {
    ...mapState({
      errors: (state) => state.errors
    })
  },

  methods: {
    ...mapActions(['loginAction']),

    login() {
      this.loading=true

      this.loginAction({
        email: this.email,
        password: this.password
      }).then( _ => {
        if(this.$errors()) {
          return this.loading=false, this.errs= this.errors
        }
      })
    }
  }
}
</script>
