<script setup lang="ts">
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { RouteName } from '@/router'
</script>

<template>
  <ToolSectionCard heading="New run"
    >This is the new run view of your new tool
    <template #title-append
      ><RouterLink :to="{ name: RouteName.Dashboard }"
        ><ElButton>Back to dashboard</ElButton></RouterLink
      ></template
    ></ToolSectionCard
  >
</template>
