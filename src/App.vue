<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ElContainer, ElMain, ElButton } from 'element-plus'
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { computed } from 'vue'
import { RouteName } from './router'

const route = useRoute()

const navigationButton = computed(() => {
  switch (route.name) {
    case RouteName.Dashboard:
      return { text: 'New', route: RouteName.NewRun, primary: true }
    case RouteName.NewRun:
      return { text: 'Back to dashboard', route: RouteName.Dashboard, primary: false }
    case RouteName.Result:
      return { text: 'Back to dashboard', route: RouteName.Dashboard, primary: false }
    default:
      return null
  }
})
</script>

<template>
  <ElContainer style="min-height: 100vh; background: #f5f5f5">
    <ElMain style="display: flex; justify-content: center; height: fit-content">
      <div>
        <ToolSectionCard heading="tool">
          <h1 class="cui-p-0 cui-mb-0 cui-mb-3">Tool</h1>
          <p>This is your new tool description</p>
          <template #actions>
            <RouterLink v-if="navigationButton" :to="{ name: navigationButton.route }">
              <ElButton :type="navigationButton.primary ? 'primary' : 'default'">
                {{ navigationButton.text }}
              </ElButton>
            </RouterLink>
          </template>
        </ToolSectionCard>
        <RouterView />
      </div>
    </ElMain>
  </ElContainer>
</template>
