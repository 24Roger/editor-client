<script>
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  ref,
  nextTick
} from 'vue';
import nodeHeader from './nodeHeader.vue';

export default defineComponent({
  components: {
    nodeHeader
  },
  setup() {
    const numberRef = ref(null);
    const nodeId = ref(0);
    const number = ref(1);
    const dataNode = ref({});
    let df = null;

    df = getCurrentInstance().appContext.config.globalProperties.$df.value;

    const updateValue = (number) => {
      dataNode.value.data.number = number;
      df.updateNodeDataFromId(nodeId.value, dataNode.value);
    }

    onMounted(async () => {
      await nextTick()
      nodeId.value = numberRef.value.parentElement.parentElement.id.slice(5)
      dataNode.value = df.getNodeFromId(nodeId.value)
      number.value = dataNode.value.data.number;
    });

    return {
      numberRef,
      number,
      updateValue
    }
  }
})
</script>

<template>
  <div ref="numberRef">
    <nodeHeader title="Number" />
    <el-input-number type="number" v-model="number" @change="updateValue" size="small" />
  </div>
</template>