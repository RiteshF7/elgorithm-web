import React, { useRef, useEffect } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

interface JsonEditorWrapperProps {
    json: any;
    onChange: (json: any) => void;
}

const JsonEditorWrapper: React.FC<JsonEditorWrapperProps> = ({ json, onChange }) => {
    const editorRef = useRef<any>(null);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.jsonEditor.update(json);
        }
    }, [json]);

    return (
        <div className="my-4">
            <h3 className="text-lg mb-2">Edit Playground JSON</h3>
            <Editor
                ref={editorRef}
                value={json}
                onChange={onChange}
                className="border p-2 rounded"
            />
        </div>
    );
};

export default JsonEditorWrapper;
