<template>
  <div class="form-field">
    <label :for="name" class="form-label">{{ label }}</label>

    <textarea
      v-if="isFormEdit"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="form-textarea"
    />
    <div v-else class="form-textarea-submited">
      <span class="form-textarea-text-submited">{{
        value ? value : "Пусто"
      }}</span>
    </div>

    <IconClose
      v-if="value && isFormEdit"
      class="form-clear"
      @click="$emit('clearInput')"
    />
  </div>
</template>

<script setup>
const { label, type, name, placeholder, value, isFormEdit } = defineProps([
  "label",
  "type",
  "name",
  "placeholder",
  "value",
  "isFormEdit",
]);

const emit = defineEmits(["update:value", "clearInput"]);
const updateValue = (e) => emit("update:value", e.target.value);
</script>
