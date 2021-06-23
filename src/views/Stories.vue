<template>
    <TheHeadline
        :heading="headlines[0].heading"
        :paragraph="headlines[0].paragraph"
        :callToAction="headlines[0].callToAction"
        :backgroundColor="headlines[0].backgroundColor"
        :textColor="headlines[0].textColor"
        :image="headlines[0].image"
        :subHeading="'LAST MONTH’S FEATURED STORY'"
        :author="'John Appleseed'"
        :date="'March 2nd 2020'"/>
    <TheBlog
        v-for="blogInfo in blogInfos"
        :key="blogInfo.title"
        :title="blogInfo.title"
        :author="blogInfo.author"
        :image="blogInfo.image"
/></template>

<script>
import TheHeadline from '@/components/TheHeadline'
import TheBlog from '@/components/TheBlog'

export default {
    components: {
        TheHeadline,
        TheBlog,
    },
    data() {
        return {
            headlines: [
                {
                    image: 'stories/desktop/moon-of-appalacia.jpg',
                    heading: 'HAZY FULL MOON OF APPALACHIA',
                    paragraph:
                        'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
                    callToAction: 'READ THE STORY',
                    backgroundColor: '#000000',
                    textColor: '#ffffff',
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
                {
                    image: 'desktop/world-tour.jpg',
                    title: 'World Tour 2019',
                    author: 'Timotyh Wagner',
                },
                {
                    image: 'desktop/unforeseen-corners.jpg',
                    title: 'Unforeseen Corners',
                    author: 'William Malcolm',
                },
                {
                    image: 'desktop/king-on-africa.jpg',
                    title: 'King of Africa: Part II',
                    author: 'Tim Hillenburg',
                },
                {
                    image: 'desktop/trip-to-nowhere.jpg',
                    title: 'The Trip to Nowhere',
                    author: 'Felicia Rourke',
                },
                {
                    image: 'desktop/rage-of-the-sea.jpg',
                    title: 'Rage of The Sea',
                    author: 'Mohammed Abdul',
                },
                {
                    image: 'desktop/running-free.jpg',
                    title: 'Running Free',
                    author: 'Michelle',
                },
                {
                    image: 'desktop/behind-the-waves.jpg',
                    title: 'Behind The Waves',
                    author: 'Lamar Wilson',
                },
                {
                    image: 'desktop/calm-waters.jpg',
                    title: 'Calm Waters',
                    author: 'Samantha Brooke',
                },
                {
                    image: 'desktop/milky-way.jpg',
                    title: 'The Milky Way',
                    author: 'Benjamin Cruz',
                },
                {
                    image: 'desktop/dark-forest.jpg',
                    title: 'Night at The Dark Forest',
                    author: 'Mohammed Abdul',
                },
                {
                    image: 'desktop/somwarpet.jpg',
                    title: "Sonwarpet's Beauty",
                    author: 'Michelle',
                },
                {
                    image: 'desktop/land-of-dreams.jpg',
                    title: 'Land Of Dreams',
                    author: 'William Malcom',
                },
            ],
        }
    },
}
</script>

<style></style>
