<template>
  <div class="app">
    <UnauthorizedWindow v-if="!isAuth"/>
    <Leads v-if="isAuth" :accessToken="accessToken"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Leads from "./components/Leads.vue"
import UnauthorizedWindow from "./components/UnauthorizedWindow.vue"

interface appState {
  accessToken: null | string
  isAuth: boolean
}

export default defineComponent({
  name: "App",
  components: { Leads, UnauthorizedWindow },
  data(): appState {
    return {
      accessToken: null,
      isAuth: false,
    }
  },
  mounted() {
    const accessToken = new URLSearchParams(window.location.search).get("access_token")
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken)
      window.location.href = window.location.origin
      this.isAuth = true
      this.accessToken = accessToken
    } else {
      const accessToken = localStorage.getItem("accessToken")
      if (accessToken) {
        this.isAuth = true
        this.accessToken = accessToken
      }
    }
  },
})
</script>
