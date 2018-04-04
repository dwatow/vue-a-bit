<template>
<div class="talksList">
    <img :src="talk.class_img" alt="">
    <div class="talkInfo">
        <h3 class="title"><a href="" :src="talk.link">{{talk.title}}</a></h3>
        <div class="date">{{talk.speech_date}}</div>
        <span class="status">已經結束</span>
        <div class="speaker">
            <img :src="talk.speaker_img">
            <span class="speaker-name">{{talk.speaker}}</span>
        </div>
        <div class="descripts">{{talk.message}}</div>
    </div>
    
</div>
</template>
<script>
     export default {
         props: ['talk']
     }
</script>

<style lang="scss"> 
   .talksList {
       height: 140px;
       margin: 10px auto;
       width: 77%;
       position: relative;
       img {
           width: 140px;
           height: 140px;
           margin-right: 10px;
       }
       .talkInfo {
           width: calc(100% - 160px);
           display:inline-block;
           vertical-align: top;
           height: 140px;
           background: rgba(30,139,166,.1);
           padding:10px;
            .title {
                a {
                        color: #7a062e;
                        font-size: 20px;
                }
                
            }
            .date {
                color:#1e8ba6;
                font-size: 18px;
            }
            .speaker {
                display: inline-block;
                width: 240px;
                vertical-align: top;
                img {
                    max-width: 50px;
                    max-height: 50px;
                    overflow: hidden;
                    border-radius: 50%;
                }
            }
            .descripts {
                display: inline-block;
                text-align: justify;
                font-size: 18px;
                width: calc(100% - 300px);
                height:60px;
                overflow: scroll;
                white-space: pre-wrap;
                ::-webkit-scrollbar {display:none}
            }
            .status {
                font-size: 18px;
                color: #fff;
                font-weight: 700;
                position: absolute;
                height: 100%;
                width: 40px;
                text-align: center;
                right: 0;
                top:0;
                padding: 8px 5px ;
                background: rgb(201, 63, 63)
            }
       }
   }
</style>
