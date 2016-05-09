<template>
<nav class="mui_icontable">
  <slot></slot>
</nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.mui_icontable {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  -webkit-transition: height .1s ease-in-out;
  -moz-transition: height .1s ease-in-out;
  -ms-transition: height .1s ease-in-out;
  -o-transition: height .1s ease-in-out;
  transition: height .1s ease-in-out; }
.mui_icontable:after {
clear: both;
content: '.';
visibility: hidden;
height: 0;
display: block; 
}
.mui_icontable_item {
  float: left;
  box-sizing: border-box;
  width: 25%;
  padding: 10px 0 8px 0;
  text-align: center;
  position: relative;
  border-right: 1px solid #F4F4F4;
  border-bottom: 1px solid #F4F4F4;
  display: block; }
.mui_icontable_item:visited {
    color: #333; }
.mui_icontable_item:nth-child(4n) {
    border-right: 0; }
.mui_icontable_icon {
  display: block;
  width: 45px;
  min-height: 45px;
  margin: 0 auto 5px; }
.mui_icontable_p{
font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  color: #333;
}

</style>
