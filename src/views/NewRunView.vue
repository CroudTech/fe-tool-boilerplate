<script setup lang="ts">
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { RouteName } from '@/router'
</script>

<template>
  <ToolSectionCard heading="New run"
    ><template #title-append
      ><RouterLink :to="{ name: RouteName.Dashboard }"
        ><ElButton>Back to dashboard</ElButton></RouterLink
      ></template
    ></ToolSectionCard
  >
</template>
