<template>
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
    <TheFeature
        v-for="feature in features"
        :key="feature.paragraph"
        :image="feature.image"
        :heading="feature.heading"
        :paragraph="feature.paragraph"
    />
</template>

<script>
import TheHeadline from '@/components/TheHeadline'
import TheBlog from '@/components/TheBlog'
import TheFeature from '@/components/TheFeature'

export default {
    components: {
        TheFeature,
        TheHeadline,
        TheBlog,
    },
    data() {
        return {
            features: [
                {
                    image: 'desktop/responsive.svg',
                    heading: '100% Responsive',
                    paragraph:
                        'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
                },
                {
                    image: 'desktop/no-limit.svg',
                    heading: 'No Photo Upload Limit',
                    paragraph:
                        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
                },
                {
                    image: 'desktop/embed.svg',
                    heading: 'Available to Embed',
                    paragraph:
                        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
                },
            ],
            headlines: [
                {
                    heading: 'CREATE AND SHARE YOUR PHOTO STORIES',
                    paragraph:
                        ' Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others. ',
                    callToAction: 'Get an invite',
                    backgroundColor: '#000000',
                    textColor: '#ffffff',
                    image: 'home/desktop/create-and-share.jpg',
                },
                {
                    heading: 'BEAUTIFUL STORIES EVERY TIME',
                    paragraph:
                        'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
                    callToAction: 'View the stories',
                    backgroundColor: '#ffffff',
                    textColor: '#000000',
                    image: 'home/desktop/beautiful-stories.jpg',
                },
                {
                    heading: 'designed for everyone',
                    paragraph:
                        'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
                    callToAction: 'View the stories',
                    backgroundColor: '#ffffff',
                    textColor: '#000000',
                    image: 'home/desktop/designed-for-everyone.jpg',
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
