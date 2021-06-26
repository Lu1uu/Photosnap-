<template>
    <TheHeadline
        :key="headline.paragraph"
        :heading="headline.heading"
        :paragraph="headline.paragraph"
        :callToAction="headline.callToAction"
        :backgroundColor="headline.backgroundColor"
        :textColor="headline.textColor"
        :image="headline.image"
    />
    <TheFeature
        v-for="feature in features"
        :key="feature.paragraph"
        :image="feature.image"
        :heading="feature.heading"
        :paragraph="feature.paragraph"
    />
    <div class="beta">
        <h2 class="beta__heading">We’re in beta. Get your invite today!</h2>
        <div class="beta__call-to-action">
            <p>GET AN INVITE</p>
            <svg
                class="headline__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="14"
            >
                <g fill="none" fill-rule="evenodd" stroke="#fff">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import TheHeadline from '@/components/TheHeadline'
import TheFeature from '@/components/TheFeature'

export default {
    components: {
        TheFeature,
        TheHeadline,
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            blogInfo: {
                title: ' We’re in beta. Get your invite today!',
                author: 'blah',
                image: '',
            },
            headline: {
                paragraph:
                    'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
                heading: 'FEATURES',
                callToAction: '',
                backgroundColor: '#000000',
                textColor: '#ffffff',
                image: 'features/desktop/hero.jpg',
            },
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
                {
                    image: 'desktop/custom-domain.svg',
                    heading: 'Custom Domain',
                    paragraph:
                        'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! ',
                },
                {
                    image: 'desktop/boost-exposure.svg',
                    heading: 'Boost Your Exposure',
                    paragraph:
                        'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
                },
                {
                    image: 'desktop/drag-drop.svg',
                    heading: 'Drag & Drop',
                    paragraph:
                        'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories. ',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.beta {
    background-image: url('../assets/shared/mobile/bg-beta.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    padding: 6rem 3rem;
    display: grid;
    place-items: center;
    &__heading {
        text-transform: uppercase;
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 3.3px;
    }
    &__call-to-action {
        place-self: start;
        margin-top: 5rem;
        cursor: pointer;
        display: flex;
        line-height: 15.6px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 1.6rem;
        p {
            padding-right: 2rem;
        }
    }
}
</style>
