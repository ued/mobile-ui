<template>
  <div class="mui-header">
    <div class="mui-header-left">
      <slot name="left"></slot>
    </div>
    <h1 class="mui-header-title"><slot></slot></h1>
    <div class="mui-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
