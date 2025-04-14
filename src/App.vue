<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElContainer, ElMain } from 'element-plus'
</script>

<template>
  <ElContainer style="min-height: 100vh; background: #f5f5f5">
    <ElMain style="display: flex; justify-content: center; height: fit-content">
      <RouterView />
    </ElMain>
  </ElContainer>
</template>
