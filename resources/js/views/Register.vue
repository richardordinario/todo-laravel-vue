<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" lg="4" class="primary hidden-md-and-down"/>
      <v-col cols="12" lg="8" class="d-flex flex-column align-center justify-center">
        <v-sheet width="350" flat>
          <div class="mx-1 mb-5">
            <div class="text-h4 primary--text font-weight-bold">
              Registration
            </div>
            <div class="caption grey--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
          </div>
          <v-form @submit.prevent="register">
            <label class="caption grey--text ma-1">Username</label>
             <v-text-field
              outlined
              dense
              autofocus
              class="custom-field body-2 font-weight-bold mb-2"
              :hide-details="!errs.username"
              v-model="form.username"
              :error-messages="errs.username"
            />
            <label class="caption grey--text ma-1">Email</label>
            <v-text-field
              outlined
              dense
              type="email"
              :hide-details="!errs.email"
              class="custom-field body-2 font-weight-bold mb-2"
              v-model="form.email"
              :error-messages="errs.email"
            />
            <label class="caption grey--text ma-1">Password</label>
            <v-text-field
              outlined
              dense
              type="password"
              :hide-details="!errs.password"
              class="custom-field body-2 font-weight-bold mb-2"
              v-model="form.password"
              :error-messages="errs.password"
            />
            <label class="caption grey--text ma-1">Password Confirmation</label>
            <v-text-field
              outlined
              dense
              type="password"
              hide-details
              class="custom-field body-2 font-weight-bold"
              v-model="form.password_confirmation"
            />
            <v-btn type="submit" block color="primary" large class="font-weight-bold rounded-border my-7">
              Register
            </v-btn>

            <div class="grey--text caption text-center my-10">
              Already have an account? <a href="/login" class="text-decoration-none">Login</a>
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
    form: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    },

    errs: []

  }),

  computed: {
    ...mapState({
        errors: (state) => state.errors
    })
  },

  methods: {
    ...mapActions(['registerAction']),

    register() {
      this.registerAction(this.form)
      .then(_ => {
        if(this.$errors()) {
          return this.errs= this.errors
        }
      })
    }
  }
}
</script>
