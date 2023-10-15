<template>
  <div class="unauthorized-window">
    <div class="notification">ВЫ НЕ АВТОРИЗИРОВАНЫ</div>
    <button
      class="amo-button"
      onclick="location.href='https://www.amocrm.ru/oauth?client_id=8676edc3-ebe3-48f4-8803-dc31bae3082c&state=12345&mode=post_message'"
    >АВТОРИЗИРОВАТЬСЯ В AMOCRM</button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "UnauthorizedWindow."
})
</script>

