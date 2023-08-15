<template>
    <el-container>
        <el-header>
            <el-div class="logoNav">
                <el-icon :size="30" :color="white" style="margin-top:31px; margin-right: 10px;">
                    <Checked />
                </el-icon>
                <h1>TASKS</h1>
            </el-div>
            <el-div class="divNav">
                <router-link to="/" class="routerLink">
                    <h3>HOME</h3>
                </router-link>
                <router-link to="/Lists" class="routerLink">
                    <h3>LISTS</h3>
                </router-link>
                <router-link to="/Calendar" class="routerLink">
                    <h3>CALENDAR</h3>
                </router-link>
                <router-link to="/Notes" class="routerLink">
                    <h3>NOTES</h3>
                </router-link>
            </el-div>
            <el-div class="profileNav">
                <router-link to="/Profile" class="routerLink">
                    <el-icon :size="30" style="vertical-align: middle">
                        <UserFilled />
                    </el-icon>
                </router-link>
            </el-div>
        </el-header>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.routerLink {
    text-decoration: none;
    color: white;
}

.el-header {
    background-color: #68b747;
    color: white;
    text-align: center;
    line-height: 60px;
    border-radius: 13px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    align-items: center;
    position: relative;
    justify-content: space-between;
    text-align: center;
    display: flex;
}

.divNav {
    display: flex;
    flex-direction: row;
    margin-right: 100px;
}

.divNav h3 {
    min-width: 100px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 13px;
    transition: background-color 0.3s ease;
}

.divNav h3:hover {
    color: rgb(225, 225, 225);
}

.logoNav {
    cursor: default;
    display: flex;
    flex-direction: row;
}

.profileNav {
    cursor: pointer;
    margin-bottom: 10px;
}

.el-header el-div {
    margin-top: 5px;
}</style>