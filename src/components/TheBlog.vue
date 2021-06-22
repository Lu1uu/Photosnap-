<template>
    <!-- <img :src="require(`@/assets/home/mobile/${image}`)" alt="image" /> -->

    <div
        class="blog"
        :style="{
            backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),' +
                'url(' +
                require(`@/assets/stories/${image}`) +
                ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <h3 class="blog__title">{{ title }}</h3>
        <p class="blog__author">{{ author }}</p>
        <hr />
        <div class="blog__call-to-action">
            <p>Read story</p>
            <svg
                class="headline__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="14"
            >
                <g fill="none" fill-rule="evenodd" stroke="white">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'author', 'image'],
}
</script>

<style lang="scss">
.blog {
    width: 100%;
    height: 50rem;
    padding: 5rem;
    color: white;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__title {
        line-height: 2.5rem;
        font-size: 3rem;
    }
    &__author {
        margin-top: 1rem;
        font-size: 1.6rem;
        line-height: 1.7rem;
    }
    hr {
        opacity: 0.6;
        color: white;
        margin: 2rem 0;
    }
    &__call-to-action {
        line-height: 1.6rem;
        width: 100%;
        display: flex;
        text-transform: uppercase;
        justify-content: space-between;
        font-size: 1.6rem;
        font-weight: bold;
        letter-spacing: 2px;
    }
}
</style>
