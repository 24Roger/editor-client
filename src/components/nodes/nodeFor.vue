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
    const forRef = ref(null);
    const nodeId = ref(0);
    const value = ref(null);
    const start = ref(null);
    const stop = ref(null);
    const dataNode = ref({});
    let df = null;

    df = getCurrentInstance().appContext.config.globalProperties.$df.value;

    const updateInput = (value) => {
      dataNode.value.data.value = value;
      df.updateNodeDataFromId(nodeId.value, dataNode.value);
    }

    const updateStart = (value) => {
      dataNode.value.data.start = value;
      df.updateNodeDataFromId(nodeId.value, dataNode.value);
    }

    const updateStop = (value) => {
      dataNode.value.data.stop = value;
      df.updateNodeDataFromId(nodeId.value, dataNode.value);
    }

    onMounted(async () => {
      await nextTick();
      nodeId.value = forRef.value.parentElement.parentElement.id.slice(5);
      dataNode.value = df.getNodeFromId(nodeId.value);
      value.value = dataNode.value.data.value;
      start.value = dataNode.value.data.start;
      stop.value = dataNode.value.data.stop;
    });

    return {
      forRef,
      value,
      start,
      stop,
      updateInput,
      updateStart,
      updateStop
    }
  }
});
</script>

<template>
  <div ref="forRef">
    <nodeHeader title="For" />
    <el-input v-model="value" @change="updateInput" size="small"></el-input>
    <br />
    <el-input-number v-model.number="start" @change="updateStart" placeholder="starts in" size="small" />
    <el-input-number v-model.number="stop" @change="updateStop" placeholder="stops at" size="small" />
  </div>
</template>