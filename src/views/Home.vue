<template>
    <TheNavigation />
    <TheHeadline
        v-for="headline in headlines"
        :key="headline.paragraph"
        :heading="headline.heading"
        :paragraph="headline.paragraph"
        :callToAction="headline.callToAction"
        :backgroundColor="headline.backgroundColor"
        :textColor="headline.textColor"
        :image="headline.image"
    />
    <TheBlog
        v-for="blogInfo in blogInfos"
        :key="blogInfo.title"
        :title="blogInfo.title"
        :author="blogInfo.author"
        :image="blogInfo.image"
    />
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import TheHeadline from '@/components/TheHeadline'
import TheBlog from '@/components/TheBlog'

export default {
    components: {
        TheNavigation,
        TheHeadline,
        TheBlog,
    },
    data() {
        return {
            headlines: [
                {
                    heading: 'CREATE AND SHARE YOUR PHOTO STORIES',
                    paragraph:
                        ' Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others. ',
                    callToAction: 'Get an invite',
                    backgroundColor: '#000000',
                    textColor: '#ffffff',
                    image: 'desktop/create-and-share.jpg',
                },
                {
                    heading: 'BEAUTIFUL STORIES EVERY TIME',
                    paragraph:
                        'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
                    callToAction: 'View the stories',
                    backgroundColor: '#ffffff',
                    textColor: '#000000',
                    image: 'desktop/beautiful-stories.jpg',
                },
                {
                    heading: 'designed for everyone',
                    paragraph:
                        'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
                    callToAction: 'View the stories',
                    backgroundColor: '#ffffff',
                    textColor: '#000000',
                    image: 'desktop/designed-for-everyone.jpg',
                },
            ],
            blogInfos: [
                {
                    image: 'desktop/mountains.jpg',
                    title: 'The Mountains',
                    author: 'John Appleseed',
                },
                {
                    image: 'desktop/cityscapes.jpg',
                    title: 'Sunset Cityscapes',
                    author: 'Benjamin Cruz',
                },
                {
                    image: 'desktop/18-days-voyage.jpg',
                    title: '18 Days Voyage',
                    author: 'Alexei Brodin',
                },
                {
                    image: 'desktop/architecturals.jpg',
                    title: 'Architecture',
                    author: 'Samantha Brooke',
                },
            ],
        }
    },
}
</script>

<style lang="scss"></style>
