import {computed, ref, watch} from 'vue'
import {defineStore} from 'pinia'

export let usePostsStore = defineStore('postStore', () => {
        let posts = ref([])

        let title = ref("")

        let showModal = ref(false)

        let createPost = () => {
            let post = {
                text: title.value,
                id: Date.now(),
                finished: false
            }

            if (title.value.length > 0) {
                showModal.value = false
                posts.value.unshift(post)

                title.value = ""
            } else {
                showModal.value = true
            }

        }

        let toggleFinish = (id) => {
            let idx = posts.value.findIndex(el => el.id === id)
            posts.value[idx].finished = !posts.value[idx].finished
        }


        let finishedPosts = computed((ed) => {
            return (posts.value.filter(el => el.finished === true)).length
        })


        let deletePost = (id) => {
            posts.value = posts.value.filter(el => el.id !== id)

        }

        let deleteAll = () => {
            posts.value = []
        }

        let deleteFinished = () => {
            posts.value = posts.value.filter(el => el.finished === false)
        }

        let postsInLocalStorage = localStorage.getItem("posts")

        if (postsInLocalStorage) {
            posts.value = JSON.parse(postsInLocalStorage)._value;
        }

        watch(
            () => posts,
            (state) => {
                localStorage.setItem("posts", JSON.stringify(state));
            },
            {deep: true}
        );

        let closeModal = () => [
            showModal.value = false
        ]


        return {
            posts,
            title,
            showModal,
            closeModal,
            createPost,
            toggleFinish,
            deletePost,
            finishedPosts,
            deleteAll,
            deleteFinished
        }
    }
)
