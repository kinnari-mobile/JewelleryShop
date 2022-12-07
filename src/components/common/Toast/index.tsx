import React, { Fragment, useEffect, useState } from "react";
import { Animated } from "react-native";
import { AppDispatch } from "@store/store";
import { RootState } from "@store/reducers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnimatedView, Spacer, Text, ToastContainer } from "./styles";
import { toggleToast } from "@store/slice";



const AnimatedStyledView = Animated.createAnimatedComponent(AnimatedView);

export interface IToast {
    animation?: "top" | "bottom";
    type?: "success" | "error" | "info" | "warning";
    width?: number;
    height?: number;
}


function Toast() {
    const dispatch = useDispatch<AppDispatch>();
    const toast = useSelector((state: RootState) => state).toast;
    const { animation, showToast, type, message } = toast;

    const [animatedValue] = useState(new Animated.Value(0.0));
    const [isToastOpen, setIsToastOpen] = useState(showToast);

    const closeToastMsg = () => {
        const tm = setTimeout(() => {
            Animated.timing(animatedValue, {
                toValue: 0.0,
                duration: 350,
                useNativeDriver: false,
            }).start(() => {
                setIsToastOpen(false);
                dispatch(toggleToast({ showToast: false }));
            });
            clearTimeout(tm);
        }, 1500);
    };

    const triggerToastMsg = () => {
        setIsToastOpen(true);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 350,
            useNativeDriver: false,
        }).start(() => closeToastMsg());
    };

    useEffect(() => {
        if (showToast) {
            triggerToastMsg();
        }
    }, [showToast]);

    const selectedAnimation = animatedValue.interpolate({
        inputRange: [0, 0.3, 1],
        outputRange: [
            animation !== "top" ? 40 : -40,
            animation !== "top" ? 10 : -10,
            0,
        ],
    });

    if (!isToastOpen) {
        return <Fragment />;
    }

    return (
        <ToastContainer pointerEvents={"none"}>
            <Spacer>
                <AnimatedStyledView
                    as={Animated.View}
                    animation={animation}
                    type={type}
                    style={{
                        opacity: animatedValue,
                        transform: [{ translateY: selectedAnimation }],
                    }}
                >
                    <Text>{message}</Text>
                </AnimatedStyledView>
            </Spacer>
        </ToastContainer>
    );
};

export { Toast };