<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElContainer, ElHeader, ElMain } from 'element-plus'
</script>

<template>
  <ElContainer style="min-height: 100vh; background: #f5f5f5">
    <ElHeader
      height="60px"
      style="
        background: white;
        display: flex;
        align-items: center;
        padding: 0 20px;
        justify-content: space-between;
      "
    >
      <RouterLink to="/" class="cui-text-lg cui-text-neutral-900">Croud Tool</RouterLink>
    </ElHeader>

    <ElMain class="cui-mx-auto">
      <RouterView />
    </ElMain>
  </ElContainer>
</template>
