import AllSpeech from './components//All.vue';
import EndSpeech from './components/End.vue';
import OngoingSpeech from './components/Ongoing.vue';


export const routes = [
    { path: '', component: AllSpeech},
    { path:'/end', component: EndSpeech},
    { path:'/ongoing', component: OngoingSpeech},
]