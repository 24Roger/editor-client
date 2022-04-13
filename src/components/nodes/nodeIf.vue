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
    const ifRef = ref(null);
    const nodeId = ref(0);
    const value = ref(null);
    const dataNode = ref({});
    let df = null;

    df = getCurrentInstance().appContext.config.globalProperties.$df.value;

    const selectOperators = readonly([
      {
        value: '>',
        label: '>',
      },
      {
        value: '<',
        label: '<',
      },
      {
        value: '>=',
        label: '>=',
      },
      {
        value: '<=',
        label: '<=',
      },
      {
        value: '==',
        label: '==',
      },
      {
        value: '!=',
        label: '!=',
      }
    ]);

    const updateSelect = (value) => {
      dataNode.value.data.value = value;
      df.updateNodeDataFromId(nodeId.value, dataNode.value);
    }

    onMounted(async () => {
      await nextTick();
      nodeId.value = ifRef.value.parentElement.parentElement.id.slice(5);
      dataNode.value = df.getNodeFromId(nodeId.value);
      value.value = dataNode.value.data.operator;
    });

    return {
      ifRef,
      selectOperators,
      value,
      updateSelect
    }
  }
})
</script>

<template>
  <div ref="ifRef">
    <nodeHeader title="If" />
    <el-select v-model="value" @change="updateSelect" size="small" placeholder="Select an operator" class="m-2">
      <el-option v-for="item in selectOperators" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>