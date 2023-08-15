<template>
    <el-container>
        <el-container>
            <el-main>
                <h1 class="baslikMain">Streamline Your Day with Our Task Management Platform.</h1>
                <el-div class="rowDiv">
                    <el-div>
                        <el-image style="width: 300px; height: 300px; margin-right: 50px;" :src=resim class="imgMain" />
                    </el-div>
                    <el-div class="metin">
                        <h4>Effortlessly manage your tasks, set priorities,</h4>
                        <h4>and achieve your goals with our user-friendly interface.</h4>
                        <hr class="hrMain" />
                        <h4>Streamline your workflow, stay organized,</h4>
                        <h4>and make progress efficiently with our platform.</h4>
                        <hr class="hrMain" />
                        <h4>Simplify your task management, prioritize effectively,</h4>
                        <h4>and conquer your objectives using our interface.</h4>
                    </el-div>
                </el-div>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import resim from '../assets/todoList.png'
</script>
<style scoped>
.hrMain {
  width: 500px;
  color: #1f863a;
  margin-top: -160px;
}

.baslikMain {
  font-size: 35px;
}

.rowDiv {
  display: flex;
  flex-direction: row;
}

.metin h1 {
  margin-top: -30px;
  margin-bottom: 30px;
}

.metin h4 {
  margin-top: -150px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin: 15px;
  margin-top: 12px;
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 660px;
  display: flex;
  flex-direction: column;
  ;
  align-items: center;
  justify-content: center;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Spartan:wght@300;400;500&display=swap");

* {
  font-family: "Spartan", sans-serif;
}

.imgMain {
  height: 70px;
  width: 70px;
  -o-object-fit: cover;
  object-fit: cover;
  transform: translateX(-50%);
  transition: var(--transition);
  animation: animated 2.3s infinite;
}

@keyframes animated {
  0% {
    transform: translateY(-40px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-40px);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.metin {
  position: relative;
  z-index: 0;
  width: 700px;
  height: 300px;
  border-radius: 13px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 165px;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -100%;
    top: -100%;
    width: 300%;
    height: 300%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50%, 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#1f863a, #1f863a), linear-gradient(#dbffcc, #dbffcc);
    animation: rotate 6s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 5px;
  }
}
</style>