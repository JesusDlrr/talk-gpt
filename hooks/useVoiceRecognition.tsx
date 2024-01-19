import Voice, {
    SpeechErrorEvent,
    SpeechResultsEvent
} from '@react-native-voice/voice';
import { useCallback, useState } from 'react';

interface IState {
    recognized: string;
    pitch: string;
    error: string;
    end: string;
    started: string;
    results: string[];
    partialResults: string[];
    isRecording: boolean;
}

export const useVoiceRecognition = () => {
    const [state, setState] = useState<IState>({
        recognized: "",
        pitch: "",
        error: "",
        end: "",
        started: "",
        results: [],
        partialResults: [],
        isRecording: false
    });

    const resetState = useCallback(() => {
        setState({
            recognized: "",
            pitch: "",
            error: "",
            end: "",
            started: "",
            results: [],
            partialResults: [],
            isRecording: false
        })
    }, [setState]);

    const startRecognizing = useCallback(async () => {
        resetState();
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.log(e);
        }
    }, [resetState]);

    const stopRecognizing = useCallback(async () => {
        resetState();
        try {
            await Voice.stop();
        } catch (e) {
            console.log(e);
        }
    }, [resetState]);
}