<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ElContainer, ElMain, ElButton, ElIcon } from 'element-plus'
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { computed } from 'vue'
import { RouteName } from './router'
import { Plus } from '@element-plus/icons-vue'

const route = useRoute()

const navigationButton = computed(() => {
  switch (route.name) {
    case RouteName.Dashboard:
      return { text: 'New', route: RouteName.NewRun, primary: true, icon: Plus }
    case RouteName.NewRun:
      return {
        text: 'Back to dashboard',
        route: RouteName.Dashboard,
        primary: false,
        icon: null,
      }
    case RouteName.Result:
      return {
        text: 'Back to dashboard',
        route: RouteName.Dashboard,
        primary: false,
        icon: null,
      }
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
          <h3 class="cui-p-0 cui-mb-0 cui-mb-2 cui-text-black">Tool</h3>
          <p>This is your new tool description</p>
          <template #actions>
            <RouterLink v-if="navigationButton" :to="{ name: navigationButton.route }">
              <ElButton :type="navigationButton.primary ? 'primary' : 'default'">
                {{ navigationButton.text }}
                <ElIcon v-if="navigationButton.icon" class="cui-ml-2"
                  ><component :is="navigationButton.icon"
                /></ElIcon>
              </ElButton>
            </RouterLink>
          </template>
        </ToolSectionCard>
        <RouterView />
      </div>
    </ElMain>
  </ElContainer>
</template>
