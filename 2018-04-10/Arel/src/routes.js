import Home from './Home.vue';
import AllEvent from './AllEvent.vue';
import DatedEvent from './DatedEvent.vue';

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/all',
		component: AllEvent
	},
	{
		path: '/date/:year/:month/:date',
		component: DatedEvent
	}	
]