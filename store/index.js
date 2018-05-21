import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'demo',
            indexedLab: 0,
            whatsThis: 'whatsThis',
            templabs: ['demo', 'demo1', 'demo2', 'demo3', 'demo4'],
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
                },
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
                //state.indexedLab = state.templabs.indexOf(state.page)
                state.indexedLab = state.labs.findIndex(x => x.page === state.page)
            }
        }
    })
}

export default createStore