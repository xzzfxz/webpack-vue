<template>
    <div>
        <image-view :list="list"></image-view>
    </div>
</template>

<script>
import imageView from '@/components/imageView';

export default {
    components: { imageView },
    data() {
        return {
            list: [
                {
                    id: 1,
                    src: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/08/ChMkJl3g4viIIgAIAAMAF4C-P60AAvffgC7HlAAAwAv265.jpg',
                },
                {
                    id: 2,
                    src: 'https://uploadfile.bizhizu.cn/up/f6/f4/25/f6f425198f79b422fc3c501f5338122b.jpg',
                },
                {
                    id: 3,
                    src: 'https://5b0988e595225.cdn.sohucs.com/images/20180205/0a866d907a7f45f9b8cc22c3977fdc49.jpeg',
                },
                {
                    id: 4,
                    src: 'https://macjpeg.macsc.com/macw/pic/202004/21143638_171dad9181.jpeg',
                },
                {
                    id: 5,
                    src: 'http://img.yao51.com/jiankangtuku/pqmwppssy.jpeg',
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
</style>