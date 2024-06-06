'use client'
import React, { useEffect, useRef } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import { Button } from '@/modules/common/components/button/Button';

interface JsonEditorProps {
    inputJson: any;
    onSave: (newJson: any) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ inputJson, onSave }) => {
    const editorRef = useRef<any>(null);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.jsonEditor.update(inputJson);
        }
    }, [inputJson]);

    const handleSave = () => {
        if (editorRef.current) {
            const currentJson = editorRef.current.jsonEditor.get();
            onSave(currentJson);
        }
    };

    return (
        <div className="w-full">
            <h1 className="text-xl font-bold mb-4">JSON Editor</h1>
            <Editor
                ref={editorRef}
                value={inputJson}
                onChange={() => {}}
                className="mb-4"
            />
            <Button
                className="p-4 bg-blue-500 text-white rounded"
                uiType="primary"
                onClick={handleSave}
            >
                Save
            </Button>
        </div>
    );
};

export default JsonEditor;
