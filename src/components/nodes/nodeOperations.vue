<script>
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  readonly,
  ref,
  nextTick,
} from 'vue';
import nodeHeader from './nodeHeader.vue';

export default defineComponent({
  components: {
    nodeHeader
  },
  setup() {
    const operationsRef = ref(null);
    const nodeId = ref(0);
    const value = ref(null);
    const dataNode = ref({});
    let df = null;

    df = getCurrentInstance().appContext.config.globalProperties.$df.value;

    const selectOperation = readonly([
      {
        value: '+',
        label: '+',
      },
      {
        value: '-',
        label: '-',
      },
      {
        value: '*',
        label: '*',
      },
      {
        value: '/',
        label: '/',
      },
      {
        value: '==',
        label: '==',
      } 
    ]);

    const updateSelect = (value) => {
      dataNode.value.data.value = value;
      df.updateNodeDataFromId(nodeId.value, dataNode.value);
    }

    onMounted(async () => {
      await nextTick();
      nodeId.value = operationsRef.value.parentElement.parentElement.id.slice(5);
      dataNode.value = df.getNodeFromId(nodeId.value);
      value.value = dataNode.value.data.value;
    });

    return {
      operationsRef,
      selectOperation,
      value,
      updateSelect
    }
  }
})
</script>

<template>
  <div ref="operationsRef">
    <nodeHeader title="Operations" />
    <el-select v-model="value" @change="updateSelect" size="small" placeholder="Select an operation" class="m-2">
      <el-option v-for="item in selectOperation" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>