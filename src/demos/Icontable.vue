<template>
<div>
	<icontable>
		<icontable-item v-for="(index,data) in list" href="{{data['href']}}" :style="{borderBottom:Math.floor(list.length/4)*4 <= index? 0:''}">
			<img src="{{data['icon_src']}}" class="mui_icontable_icon"/>
			<p class="mui_icontable_p">{{data['p']}}</p>
		</icontable-item>
	</icontable>
</div>
</template>

<script>
import { Icontable, IcontableItem } from '../components/'

export default {
  ready () {
  },
  components: {
    Icontable,
    IcontableItem
  },
  data () {
    return {
      list: [
        {
          href: '#1',
          icon_src: 'http://static.midea.com/h5/pic/201510/ac04f1e843dd.png',
          p: '皮卡丘皮卡皮卡皮卡皮卡皮卡'
        },
        {
          href: '#2',
          icon_src: 'http://static.midea.com/h5/pic/201510/ac04f1e843dd.png',
          p: '小火龙'
        },
        {
          href: '#3',
          icon_src: 'http://static.midea.com/h5/pic/201510/ac04f1e843dd.png',
          p: '妙蛙种子'
        },
        {
          href: '#4',
          icon_src: 'http://static.midea.com/h5/pic/201510/ac04f1e843dd.png',
          p: '杰尼龟'
        },
        {
          href: '#5',
          icon_src: 'http://static.midea.com/h5/pic/201510/ac04f1e843dd.png',
          p: '巴大蝴'
        },
        {
          href: '#6',
          icon_src: 'http://static.midea.com/h5/pic/201510/ac04f1e843dd.png',
          p: '水精灵'
        }

      ]
    }
  }
}
</script>
