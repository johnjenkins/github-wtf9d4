<script lang="ts" setup>
const { data } = useFetch('/api/test');
</script>

<template>
  <div>
    <div>{{ data }}</div>
  </div>
</template>
