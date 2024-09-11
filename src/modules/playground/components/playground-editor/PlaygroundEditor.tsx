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
    const {initPlayground,connect,isDeviceConnected,runCode} = usePlayground();


    useEffect(() => {
        if (editorRef.current && !initializedEditor.current) {
            initPlayground(editorRef.current, toolboxContainer);
            initializedEditor.current = true;
        }
    }, []);
    return (
        <main className="relative h-screen w-screen flex flex-col"> {/* Main container */}

            {/* Button container positioned on top */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-5 p-5 z-10">


                <div
                    className={`\` text-center border-2 border-black rounded-lg ${isDeviceConnected ? "bg-green-500" : "bg-red-500"}`}
                    onClick={() => runCode()}>
                    <img src="/icons/play.png" alt="icon" className="w-8 h-8 "/>
                </div>
                <div onClick={() => connect()}>
                    <img src="/icons/connect.png" alt="icon" className="w-8 h-8 "/>
                </div>

            </div>

            <div ref={editorRef} className="h-full w-full bg-gray-300 rounded-lg flex-1">

            </div>

        </main>

    )
}
