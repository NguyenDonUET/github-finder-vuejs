<template>
  <form @submit.prevent="submit">
    <input
      autofocus
      class="border-2 px-2 py-4 text-xl"
      :value="userNameQuery"
      @input="$emit('update:userNameQuery', $event.target.value)"
    />
    <button class="px-4 py-2 bg-blue-700 text-white">search</button>
  </form>
</template>

<script setup>
defineProps({
  userNameQuery: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:userNameQuery", "onSearchUser"]);

const submit = () => {
  emit("onSearchUser");
};
</script>
