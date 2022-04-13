<script>
import {
    defineComponent,
    ref,
    getCurrentInstance,
    nextTick,
    onMounted
} from 'vue'
import nodeHeader from './nodeHeader.vue'

export default defineComponent({
    components: {
        nodeHeader
    },
    setup() {
        const scriptRef = ref(null);
        const textarea = ref('');
        let df = null
        const nodeId = ref(0);
        const dataNode = ref({});
        const drawer = ref(false);
        const direction = ref('rtl');
        const handleClose = (done) => {
            ElMessageBox.confirm('Are you sure you want to close this?')
                .then(() => {
                    done()
                })
                .catch(() => {
                    // catch error
                })
        }
        df = getCurrentInstance().appContext.config.globalProperties.$df.value;

        const updateSelect = (value) => {
            dataNode.value.data.script = value;
            df.updateNodeDataFromId(nodeId.value, dataNode.value);
        }

        onMounted(async () => {
            await nextTick()
            nodeId.value = scriptRef.value.parentElement.parentElement.id.slice(5)
            dataNode.value = df.getNodeFromId(nodeId.value)
            textarea.value = dataNode.value.data.script;
        });

        return {
            scriptRef,
            drawer,
            direction,
            handleClose,
            textarea,
            updateSelect
        }
    },
});
</script>

<template>
    <div ref="scriptRef">
        <nodeHeader title="Script" />
        <p>Click "Edit" to write</p>
        <el-button type="info" size="small" @click="drawer = true">Edit</el-button>
        <teleport to="body">
            <el-drawer v-model="drawer" title="Edit Optinos" :direction="direction" :before-close="handleClose">
                <p>Autosave</p>
                <el-input v-model="textarea" :rows="8" df-script @change="updateSelect" type="textarea"
                    placeholder="Please input" />
            </el-drawer>
        </teleport>

    </div>
</template>
<style scoped>
p {
    margin: 5px;
    margin-bottom: 10px;
}
</style>
