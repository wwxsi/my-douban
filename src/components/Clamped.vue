<template>
    <div class="clamped" @click="isClamped=false" v-if="isClamped" key="clamped">
    </div>
    <div key="unclamped" class="clamped" v-else v-html="content.replace('\n','<br>')"></div>
</template>

<script>
export default {
    name: 'clamped',
    props: ['content','line'],
    data() {
        return {
            isClamped: true
        }
    },
    mounted() {
        let text = this.content.trim().replace('\n', '');

        this.$el.innerText = text.slice(0, 1);
        let lineHeight = this.$el.getBoundingClientRect().height;
        let currLine = 1;

        for (let currWord = 2; currWord <= text.length; currWord++) {
            this.$el.innerText = text.slice(0, currWord) + '...(展开)';
            currLine = Math.round(this.$el.getBoundingClientRect().height / lineHeight);
            if (currLine > this.line) {
                return this.$el.innerHTML = text.slice(0, currWord - 1) + '<span style="color:#42bd56">...(展开)</span>';
            }
        }
        if (currLine <= this.line) {
            this.isClamped=false;
        }
    }

}
</script>

<style>
.clamped {
    line-height: 2.2rem;
    font-size: 1.5rem;
    margin: 2rem 0;
}
</style>
