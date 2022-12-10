<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
   <h3>{{ isCollapse ? '后台':'通用后台管理系统'}}</h3>
   <el-menu-item @click="clickmenu(item)" v-for="item in nochildren" :key="item.name" :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in haschildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subitem in item.children" :key="subitem.path">
        <el-menu-item @click="clickmenu(subitem)" :index="subitem.path">{{subitem.label}}</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
  </el-menu>
</template>


<script>
import Cookie from "js-cookie";
export default {
    data(){
        return {}
    },
    methods:{
        handleOpen(key,keyPath){
            console.log(key,keyPath);
        },
        handleClose(key,keyPath){
            console.log(key,keyPath);
        },
        clickmenu(item){
            if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
                this.$router.push(item.path)
            }
            this.$store.commit('selectMenu',item)     
        }
    },
    computed:{
        nochildren(){
            return this.menuData.filter(item => !item.children)
        },
        haschildren(){
            return this.menuData.filter(item => item.children)
        },
        menuData(){
            return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu
        },
        isCollapse(){
           return this.$store.state.tab.isCollapse
        }
    },
};
</script>

<style lang="less" scoped>
   .el-menu{
    border: none;
   }
   .el-menu-vertical-demo{
     height: 100vh;
   }
   h3{
     margin: 0;
     text-align: center;
     color: #fff;
     font-size: 16px;
     line-height: 48px;
     font-weight: 400;
   }
</style>