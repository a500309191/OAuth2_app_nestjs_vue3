<template>
  <div class="lead-headers">
    <div>Название</div>
    <div>Бюджет</div>
    <div>Статус [id]</div>
    <div>Ответственный [id]</div>
    <div>Дата создания</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "LeadHeadersComponent"
})
</script>