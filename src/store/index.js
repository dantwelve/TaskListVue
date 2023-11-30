import { createStore } from 'vuex'

export default createStore({
    state: {
        tasks: [],
        filter: ''
        // {
        //   status: '',
        //   title: '',
        //   description: '',
        //   deadline: ''
        // }
    },
    getters: {
        activeTasks(state) {
            return state.tasks.reduce((accum, task) => {
                if (task.status === 'active') {
                    return accum += 1
                } else return 0
            }, 0)
        },
        filteredTasks(state) {
            if (state.filter.length > 0) {
                return state.tasks.filter(task => task.status === state.filter)
            }
            return state.tasks
        },
        tasks(state) {
            return state.tasks
        },
        activeFilters(state) {
            return state.filter
        }
    },
    mutations: {
        addNewTask(state, newTask) {
            state.tasks.push(newTask)
        },
        setFilter(state, filter) {
            state.filter = filter
        }
    },
    actions: {
    },
    modules: {
    }
})
