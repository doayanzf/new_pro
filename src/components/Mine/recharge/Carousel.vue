<template>
    <div>
       <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide callFour">Slide 4</div>
            </div>
             <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Carousel",
    data () {
        return {
             
        };
    }
}

window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    initialSlide :4,
    direction: 'horizontal',
    loop: false,
    freeMode : true,
    freeModeMomentum : false,
    slidesPerView: 'auto',
  })
}
       
</script>
    
<style lang="css" scoped>
    .swiper-container {
        width: 8.8rem;
        height: 2.933333rem;
        border: 1px solid rgb(21, 214, 14);
        display: flex;
    }
    .swiper-slide{
        margin-right: .266667rem;
        border-radius: .213333rem;
        background:#bce8bc;
        width: 6.4rem;
        height: 2.933333rem;;
    }
    .callFour{
        margin-right: 0;
    }
</style>