import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'demo',
            indexedLab: 0,
            whatsThis: 0,
            labs: ['demo', 'demo1', 'demo2', 'demo3', 'demo4']
        },
        getters: {
            currentLab: state => {
                return state.labs[state.indexedLab]
            },
            prevLab: state => {
                return state.labs[state.indexedLab + 1]
            },
            nextLab: state => {
                return state.labs[state.indexedLab - 1]
            }
        },
        mutations: {
            updatePage(state, pageName) {
                state.page = pageName
                state.indexedLab = state.labs.indexOf(state.page)
            }
        }
    })
}

export default createStore