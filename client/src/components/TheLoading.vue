<template>
    <div class="loading">
        <LoadingIcon />
    </div>
</template>

<script>
import LoadingIcon from "@/components/icons/LoadingIcon.vue";

export default {
    components: {
        LoadingIcon
    }
}
</script>

<style>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 99;
}
</style>
