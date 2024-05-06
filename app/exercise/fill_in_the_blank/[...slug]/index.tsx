import { useRoute } from '@react-navigation/native';

import Exercise from './exercise';
import Exercises from './exercises';

const index = () => {
    const route = useRoute();
    const { slug } = route.params as any;

    // console.log(slug);

    return (
        slug.length > 1 ? <Exercise categoryLink={slug[0]} lesionId={slug[1]} /> : <Exercises />
    )
}

export default index