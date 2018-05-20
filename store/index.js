import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'demo',
            indexedLab: 0,
            labs: [
                { 
                    page: 'demo',
                    title: 'My Most Recent Demo'
                },
                { 
                    page: 'demo1',
                    title: 'My Fourth Demo'
                },
                { 
                    page: 'demo2',
                    title: 'My Third Demo'
                },
                { 
                    page: 'demo3',
                    title: 'My Second Demo'
                },
                { 
                    page: 'demo4',
                    title: 'My First Demo'
                }
            ]
        },
        getters: {
            currentLab: state => {
                return state.labs[state.indexedLab]
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