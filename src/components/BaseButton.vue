<template>
  <button
    class="border-2 text-sm px-2"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>
