<template>
    <div class="feature">
        <img
            class="feature__image"
            :src="require(`@/assets/features/${image}`)"
        />
        <p class="feature__heading">{{ heading }}</p>
        <p class="feature__paragraph">{{ paragraph }}</p>
    </div>
</template>

<script>
export default {
    props: ['image', 'heading', 'paragraph'],
}
</script>

<style lang="scss" scoped>
.feature {
    padding: 0 3rem;
    background: white;
    width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__image {
        width: 10rem;
    }
    &__heading {
        margin-top: 7rem;
        font-size: 3rem;
    }
    &__paragraph {
        margin-top: 3rem;
        text-align: center;
        font-size: 1.6rem;
        line-height: 25px;
        color: #000000b6;
    }
}
</style>
