<template>
  <tiny-dropdown split-button @item-click="itemClick" @button-click="buttonClick" @visible-change="visibleChange">
    下拉菜单
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item label="黄金糕"></tiny-dropdown-item>
        <tiny-dropdown-item>狮子头</tiny-dropdown-item>
        <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
        <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
        <tiny-dropdown-item divided>蚵仔煎</tiny-dropdown-item>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script setup lang="jsx">
import {
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem,
  Notify
} from '@opentiny/vue'

function itemClick(data) {
  Notify({
    type: 'info',
    title: 'itemClick 回调事件',
    message: `使用 dropdown-item 的label属性：${data.vm.label},\n 使用 dropdown-item 的默认插槽：${data.vm.$el.innerText}`,
    position: 'top-right',
    duration: 2000
  })
}

function buttonClick() {
  Notify({ message: '下拉菜单内置按钮点击事件', status: 'info' })
}

function visibleChange(status) {
  Notify({
    message: `下拉菜单显隐事件，当前为${status ? '显示' : '隐藏'}`,
    status: 'info'
  })
}
</script>
