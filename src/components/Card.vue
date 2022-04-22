<script >
import { useStore } from 'vuex';
import router from '../router';

export default {
  props: ['project'],
  setup() {
    const store = useStore();

    const openProject = (project) => {
      store.dispatch('getProject', project);
      router.push('/drawflow');
    }

    return {
      openProject
    }
  },
}
</script>

<template>
  <el-row>
    <el-col :span="8" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img src="" class="image" />
        <div style="padding: 14px">
          <span>{{ project.uid }}</span>
          <div class="bottom">
            <time class="time">Draw Flow</time>
            <el-button type="success" class="button" @click="openProject(project)" round align-center>Open
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>