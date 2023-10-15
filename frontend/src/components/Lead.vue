<template>
  <div class="lead">
    <div>{{ lead.name }}</div>
    <div>{{ lead.price }}</div>
    <div>{{ lead.status_id }}</div>
    <div>{{ lead.responsible_user_id }}</div>
    <div>{{ formatDate(lead.created_at) }}</div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue"
import { LeadType } from "../types/LeadType"

export default defineComponent({
  name: "LeadComponent",
  props: {
    lead: {
      type: Object as PropType<LeadType>,
    }
  },
  methods: {
    formatDate(time: number): string {
      const date = new Date(time * 1000)
      return date.toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })
    },
  }
})
</script>