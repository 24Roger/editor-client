<script>
import { defineComponent } from 'vue';
import nodeHeader from './nodeHeader.vue';

export default defineComponent({
  components: {
    nodeHeader,
  }
});
</script>

<template>
  <div ref="elseRef">
    <nodeHeader title="Else" />
  </div>
</template>
