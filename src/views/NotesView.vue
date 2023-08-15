<template>
    <el-container>
        <el-div class="notes">
            <el-div class="note">Prerequisites<br/><br/> Before diving into Vue.js, it's helpful to have a basic understanding of HTML, CSS, and JavaScript. If you're new to web development, consider learning these technologies first.</el-div>
            <el-div class="note">Official Documentation<br/><br/> Vue.js has comprehensive and well-structured documentation. Start by visiting the Vue.js Documentation to get an overview of the framework and its features. The documentation includes examples, explanations, and code snippets.</el-div>
            <el-div class="note">Online Tutorials and Courses<br/><br/> There are numerous online tutorials and courses available for learning Vue.js. Websites like Udemy, Coursera, and Codecademy offer structured courses. Vue Mastery and Scotch.io also provide free and paid tutorials for all skill levels.</el-div>
            <el-div class="note">Practice with Small Projects<br/><br/> Start with simple projects to practice what you learn. Create to-do lists, simple calculators, or basic CRUD (Create, Read, Update, Delete) applications to reinforce your understanding.</el-div>
            <el-div class="note">Components and Vue Router<br/><br/> Learn about Vue's component-based architecture and how to create reusable components. Also, explore Vue Router to build single-page applications with navigation.</el-div>
            <el-div class="note">Stay Updated<br/><br/> Web development frameworks evolve, so it's important to stay up-to-date with Vue.js updates, changes, and new features. Follow Vue.js on social media, subscribe to newsletters, and participate in conferences or meetups if possible.</el-div>
            <el-div class="note">State Management with Vuex<br/><br/> As your projects grow, you'll need to manage state efficiently. Vuex is Vue's official state management library. Learn how to use Vuex to manage the state of your application.</el-div>
            <el-div class="note">Build Real Projects<br/><br/> As you gain confidence, work on larger projects. Building real applications will solidify your skills and allow you to apply what you've learned.</el-div>
            <el-div class="note">mehmetsalihdurdu.com</el-div>
            <el-icon class="iconNote"><CirclePlusFilled /></el-icon>
        </el-div>
    </el-container>
</template>

<script>
</script>

<style>
.iconNote{
    font-size: 100px;
    margin-left: 90px;
    color: #83ca65;
    cursor: pointer;
    transition: all 0.5s ease;
}
.iconNote:hover{
    font-size: 120px;
    margin-left: 80px;
}
.note {
    display: inline-block;
    cursor: pointer;
    width: 210px;
    height: 210px;
    padding: 10px;
    margin: 15px;
    margin-left: 0px;
    border-radius: 13px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 2px solid #68b747;
    transition: all 0.3s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    left: 50%;
    transform: translate(-50%);
}
.note:hover{
    width: 250px;
    height: 250px;
    background-color: white;
    z-index: +1;
    margin-top: -30px;
}
.notes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 97%;
    border-radius: 13px;
    padding: 10px;
    margin: 15px;
    margin-left: 0px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-height: 640px;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translate(-50%);
}
</style>