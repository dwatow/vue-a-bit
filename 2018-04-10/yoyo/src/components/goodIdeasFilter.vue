<template>
  <div class="talksStatus">
      <h3>每週資訊分享活動</h3>
      <span class="release">發布/管理活動</span>
      <ul class="statusTag" >
          <router-link v-for="(list , id) in lists" :class='{ active: list.isActive }' @click.native= "change(id)" :to='`${list.status}`' tag="li" >{{list.contain}}</router-link>
          <!-- <li v-for="(list , id) in lists" :class='{ active: list.isActive }' @click= "change(id)">{{list.contain}}</li> -->
         
      </ul>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                lists:[
                    {
                    contain: '即將開始活動',
                    isActive: false,
                    status: 'soon'
                    },
                    {
                    contain: '已經結束活動',
                    isActive: false,
                    status: 'finishin'
                    },
                    {
                    contain: '全部活動',
                    isActive: true,
                    status: 'all'
                    },
                ],
            }
        },
        methods: {
            change(id){
                // console.log(id)
              for(var i = 0; this.lists.length; i++){
                  this.lists[i].isActive = false
                //   console.log(this.lists[i].isActive)
                  this.lists[id].isActive = true
              }
            }
        }
    }
</script>
<style  lang="scss">
.talksStatus {
    width: 77%;
    margin: 15px auto;
    position: relative;
    h3 {
        color: #0f375b;
        font-weight: 500
    }
    .release {
        color: #fff;
        background: #1e8ba6;
        border-radius: 5px;
        padding: 5px 15px;
        font-size: 24px;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
    }
    .statusTag {
        width: 100%;
        margin: 15px auto;
        background: #fff;
        border: 1px solid #0f375b;
        border-radius: 15px;
        text-align: center;
        display: flex;
        li {
            flex: 1;
            margin: 0;
            padding: 5px;
            font-size: 24px;
            cursor: pointer;
            &:nth-child(1){
                border-radius: 13px 0px 0px 13px
            }
            &:nth-child(2){
                border-left: 1px solid #0f375b;
                border-right: 1px solid #0f375b
            }
            &:nth-child(3){
                border-radius: 0px 13px 13px 0px
            }
        }
        .active {
                background: #0f375b;
                color: #fff;
                
            }
    }
}
</style>
