<script setup lang="ts">
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { ElButton } from 'element-plus'
import { RouteName } from '@/router'
</script>

<template>
  <ToolSectionCard heading="Result"
    >This is the result view of your new tool
    <template #title-append
      ><RouterLink :to="{ name: RouteName.Dashboard }"
        ><ElButton>Back to dashboard</ElButton></RouterLink
      ></template
    ></ToolSectionCard
  >
</template>
