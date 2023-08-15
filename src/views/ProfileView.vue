<template>
    <el-container>
        <el-div class="profilDiv">
            <el-div class="giris">
                <el-icon class="iconGiris">
                    <UserFilled />
                </el-icon>
                <h1>Log in to Tasks</h1>
                <input class="inputGiris" placeholder="email"/>
                <input class="inputGiris" placeholder="password"/>
                <el-div class="yeniHesap">Log in</el-div>
                <span>Forgotten account ?</span>
            </el-div>
            <el-div class="profilKayit">
                <el-div class="yeniHesap">CREATE NEW ACCOUNT</el-div>
            </el-div>
        </el-div>
    </el-container>
</template>

<script setup>

</script>

<style scoped>

.giris span{
    margin-top: 15px;
    font-size: 15px;
    cursor: pointer;
}
.giris span:hover{
    color: rgb(0, 0, 191);
}
.inputGiris{
    width: 280px;
    height: 30px;
    border-radius: 13px;
    padding: 10px;
    outline: none;
    margin: 10px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.iconGiris {
    font-size: 30px;
}

.yeniHesap {
    display: flex;
    width: 300px;
    height: 50px;
    border-radius: 13px;
    background-color: rgb(0, 176, 0);
    color: white;
    outline: none;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
}

.yeniHesap:hover {
    background-color: rgb(0, 199, 0);
}

.profilKayit {
    background-color: rgb(211, 211, 211);
    width: 1460px;
    height: 125px;
    border-radius: 13px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.giris {
    background-color: rgb(211, 211, 211);
    width: 1460px;
    height: 500px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(75, 75, 75);
    flex-direction: column;
}

.profilDiv {
    margin: 15px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 13px;
    width: 98%;
    height: 630px;
    flex-direction: column;
    padding: 15px;
}</style>