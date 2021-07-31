Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App<h1>',
        title: 'I am the title',
        items: [1, 2]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key)
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        leg(item) {
            console.log('Log item: ', item)
        }
    },
    computed: {
        evenItems() {
            return (this.items.filter(i => i % 2 === 0))
        }
    }
}
).mount('#app')