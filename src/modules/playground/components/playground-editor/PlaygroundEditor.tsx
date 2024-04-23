'use client';
import React, {FC, useEffect, useRef} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import NeopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/neopixelBlockConfig";
import {getPlainToolBox, getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";

interface PlaygroundEditorProps {
editorConfig:any;
}

export const PlaygroundEditor: FC<PlaygroundEditorProps> = ({editorConfig}) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const initializedEditor = useRef(false);
    const toolboxContainer = {
        'kind': editorConfig.toolboxType,
        'contents':getPlainToolBox(editorConfig.toolboxContent)
    }
    const {initPlayground} = usePlayground();



    useEffect(() => {
        if (editorRef.current && !initializedEditor.current) {
            initPlayground(editorRef.current,toolboxContainer);
            initializedEditor.current = true;
        }
    }, []);
    return (
            <div ref={editorRef} className={'w-[500px] h-96  bg-gray-300 rounded-lg'}/>


    )
}
