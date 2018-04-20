<template lang="html">
  <div id="footer">
    <div class="side_space clearfix">
      <div id="footer_link_list">
        <slot name="media1"></slot>
        <slot name="media2"></slot>
        <slot name="media3"></slot>
        <slot name="media4"></slot>
      </div>
      <p id="footer_copy_right_text">(c) 2023 Zerotype. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script scop>
import fontawesome from '@fortawesome/fontawesome'
const fab = require('@fortawesome/fontawesome-free-brands')

fontawesome.library.add(fab.faFacebookSquare)
fontawesome.library.add(fab.faGooglePlusSquare)
fontawesome.library.add(fab.faTwitterSquare)
fontawesome.library.add(fab.faPinterestSquare)
fontawesome.library.add(fab.faFacebookF)

export default {}
</script>

<style scoped lang="css">
#footer {
    background-color: #EEEEEE;
    height: 75px;
    border-top: 1px solid #d8d8d8;
}

#footer .side_space{
    margin: 0 auto;
    width: 880px;
}

#footer_link_list {
    float: right;
    padding-left: 0;
    margin: 0 auto;
}

#footer_link_list svg{
    display:inline;
    margin: 0px 8px;
    color: red;
}

#footer_copy_right_text {
    margin-top: 34px;
    margin-left: 12px;
    width: 380px;
    font-size: 12px;
    color: #585858;
}
</style>
