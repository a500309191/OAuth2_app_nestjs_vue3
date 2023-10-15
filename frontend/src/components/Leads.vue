<template>
  <div class="leads">
    <Filter @input="setQuery"/>
    <div class="leads-table">
      <LeadHeaders />
      <div class="leads-list">
        <Lead v-for="lead in leads" :key="lead.id" :lead="lead"/>
      </div> 
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import Filter from "./Filter.vue"
import Lead from "./Lead.vue"
import LeadHeaders from "./LeadHeaders.vue"
import { LeadType } from "../types/LeadType"


interface leadsState {
  queryParam: string
  leads: LeadType[]
}

export default defineComponent({
  name: "LeadsComponent",
  props: ["accessToken"],
  components: { Filter, Lead, LeadHeaders},
  data(): leadsState {
    return {
      queryParam: "",
      leads: []
    }
  },
  methods: {
    async setQuery(event: Event): Promise<void> {
      let value = (event.target as HTMLInputElement).value
      this.queryParam = value
      if (this.queryParam.length > 2 || this.queryParam.length == 0) {
        this.getData()
      }
    },
    async getData(): Promise<void> {
      let data = await fetch(
        `http://localhost:3000/api/leads?query=${this.queryParam}`, 
        {
          method: "GET",
          headers: { "Authorization": `Bearer ${this.accessToken}` }
        }
      ).then(response => response.json())
      if (data) {
        this.leads = data._embedded.leads
      } else {
        this.leads = []
      }
    },
  },
  async mounted() {
    this.getData()
  },

})
</script>
