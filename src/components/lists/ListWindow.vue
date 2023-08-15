<template>
    <el-container>
        <el-div class="listWindow">
            <h3>Learn VueJS</h3>
            <h4 class="addnewtask">+ Add new task</h4>
            <hr />
            <el-div class="tasks">
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Basic HTML, CSS, and JavaScript</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>What is Vue.js</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Creating a Project with Vue CLI</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Vue Components and Directives</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Creating Components</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Data Binding</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Events and Methods</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Computed Properties and Watchers longtextlongtextlongtext</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Form Handling</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Routing (Vue Router)</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>API Requests (Vue Resource or Axios)</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>State Management (Vuex)</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Lifecycle Hooks</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Filters and Mixins</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Testing</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Production and Deployment</el-div>
                <el-div class="task"><el-icon class="iconAim">
                        <Aim />
                    </el-icon>Continued Learning & Practicing</el-div>
                <el-div class="task">
                    <ListItem v-for="(item, index) in todoList" :key="index" :item="item" @removeItem="removeItem(index)" />
                </el-div>
            </el-div>
        </el-div>
    </el-container>
</template>

<script>
import { ref } from 'vue';
import ListItem from './ListItem.vue';

export default {
    components: {
        ListItem
    },
    setup() {
        const todoList = ref([
            { text: 'Örnek öğe 1', done: false },
            { text: 'Örnek öğe 2', done: true },
            // Diğer yapılacak öğeler...
        ]);

        const removeItem = (index) => {
            todoList.value.splice(index, 1);
        };

        return {
            todoList,
            removeItem
        };
    }
};
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}

.iconAim {
    position: absolute;
    margin-left: 315px;
    font-size: 25px;
    margin-top: -5px;
    color: gray;
}

.addnewtask {
    position: absolute;
    margin-top: -6px;
    border-radius: 13px;
    right: 30px;
    color: white;
    background-color: #68b747;
    padding-top: 6px;
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 3px;
    cursor: pointer;
    border: 2px solid #68b747;
    transition: all 0.2s ease-in-out;
}

.addnewtask:hover {
    background-color: white;
    border: 2px solid #68b747;
    color: #68b747;
    margin-top: -6px;
}

.task {
    display: inline-block;
    border: 3px solid #68b747;
    border-radius: 13px;
    padding: 10px;
    width: 305px;
    margin-top: 20px;
    margin-left: 7px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: rgb(74, 74, 74);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 40px;
}

.task:hover {
    background-color: #68b747;
    color: white;
    transition: all 0.1s ease-in-out;
}

.tasks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 100%;
}

.listWindow {
    height: 636px;
    background-color: white;
    margin: 13px;
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 1125px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #68b747;
}

.listWindow h3 {
    color: #68b747;
    margin-top: 0px;
    cursor: default;
}

.listWindow hr {
    width: 1146px;
    margin-left: -10px;
    margin-top: -11px;
    border-top: 2px solid #68b747;
    border-bottom: 1px solid #68b747;
}
</style>