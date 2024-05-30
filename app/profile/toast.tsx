import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Toast = ({ message, visible, duration = 3000 }: any) => {
    const [show, setShow] = useState(visible);
    const opacity = useState(new Animated.Value(0))[0];

    useEffect(() => {
        if (visible) {
            setShow(true);
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }).start(() => setShow(false));
                }, duration);
            });
        }
    }, [visible]);

    if (!show) {
        return null;
    }

    return (
        <Animated.View style={[styles.toast, { opacity }]}>
            <View style={styles.toastContent}>
                <Text style={styles.text}>{message}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        bottom: 50,
        zIndex: 1000,
        width: '100%',
    },
    toastContent: {
        backgroundColor: '#e84c3d',
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
        elevation: 10,
        shadowColor: '#000',
    },
    text: {
        color: 'white',
    },
});

export default Toast;
