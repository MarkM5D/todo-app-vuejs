import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import ListsView from '../views/ListsView.vue'
import NotesView from '../views/NotesView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: HomeView
        },
        {
            path:'/Calendar',
            name:'calendar',
            component: CalendarView
        },
        {
            path:'/Lists',
            name:'lists',
            component: ListsView
        },
        {
            path:'/Notes',
            name:'notes',
            component: NotesView
        },
        {
            path:'/Profile',
            name:'profile',
            component: ProfileView
        },
    ]
})

export default router