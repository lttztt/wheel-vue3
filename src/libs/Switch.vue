<template>
    <button :class="{ checked: value }" @click="toggleChecked">
        <span></span>
    </button>
    {{ value }}
</template>
<script lang="ts">
import { ref } from "vue";
export default {
    props: {
        value: {
            type: Boolean,
        },
    },
    setup(props, context) {
        const toggleChecked = () => {
            context.emit("update:value", !props.value);
        };
        return { toggleChecked };
    },
};
</script>

<style lang="scss" scoped>
button {
    width: 40px;
    height: 20px;
    background: #bfbfbf;
    border-radius: 20px;
    position: relative;
    transition: all 250ms;
    span {
        position: absolute;
        left: 2px;
        top: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        transition: all 250ms;
    }
    &.checked {
        background: #1890ff;
        > span {
            left: calc(100% - #{20px} + 2px);
        }
    }
}
button:focus {
    outline: none;
}
button:active {
    > span {
        width: 14px + 4px;
    }
}
button.checked:active {
    > span {
        width: 14px + 4px;
        margin-left: -4px;
    }
}
</style>
