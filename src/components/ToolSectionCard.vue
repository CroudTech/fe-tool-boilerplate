<script setup lang="ts">
import { ElCard } from "element-plus";

const props = defineProps<{
  /**
   * Heading text to display in card header.
   */
  heading?: string;
}>();
</script>

<template>
  <ElCard class="cui-tool-section-card">
    <section
      v-if="props.heading || $slots['title-append']"
      class="cui-tool-section__header"
    >
      <span v-if="props.heading" class="cui-tool-section__title">
        {{ props.heading }}
      </span>

      <div v-if="$slots['title-append']" class="cui-tool-section__title-append">
        <slot name="title-append" />
      </div>
    </section>

    <section class="cui-tool-section__body">
      <slot />
    </section>

    <section
      v-if="$slots.actions || $slots['actions-prepend']"
      class="cui-tool-section__footer"
    >
      <div
        v-if="$slots['actions-prepend']"
        class="cui-tool-section__actions-prepend"
      >
        <slot name="actions-prepend" />
      </div>
      <div v-if="$slots.actions" class="cui-tool-section__actions">
        <slot name="actions" />
      </div>
    </section>
  </ElCard>
</template>

<style lang="scss" scoped>
.cui-tool-section-card {
  @apply cui-my-3 cui-w-[1000px];
}

.cui-tool-section__header {
  @apply cui-flex
    cui-items-center
    cui-mb-4 cui-min-h-[28px];
}

.cui-tool-section__title {
  @apply cui-text-xs
    cui-font-semibold
    cui-uppercase;

  font-weight: 100;
  letter-spacing: 3px;
}

.cui-tool-section__title-append {
  @apply cui-ml-auto;
}

.cui-tool-section__footer {
  @apply cui-flex
    cui-items-center
    cui-mt-4;
}

.cui-tool-section__actions {
  @apply cui-ml-auto;
}
</style>
