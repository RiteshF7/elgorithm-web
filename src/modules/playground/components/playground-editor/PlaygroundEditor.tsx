'use client';
import React, {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import NeopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/neopixelBlockConfig";
import {getPlainToolBox, getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";
import {Button} from "@/modules/common/components/button/Button";
import Dropdown from "@/modules/common/DropDown";
import {run} from "plop";

interface PlaygroundEditorProps {
    editorConfig: any;
}

export const PlaygroundEditor: FC<PlaygroundEditorProps> = ({editorConfig}) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const initializedEditor = useRef(false);
    const toolboxContainer = {
        'kind': editorConfig.toolboxType,
        'contents': getPlainToolBox(editorConfig.toolboxContent)
    }
    const {initPlayground, connect, isDeviceConnected, runCode} = usePlayground();


    useEffect(() => {
        if (editorRef.current && !initializedEditor.current) {
            initPlayground(editorRef.current, toolboxContainer);
            initializedEditor.current = true;
        }
    }, []);
    return (
        <main className={``}> {/*  Main container */}


            <div
                ref={editorRef}
                className="bg-gray-300 rounded-lg h-full w-full"
                style={{width: "780px", height: "570px"}}
            />
        </main>

    )
}
