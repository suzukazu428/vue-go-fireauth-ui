<template>
  <input
    class="border-2 h-10 outline-none pl-2 text-sm"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: { default: 'text', type: String },
    placeholder: { default: '', type: String },
    value: { default: '', type: String }
  }
}
</script>
