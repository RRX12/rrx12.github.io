import DefaultTheme from 'vitepress/theme'
import NotesHome from './NotesHome.vue'
import NotesList from './NotesList.vue'
import './style.css'
export default { extends: DefaultTheme, enhanceApp({ app }) { app.component('NotesHome', NotesHome); app.component('NotesList', NotesList) } }
