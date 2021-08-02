const App = {
    data() {
        return {
            h: 0,
            counter: 0,
            placeholderString: 'name your note',
            title: 'list notes',
            inputValue: '',
            notes: [],
            message: '',
            message2: '',
            checked1: 'I need an answer',
            checked2: 'I need an answer',
            checkedNames: [],
            picked: '',
            selected: '',
            selected2: '',
            selected3: '',
            options: [
                { text: 'one', value: 'three' },
                { text: 'two', value: 'one' },
                { text: 'three', value: 'two' },
                { text: 'what', value: 'wait' }
            ],
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive']
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