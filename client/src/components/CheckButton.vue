<template>
    <template v-if="check">
        <CheckTrueIcon />
    </template>
    <template v-else>
        <CheckFalseIcon />
    </template>
</template>

<script>
import CheckTrueIcon from "@/components/icons/CheckTrueIcon.vue";
import CheckFalseIcon from "@/components/icons/CheckFalseIcon.vue";

export default {
    components: {
        CheckTrueIcon,
        CheckFalseIcon
    },
    props: ["check"]
}
</script>
