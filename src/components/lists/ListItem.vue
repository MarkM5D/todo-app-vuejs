<template>
    <el-div>
        <input type="checkbox" v-model="isChecked" />
        <span :class="{ 'done': isChecked }">{{ item.text }}</span>
        <button @click="remove">Del</button>
    </el-div>
</template>
  
<script>
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
    props: {
        item: Object
    },
    setup(props, { emit }) {
        const { item } = toRefs(props); // toRefs ile props'ları değişmez hale getiriyoruz
        const isChecked = item.value.done;

        const remove = () => {
            emit('removeItem', item.value);
        };

        return {
            isChecked,
            remove
        };
    }
});
</script>
  
<style>
.done {
    text-decoration: line-through;
}
</style>
  