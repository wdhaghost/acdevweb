<script setup>
import { defineProps } from 'vue';
const props = defineProps(['title','text'])

</script>
<template>
    <div class="w-full max-w-80 h-[300px] p-2.5 shadow-md">
      <p class="font-montserrat font-semibold text-xl">
        {{ props.title }}
      </p>  
      <p class="font-robotto text-lg">{{ props.text }}</p>
    </div>
</template>