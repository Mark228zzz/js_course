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
        }
    }
}

Vue.createApp(App).mount('#app')