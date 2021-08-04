const App = {
    data() {
        return {
            h: 0,
            counter: 0,
            counter221: 0,
            placeholderString: 'name your note',
            title: 'list notes',
            inputValue: '',
            inputValue2212: '',
            notes: [],
            message: '',
            message2: '',
            checked1: 'I need an answer',
            checked2: 'I need an answer',
            checkedNames: [],
            picked: '',
            selected: '',
            selected2: '',
            options: [
                { text: 'one', value: 'three' },
                { text: 'two', value: 'one' },
                { text: 'three', value: 'two' },
                { text: 'what', value: 'wait' }
            ],
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive'],
            picked2: '',
            checkedNames2: []
        }
    },
    methods: {
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNotes() {
            (this.inputValue !== '') 
            this.notes.splice(this.inputValue)
        },
        buttonIW() {
            alert('im working!')
        },
        buttonINW() {
            alert('im not working!')
        },
        dontPress() {
            alert('I told you not to press')
        }
    }
}

Vue.createApp(App).mount('#app')