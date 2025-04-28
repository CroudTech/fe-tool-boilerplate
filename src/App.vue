<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ElContainer, ElMain, ElButton, ElIcon, ElTag } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import ToolSectionCard from '@/components/ToolSectionCard.vue'
import { computed } from 'vue'
import { RouteName } from '@/router'
import CuiTag from '@/components/CuiTag.vue'

const route = useRoute()

const navigationButtons = computed(() => {
  switch (route.name) {
    case RouteName.Dashboard:
      return [{ text: 'New', route: RouteName.NewRun, primary: true, icon: Plus }]
    case RouteName.NewRun:
      return [
        {
          text: 'Back to dashboard',
          route: RouteName.Dashboard,
          primary: false,
          icon: null,
        },
      ]
    case RouteName.Result:
      return [
        {
          text: 'Back to dashboard',
          route: RouteName.Dashboard,
          primary: false,
          icon: null,
        },
        { text: 'New', route: RouteName.NewRun, primary: true, icon: Plus },
      ]
    default:
      return []
  }
})
</script>

<template>
  <ElContainer style="min-height: 100vh; background: #f5f5f5">
    <ElMain style="display: flex; justify-content: center; height: fit-content">
      <div>
        <ToolSectionCard heading="tool">
          <template #title-append
            ><ElTag effect="dark" class="cui-tool_tag">Testing</ElTag></template
          >
          <h3 class="cui-p-0 cui-mb-2 cui-text-black">Tool</h3>
          <p>This is your new tool description.</p>
          <template #actions>
            <RouterLink
              v-for="navigationButton in navigationButtons"
              :key="navigationButton.text"
              :to="{ name: navigationButton.route }"
            >
              <ElButton :type="navigationButton.primary ? 'primary' : 'default'" class="cui-ml-2">
                {{ navigationButton.text }}
                <ElIcon v-if="navigationButton.icon" class="cui-ml-2"
                  ><component :is="navigationButton.icon"
                /></ElIcon>
              </ElButton>
            </RouterLink>
          </template>
          <template #actions-prepend>
            <CuiTag label="Tool tag" />
          </template>
        </ToolSectionCard>
        <RouterView />
      </div>
    </ElMain>
  </ElContainer>
</template>

<style lang="scss" scoped>
:deep(.cui-tool_tag.el-tag) {
  background-color: #6c72a4;
}
</style>
