<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Card from '../components/Card.vue';

export default {
  components: {
    Card
  },
  setup() {
    const store = useStore();

    onMounted(() => {
       store.dispatch('getProjects')
    })

    const projects = computed(() => store.state.projects)
    const data = computed(() => store.state.project)

    return {
      projects,
      data
    }
  }
}
</script>

<template>
  <div class="row">
    <Card v-for="project of projects" :key="project.uid" :project="project" />
  </div>
  <br />
</template>