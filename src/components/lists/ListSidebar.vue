<template>
    <el-container>
        <el-div class="sidebar">
            <h3>Task Lists</h3>
            <hr />
            <el-div class="listeSidebar">
                <!-- Temporary -->
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Today</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Tomorrow</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Work</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>School</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Language</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Learn VueJS</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Market</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Project</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>Films</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>2023</span>
                <span><el-icon class="iconSidebar"><ArrowRightBold /></el-icon>2024</span>
            </el-div>
            <el-div class="footer">
                + Add new list
            </el-div>
        </el-div>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>

.iconSidebar{
    margin-bottom: -5px;
    margin-right: 5px;
}
.listeSidebar{
    display: flex;
    padding: 10px;
    width: 290px;
    color: white;
    flex-direction: column;
    cursor: pointer;
}

.listeSidebar span{
    display: flex;
    margin-bottom: 15px;
    transition: margin-left 0.3s ease-in-out;
}
.listeSidebar span:hover{
    margin-left: 10px;
}
.footer {
    color: white;
    background-color: transparent;
    font-size: small;
    font-weight: 500;
    display: flex;
    position: absolute;
    bottom: 33px;
    cursor: pointer;
    flex-direction: column;
    width: 320px;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    height: 30px;
    align-items: center;
    padding-top: 20px;
    margin-bottom: -9px;
    border-top: 0.1px solid white;
    border-bottom: 0px solid white;
    transition: background-color 0.3s ease;
}

.footer:hover {
    color: #68b747;
    background-color: #fff;
}

.sidebar {
    height: 640px;
    background-color: #68b747;
    margin: 13px;
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.1px solid white;
}

.sidebar h3 {
    color: white;
    margin-top: 0px;
    cursor: default;
}

.sidebar hr {
    width: 318.5px;
    margin-left: -10px;
    margin-top: -11px;
    border-top: 0.1px solid #fff;
    border-bottom: 0px solid #fff;
}
</style>