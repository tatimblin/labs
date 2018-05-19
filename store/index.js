import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'index',
            indexedDemo: 0,
            demos: [
                { 
                    page: 'demo',
                    title: 'My Third Demo',
                    article: 'http://timblin.co'
                },
                { 
                    page: 'demo1.vue',
                    title: 'My Second Demo'
                },
                { 
                    page: 'demo2.vue',
                    title: 'My First Demo'
                }
            ]
        },
        mutations: {
            updatePage(state, pageName) {
                state.page = pageName
            }
        }
    })
}

export default createStore