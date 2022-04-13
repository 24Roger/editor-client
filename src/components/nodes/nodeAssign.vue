<script>
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  ref,
  nextTick,
} from 'vue';
import nodeHeader from './nodeHeader.vue';

export default defineComponent({
  components: {
    nodeHeader
  },
  setup() {
    const assingRef = ref(null);
    const nodeId = ref(0);
    const value = ref(null);
    const dataNode = ref({});
    let df = null;

    df = getCurrentInstance().appContext.config.globalProperties.$df.value;

    const updateAssign = (value) => {
      dataNode.value.data.value = value;
      df.updateNodeDataFromId(nodeId.value, dataNode.value);
    }

    onMounted(async () => {
      await nextTick();
      nodeId.value = assingRef.value.parentElement.parentElement.id.slice(5)
      dataNode.value = df.getNodeFromId(nodeId.value);
      value.value = dataNode.value.data.value
    });

    return {
      assingRef,
      value,
      updateAssign
    }
  }
})
</script>

<template>
  <div ref="assingRef">
    <nodeHeader title="Assign" />
    <el-input v-model="value" @change="updateAssign" size="small" />
  </div>
</template>