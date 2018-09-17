import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'index',
            indexedLab: 0,
            isNav: true,
            isDetail: true
        },
        mutations: {
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