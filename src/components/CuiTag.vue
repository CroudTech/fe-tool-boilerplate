<script lang="ts" setup>
withDefaults(
  defineProps<{
    /**
     * Text to be displayed inside tag
     */
    label: string

    /**
     * Font size for the tag
     * @default '15px'
     */
    fontSize?: string
  }>(),
  { fontSize: '15px' },
)
</script>

<template>
  <div v-bind="$attrs" class="cui-tag" :style="{ fontSize: fontSize }">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.cui-tag {
  @apply cui-inline-block
         cui-select-none
         cui-rounded-full;

  white-space: nowrap;
  padding: 4px 12px;
  margin: 4px 4px 4px 0px;
  background-color: #e9e9e9;
}
</style>
