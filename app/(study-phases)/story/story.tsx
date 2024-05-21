import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, FONT } from "../../../constants";
import { Feather } from '@expo/vector-icons';

import famousQuotations from '@/data/famous-quotations.json'
import { useColorSchemeContext } from "@/context/ColorSchemeContext";

import StoryHeader from "@/components/Headers/StoryHeader";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import shortStories from '@/data/story/short-stories.json'
import motivationalStories from '@/data/story/motivational-stories.json';

const Story = ({ route }: any) => {
    const { id, slug } = route.params;
    const { colorScheme, theme } = useColorSchemeContext();
    const [stories, setStories] = useState<any>([]);
    const [story, setStory] = useState<any>([]);

    useEffect(() => {
        switch (slug) {
            case 'short-stories':
                setStories(shortStories);
                break;
            case 'motivational-stories':
                setStories(motivationalStories);
                break;
            default:
                break;
        }
    }, []);

    useEffect(() => {
        stories.forEach((story: any) => {
            if (story.id === id) {
                setStory(story);
            }
        })
    }, [stories]);

    return (
        <React.Fragment>
            <StoryHeader title={story.title} />

            <View style={{ flex: 1, padding: 16, backgroundColor: theme.mainBg, marginTop: -15, zIndex: 10000, borderTopStartRadius: 15, borderTopEndRadius: 15 }}>
                <Text style={{ fontSize: 22, fontFamily: FONT.bold, marginBottom: 8, color: theme.textSecondary }}>{story.title}</Text>
                <Text style={{ fontSize: 16, fontFamily: FONT.regular, marginBottom: 16, color: theme.textSecondary, lineHeight: 24 }}>{story.content}</Text>
            </View>
        </React.Fragment>
    )
}

export default Story

const styles = StyleSheet.create({})