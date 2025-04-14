<script setup lang="ts">
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { RouteName } from '@/router'
import { Plus } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'
</script>

<template>
  <ToolSectionCard heading="Dashboard"
    ><template #title-append
      ><RouterLink :to="{ name: RouteName.NewRun }"
        ><ElButton type="primary"
          >New <ElIcon class="cui-ml-2"><Plus /></ElIcon></ElButton></RouterLink></template
  >
  </ToolSectionCard>
</template>
