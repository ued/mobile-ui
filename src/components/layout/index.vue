<template>
<div>
 
  <div class="ex-layout-1">
  	<span style="padding:10px">布局样式1：</span>
    <flexbox class="mui-product-wrap" :margin-left="8">
        <flexbox-item class="left-wrap">
            <img class="product-img" src="https://img.mdcdn.cn/ImageStore/106835/pic/b67b1b72a19a96e1A20996/b67b1b72a19a96e1A20996_430*430.jpg" alt="" />
        </flexbox-item>
        <flexbox-item class="middle-wrap">
            <h5 class="product-title">电烤箱 25L黄金容量 多功能 烘焙入门首选 MG25NF-AD</h5>
            <p class="product-detail">白色/5L</p>
            <span class="invoice-selector">电子发票</span>
        </flexbox-item>
        <flexbox-item class="right-wrap">
            <div class="">&yen; 799.00</div>
            <div class="">x1</div>
            <div class="bottom-label">7天退款</div>
        </flexbox-item>
    </flexbox>
  </div>
 
  <div class="ex-layout-2">
  	<span style="padding:10px">布局样式2：</span>
    <div class="mui-layout2-wrap">
    	<ul>
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10001#10001">
         			<img src="http://static.midea.com/h5/pic/201510/cc38bf411f7b.png" width="60" height="60"> 
         			<p>空调</p> 
         		</a> 
         	</li>  
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10008#10008">
         			<img src="http://static.midea.com/h5/pic/201510/47ca9fdf7504.png" width="60" height="60"> 
         			<p>冰箱</p> 
         		</a> 
         	</li>  
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10015#10015">
         			<img src="http://static.midea.com/h5/pic/201510/ac04f1e843dd.png" width="60" height="60"> 
         			<p>洗衣机</p> 
         		</a> 
         	</li>  
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10034#10034">
         			<img src="http://static.midea.com/h5/pic/201602/7a93aa5368fe.png" width="60" height="60"> 
         			<p>厨房小电器</p> 
         		</a> 
         	</li>  
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10025#10025">
         			<img src="http://static.midea.com/h5/pic/201510/dc4995455914.png" width="60" height="60"> 
         			<p>厨房大电器</p> 
         		</a> 
         	</li>  
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10049#10049">
         			<img src="http://static.midea.com/h5/pic/201602/64c197a47009.png" width="60" height="60"> 
         			<p>生活家电</p> 
         		</a> 
         	</li>  
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10021#10021">
         			<img src="http://static.midea.com/h5/pic/201510/88c6352c4773.png" width="60" height="60"> 
         			<p>热水器/净水机</p> 
         		</a> 
         	</li>  
         	<li>
         		<a href="http://w.midea.com/category?mtag=40004.1.10128#10128">
         			<img src="http://static.midea.com/h5/pic/201510/44563e25b386.png" width="60" height="60"> 
         			<p>配件及周边</p> 
         		</a> 
         	</li>    
        </ul>
  	</div>
  </div>
  
   <div class="ex-layout-3">
	  	<span style="padding:10px">布局样式3：</span>
        <flexbox class="mui-layout3-wrap">
    	    <flexbox  class="mui-layout3-wrap2">
                <h3>送至</h3>
                <flexbox-item class="mui-inner1-wrap">
                    <span class="mui-inner1" >广东省深圳市南山区</span>
                </flexbox-item>
                <span class="mui-inner2-wrap mui-inner2-wrap2">有货</span>           
            </flexbox>
        </flexbox>    
    </div>

</div>
</template>

<script>
import Flexbox from '../flexbox'
import FlexboxItem from '../flexbox-item'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
