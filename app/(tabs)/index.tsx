
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// screen components
import HomeScreen from '@/components/Home/Home';

// Job Solution
import BcsSolution from '@/app/(job-solution)/bcs-solution/index';
import BcsPreparation from '@/app/(job-solution)/bcs-preliminary/index';

// Study Phases
import VocabularyScreen from '@/app/(study-phases)/vocabulary/index';
import GrammerScreen from '@/app/(study-phases)/grammer/index';
import DusScreen from '@/app/(study-phases)/daily-use-sentences/index';
import StoryScreen from '@/app/(study-phases)/story/index';
import PhrasesScreen from '@/app/(study-phases)/idioms-and-phrases/index';
import ConversationScreen from '@/app/(study-phases)/common-conversations/index';
import ProverbsScreen from '@/app/(study-phases)/proverbs/index';
import QuotationScreen from '@/app/(study-phases)/famous-quotations/index';


// Create a stack navigator
const Stack = createStackNavigator();

export default function TabOneScreen() {
  return (

    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false
      }}>

      <Stack.Screen name="home_screen" component={HomeScreen} options={{ headerShown: false }} />

      {/* Job Solution */}
      <Stack.Screen name="bcs_solution_screen" component={BcsSolution} options={{ headerShown: false }} />
      <Stack.Screen name="bcs_preliminary_screen" component={BcsPreparation} options={{ headerShown: false }} />
      {/* <Stack.Screen name="ntrca_preliminary_screen" component={BcsPreparation} options={{ headerShown: false }} />
      <Stack.Screen name="bank_preliminary_screen" component={BcsPreparation} options={{ headerShown: false }} /> */}

      {/* Study Phases */}
      <Stack.Screen name="grammer_screen" component={GrammerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="vocabulary_screen" component={VocabularyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="dus_screen" component={DusScreen} options={{ headerShown: false }} />
      <Stack.Screen name="story_screen" component={StoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="phrases_screen" component={PhrasesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="conversation_screen" component={ConversationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="proverbs_screen" component={ProverbsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="quotation_screen" component={QuotationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}