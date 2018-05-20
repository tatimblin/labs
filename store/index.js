import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'index',
            indexedLab: 1,
            labs: [
                { 
                    page: 'demo3',
                    title: 'My zeroth Demo'
                },
                { 
                    page: 'demo4',
                    title: 'My Fourth Demo'
                },
                { 
                    page: 'demo',
                    title: 'My Third Demo',
                    article: 'http://timblin.co'
                },
                { 
                    page: 'demo1',
                    title: 'My Second Demo'
                },
                { 
                    page: 'demo2',
                    title: 'My First Demo'
                }
            ]
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
            },
            incIndex(state) {
                state.indexedLab++
            },
            decIndex(state) {
                state.indexedLab--
            }
        }
    })
}

export default createStore