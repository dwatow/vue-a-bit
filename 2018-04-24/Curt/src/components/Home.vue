<template lang="html">
  <div class="layout">
      <Layout class="fullHeigh">
          <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
              <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
                  <MenuItem @click.native="routerPush(1)" name="1-1">
                      <Icon type="ios-navigate"></Icon>
                      <span>Home</span>
                  </MenuItem>
                  <MenuItem @click.native="routerPush(2)" name="1-2">
                      <Icon type="search"></Icon>
                      <span>Cart</span>
                  </MenuItem>
                  <MenuItem @click.native="testModal()" name="1-2">
                      <Icon type="search"></Icon>
                      <span>Cart</span>
                  </MenuItem>
              </Menu>
          </Sider>
          <!-- <ProductList></ProductList> -->
          <Layout>
              <Header :style="{padding: 0}" class="layout-header-bar">
                  <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
              </Header>
              <Content class="cleanFont" :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                <router-view></router-view>
                <!-- <template v-for="product in products">
                  <Product :product="product"></Product>
                </template> -->

              </Content>
          </Layout>
      </Layout>
  </div>
</template>

<script>
import Product from '@/components/Product'
import ProductList from '@/components/ProductList'

export default {
  name:'Home',
  components:{
    Product,
    ProductList
  },
  data () {
      return {
          isCollapsed: false,
          products:[]
      }
  },
  computed: {
      rotateIcon () {
          return [
              'menu-icon',
              this.isCollapsed ? 'rotate-icon' : ''
          ];
      },
      menuitemClasses () {
          return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
          ]
      }
  },
  methods: {
    routerPush(route){
      if(route === 1){
        this.$router.push('/')
      }
      else {
        this.$router.push('/Cart')
      }

    },
    collapsedSider () {
        this.$refs.side1.toggleCollapse();
    },
    testModal(){
      var info = {
        show:true,
        message:'testmessage'
      }
      this.$store.commit('controlModal',info)
    }
  },
  mounted(){
    // console.log(this.$refs);
    // console.log(this);
    this.$axios('https://cors-anywhere.herokuapp.com/http://ecshweb.pchome.com.tw/search/v3.3/all/results?q=Apple&page=1&sort=rnk/dc')
      .then( (res) => {
        res.data.prods.forEach( (product) => {
          this.products.push(product)
        })
      })
  }
}
</script>

<style lang="css" scoped>
.fullHeigh{
  height: 100vh;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
.menu-icon{
    transition: all .3s;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
.cleanFont{
  font-size: 0;
  /* text-align: justify; */
}
.cleanFont::after{
  /* content: "";
  display: inline-block;
  width: 100%; */
}
</style>
