<!--
 * @Author: ximenkun  307096282@qq.com
 * @LastEdit: ximenkun
 * @Description: 
 * @params: 
 * @Date: 2023-03-13 18:00:12
 * @LastEditTime: 2023-03-14 14:57:44
 * @FilePath: \demo\src\pages\message\index.vue
-->
<template>
  <view class="demo-container">
    <view>
      <van-steps :active="active">
        <van-step>选择学校</van-step>
        <van-step>选择班级</van-step>
        <van-step>绑定小孩</van-step>
        <van-step>绑定完成</van-step>
      </van-steps>

      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @clear="onCancel"
      />
      <van-list class="list">
        <van-cell
          v-for="(item, index) in list"
          :key="item.id"
          :title="item.name"
          @click="handleClick(index)"
        />
      </van-list>
    </view>

    <view class="footer-next">
      <van-button type="primary" @click="onNext">下一步</van-button>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const active = ref(0); // 步骤条的下标
const value = ref(''); // 输入框的值

const data = [
  {
    id: 1,
    name: '长沙市周南梅溪湖中学',
  },
  {
    id: 2,
    name: '长沙市周南梅溪湖小学',
  },
  {
    id: 3,
    name: '长沙市第二十一中学',
  },
  {
    id: 4,
    name: '高新区雷锋第二小学',
  },
  {
    id: 5,
    name: '长沙市雨花区新华都一中',
  },
  {
    id: 6,
    name: '高新区金桥小学',
  },
];

const list = ref<any>([]);

// 下一步的操作
const onNext = () => {
  active.value++;
  if (active.value >= 3) {
    active.value = 3;
  }
  console.log(active.value);
};

const onSearch = () => {
  const val = value.value;
  list.value = data.filter((item) => {
    return item.name.includes(val);
  });
  console.log(list.value);
};

const onCancel = () => {
  list.value = [];
};

const handleClick = (index: any) => {
  const clickedItem = list.value[index];
  console.log('Clicked item:', clickedItem);
  document.querySelectorAll('.van-cell').forEach((item) => {
    item.classList.remove('active');
  });
  const el = document.querySelectorAll('.van-cell')[index + 1];
  el.classList.add('active');
};
</script>
<style lang="scss" scoped>
.demo-container {
  height: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .list {
    .van-cell {
      width: 100%;
    }
  }

  .active {
    width: 100%;
    background: #ffffcc !important;
  }
  .footer-next {
    .van-button {
      width: 100%;
    }
  }
}
</style>
