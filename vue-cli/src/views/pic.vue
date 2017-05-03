<template>
    <div>
      <router-link :to="{name:'Child'}" tag="span">童年</router-link>
      <router-link :to="{name:'Man'}" tag="span">中年</router-link>
      <router-link :to="{name:'Old'}" tag="span">老年</router-link>
        <hr>
        <router-view></router-view>
    </div>
    
</template>
<script>
    export default {

    }
</script>