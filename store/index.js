import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'demo',
            indexedLab: 0,
            slideNext: false,
            isClosed: false,
            labs: [
                {
                    page: 'knockout-text',
                    title: 'Article Knockout Text',
                    article: '/snippets',
                    desc: 'A hero transition effect, inverting its featured image onto overlayed text. Using heavy type and an image contrasting strongly from its background, keeps the text legible. Busier images like this Philadelphia mural also help by having small enough details for the inversing to be noticable. The transition was acheived by placing the image ontop of itself and masking the top layer into the letters, to hide the image within the letters the type is darkened with filters. Triggering the switch is then as simple as fading out the background and turning off the filters.'
                },
                {
                    page: 'demo',
                    title: 'My Most Recent Demo',
                    article: '/snippets',
                    desc: 'A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing A short description 0. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                },
                {
                    page: 'demo1',
                    title: 'My First Demo',
                    article: '',
                    desc: 'A short description 1.'
                },
                {
                    page: 'demo2',
                    title: 'My Second Demo',
                    article: '/snippets',
                    desc: 'A short description 2.'
                },
                {
                    page: 'demo3',
                    title: 'My Third Demo',
                    article: '/snippets',
                    desc: 'A short description 3.'
                },
                {
                    page: 'demo4',
                    title: 'The First and Fourth Demo',
                    article: '/snippets',
                    desc: 'A short description 4.'
                }
            ]
        },
        getters: {
            currentLab: state => {
                return state.labs[state.indexedLab]
            },
            prevLab: state => {
                return state.labs[state.prevLab].page
            },
            nextLab: state => {
                return state.labs[state.nextLab].page
            }
        },
        mutations: {
            updatePage (state, pageName) {
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
            },
            closeNav (state) {
                state.isClosed = !state.isClosed;
            }
        }
    })
}

export default createStore