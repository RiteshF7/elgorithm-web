'use client';
import {FC, useEffect, useRef} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";

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
        <div ref={editorRef} className={'basis-8/12 h-96 bg-gray-300'}/>
    )
}
