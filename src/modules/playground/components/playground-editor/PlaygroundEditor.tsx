'use client';
import React, {FC, useEffect, useRef} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";

interface PlaygroundEditorProps {

}

export const PlaygroundEditor: FC<PlaygroundEditorProps> = () => {
    const editorRef = useRef<HTMLDivElement>(null);
    const initializedEditor = useRef(false);

    const {initPlayground} = usePlayground();

    useEffect(() => {
        if (editorRef.current && !initializedEditor.current) {
            initPlayground(editorRef.current);
            initializedEditor.current = true;
        }
    }, []);
    return (
            <div ref={editorRef} className={'w-[500px] h-96  bg-gray-300 rounded-lg'}/>


    )
}
