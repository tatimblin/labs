import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state() {
            const context = require.context('~/content/lab/posts/', false, /\.json$/);
            const labs = context.keys().map(key => ({
                ...context(key),
                path: `/labs/${key.substring(13).replace('.json', '').replace('./', '')}`
            }));
            return {
                page: 'index',
                labs,
                indexedLab: 0,
                isNav: true,
                isDetail: true
            }
        },
        getters: {
            labs: state => state.labs,

            thisLab: state => state.labs[state.indexedLab],

            nav: state => {
                let i = state.indexedLab
                let l = state.labs.length
                let nextIndex = i + 1
                let prevIndex = i - 1

                if (i >= l - 1) {
                    nextIndex = 0
                }
                if (i === 0) {
                    prevIndex = l - 1
                }
                console.log('next: ' + nextIndex + ', prev: ' + prevIndex)
 
                let next = state.labs[nextIndex].path
                let prev = state.labs[prevIndex].path
                return {
                    prev,
                    next
                }
            }
        },
        mutations: {
            updatePage (state, pageName) {
                state.page = pageName
                console.log(pageName)
            },
            updateIndex (state, pageName) {
                state.indexedLab = state.labs.findIndex(x => x.path === pageName)
            },
            toggleDetail (state) {
                state.isDetail = !state.isDetail
            },
            toggleNav (state) {
                state.isNav = !state.isNav

                if( state.isDetail) {
                    state.isDetail = !state.isDetail
                }
            }
        }
    })
}

export default createStore