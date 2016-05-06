<template>
	<div class="mui-group-title">
		<slot></slot>
	</div>
</template>

<style lang="less">
@import "../group/_supports.less";
.mui-group-title {
    margin-top: .77em; // 15px - 行高
    margin-bottom: .3em; // 8px - 行高
    padding-left: @muiCellGapH;
    padding-right: @muiCellGapH;
    color: @globalTextColor;
    font-size: @muiCellTipsFontSize;

    & + .mui-group {
        margin-top: 0;
    }
}
</style>
