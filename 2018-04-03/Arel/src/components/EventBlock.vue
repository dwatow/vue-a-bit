<template>
	<div class="event-block">
		<div class="event-class">
			<img :src="eventData.catImg" alt="">
		</div>
		<div class="event-content">
			<div class="row">
				<h3 class="col-12">
					<slot name="title"></slot>
				</h3>
				<p class="col-12">{{eventData.date}}</p>
				<div class="event-speaker col-4">
					<img :src="eventData.speakerImg" alt="" class="speaker-img">
					<span class="speaker">
						<slot name="speaker"></slot>
					</span>
				</div>
				<div class="event-content-txt col-8">
					<slot name="content"></slot>
				</div>
			</div>
		</div>
		<div class="event-status" :class="[renderEventStatus.style]">
			{{renderEventStatus.text}}
		</div>		
	</div>
</template>

<script>
export default {

  name: 'EventBlock',
  props:['catImg', 'speakerImg', 'date', 'status'],
  data () {
    return {
    	eventData: {
    		catImg: this.catImg,
    		speakerImg: this.speakerImg,
    		date: this.date,
    		status: this.status
    	},
    }
  },
  computed: {
  	renderEventStatus() {
  		switch(this.eventData.status) {
  			case 'end':
  				return {
  					text: '已經結束',
  					style: 'end'
  				}
  				break;
  			case 'ongoing':
  				return {
  					text: '本週活動',
  					style: ''
  				}
  				break;
  			case 'ready': 
  				return {
  					text: '即將開始',
  					style: 'ready'
  				}
  				break;
  		}
  	}
  } 
}
</script>

<style lang="scss" scoped>

.event-block {
	min-height: 140px;
	display: flex;
	margin-bottom: 0.8rem;
}

.event-class {
	max-width: 140px;
	width: 100%;
	margin-right: 1rem;
	img {
		max-width: 100%;
		height: auto;
	}
}

.event-content {
	max-width: 840px;
	width: 100%;
	background: rgba(30, 139, 166, 0.1);
	padding: 1rem;
	.row {
		margin: 0;
	}
	h3 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
		color: #79052e;
	}
	p {
		font-size: 1.125rem;
		margin: 0 0 0.5rem;
		color: #117f7e;
	}
	.event-speaker {
		display: flex;
		flex-wrap: no-wrap;
		align-items: center;
		font-size: 1.25rem;
		color: #0f375b;
		img {
			border-radius: 50%;
		}
		span {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		overflow-x: scroll;
	}
	.event-content-txt {
		height: 48px;
		overflow-y: scroll;
		color: #0f375b;
	}
}

.event-status {
	font-size: 1.125rem;
	writing-mode: vertical-lr;
	text-align: center;
	letter-spacing: 0.5rem;
	color: #FFF;
	background: #5d9b6c;
	padding: 0.5rem;
	&.end {
		background: #79052e;
	}
	&.ready {
		background: #1e8ba6;
	}
}

</style>