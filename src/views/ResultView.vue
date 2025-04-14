<script setup lang="ts">
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { ElButton } from 'element-plus'
import { RouteName } from '@/router'
</script>

<template>
  <ToolSectionCard heading="Result"
    ><template #title-append
      ><RouterLink :to="{ name: RouteName.Dashboard }"
        ><ElButton>Back to dashboard</ElButton></RouterLink
      ></template
    ></ToolSectionCard
  >
</template>
