import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'demo',
            indexedLab: 0,
            templabs: ['demo', 'demo1', 'demo2', 'demo3', 'demo4'],
            labs: [
                {
                    page: 'demo',
                    title: 'My Most Recent Demo',
                    article: '/snippets'
                },
                {
                    page: 'demo1',
                    title: 'My Fourth Demo',
                    article: ''
                },
                {
                    page: 'demo2',
                    title: 'My Third Demo',
                    article: '/snippets'
                },
                {
                    page: 'demo3',
                    title: 'My Second Demo',
                    article: '/snippets'
                },
                {
                    page: 'demo4',
                    title: 'The Very First Demo',
                    article: '/snippets'
                }
            ]
        },
        getters: {
            currentLab: state => {
                return state.labs[state.indexedLab]
            },
            prevLab: state => {
                return state.labs[state.prevLab]
            },
            nextLab: state => {
                return state.labs[state.nextLab]
            }
        },
        mutations: {
            updatePage(state, pageName) {
                state.page = pageName
                //state.indexedLab = state.templabs.indexOf(state.page)
                state.indexedLab = state.labs.findIndex(x => x.page === state.page)
                // Go back to most recent lab when reach end.
                if (state.indexedLab == state.labs.length - 1) {
                    state.prevLab = 0
                } else {
                    state.prevLab = state.indexedLab + 1
                }
                // Jump to earliest tab when at beginning.
                if (state.indexedLab == 0) {
                    state.nextLab = state.labs.length - 1
                } else {
                    state.nextLab = state.indexedLab - 1
                }
            }
        }
    })
}

export default createStore