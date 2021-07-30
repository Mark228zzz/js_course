const App = {
    data() {
        return {
            placeholderString: 'name your note',
            title: 'list notes',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx, event) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
            console.log('input Value changed', value)
        }
    }
}


Vue.createApp(App).mount('#app')

