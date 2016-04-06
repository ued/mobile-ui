<template>
  <div class="mui_flexbox_item" :style="{marginLeft: $parent.supported ? $parent.marginLeft + 'px' : 0}">
    <slot></slot>
  </div>
</template>
