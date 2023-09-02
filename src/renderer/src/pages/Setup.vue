<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello, Vue 3!')

</script>

<template>
  <div>
    {{ message }}
    <h1>setup page</h1>
  </div>
</template>
