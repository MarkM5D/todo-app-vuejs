<template>
    <el-div class="calendar">
        <el-calendar v-model="value" />
    </el-div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>

<style scoped>
.calendar{
    display: flex;
    border-radius: 13px;
    border: 4px solid #68b747;
    padding: 10px;
    padding-bottom: 5px;
    width: 96.5%;
    margin-top: 10px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 650px;
}
.el-calendar__header {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    border-bottom: 0px;
    width: 97%;
}

.el-calendar__body {
    padding: 12px 20px 35px;
    width: 97%;
}
</style>