<template>
    <TheHeader />
    <RouterView />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
    components: {
        TheHeader
    }
}
</script>

<style>
.actions {
    padding: 0 0 16px 0;
    margin: 0 0 32px 0;
    border-bottom: 1px solid #C4C4C4;
}
</style>
