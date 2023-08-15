<template>
    <el-container>
        <el-div class="listView">
            <ListSidebar />
            <ListWindow />
        </el-div>
    </el-container>
</template>

<script setup>
import ListSidebar from '../components/lists/ListSidebar.vue'
import ListWindow from '../components/lists/ListWindow.vue'
</script>

<style scoped>
.listView{
    display: flex;
    flex-direction: row;
}
</style>