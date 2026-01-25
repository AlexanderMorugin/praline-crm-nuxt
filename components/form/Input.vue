<template>
  <div class="form-field">
    <label :for="name" class="form-label">{{ label }}</label>

    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="form-input"
    />

    <IconClose v-if="value" class="form-clear" @click="$emit('clearInput')" />
  </div>
</template>

<script setup>
const { label, type, name, placeholder, value } = defineProps([
  "label",
  "type",
  "name",
  "placeholder",
  "value",
]);

const emit = defineEmits(["update:value", "clearInput"]);
const updateValue = (e) => emit("update:value", e.target.value);
</script>
