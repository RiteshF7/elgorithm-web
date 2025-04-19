import React, {FC} from 'react';
import {Cpu, Zap, Code2, MonitorSmartphone, Terminal, Layers} from 'lucide-react';
import {PlaygroundState} from "@/modules/playground/components/playground-container/swPlaygroundContainer";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {usePlayground} from "@/modules/playground/providers/playground.provider";

// Header Component
interface HeaderProps {
    title: string;
    description: string;
    onConnect: () => void;
    onRunCode: () => void;
    isDeviceConnected: boolean;
}

const Header: FC<HeaderProps> = ({
                                     title,
                                     description,
                                     onConnect,
                                     onRunCode,
                                     isDeviceConnected
                                 }) => {
    return (
        <header className="bg-gray-800 border-b border-blue-500/30 shadow-lg p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Cpu className="text-blue-400" size={28}/>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {title}
                        </h1>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded flex items-center"
                            onClick={onConnect}
                        >
                            <Zap size={16} className="mr-1"/> Connect
                        </button>
                        <button
                            className={`text-white px-3 py-1 rounded flex items-center transition-transform transform hover:scale-110 shadow-md ${
                                isDeviceConnected ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                            }`}
                            onClick={onRunCode}
                        >
                            <Zap size={16} className="mr-1"/> Run
                        </button>
                    </div>
                </div>
                <p className="mt-2 text-gray-300 max-w-3xl">
                    {description}
                </p>
            </div>
        </header>
    );
};

// Editor Panel Component
interface EditorPanelProps {
    editorConfig: any;
    className?: string;
}

const EditorPanel: FC<EditorPanelProps> = ({editorConfig, className}) => {
    return (
        <div className={className}>
            <div className="bg-gray-800 rounded-lg border border-blue-500/30 shadow-lg overflow-hidden h-full">
                <div className="flex items-center justify-between bg-gray-700 px-4 py-2">
                    <div className="flex items-center">
                        <Code2 size={18} className="text-blue-400 mr-2"/>
                        <h2 className="font-bold">Blockly Editor</h2>
                    </div>
                    <div className="flex space-x-2">
                        <button className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">
                            Export
                        </button>
                        <button className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">
                            Import
                        </button>
                    </div>
                </div>
                <div className="bg-gray-700/50 relative">
                    <PlaygroundEditor editorConfig={editorConfig}/>
                </div>
            </div>
        </div>
    );
};

const Console: FC = () => {
    return (
        <div className="bg-gray-900 p-2 flex flex-col h-full">
            <div className="flex items-center text-xs text-gray-400 mb-1">
                <Terminal size={12} className="mr-1"/>
                <span>CONSOLE</span>
            </div>
            <div className="font-mono text-xs bg-black/90 p-2 rounded flex-grow overflow-y-auto text-green-500">
                <div className="font-mono text-xs bg-black/90 p-2 rounded h-48 overflow-y-auto text-green-500">
                    <div className="text-blue-400">[INFO]: Initializing hardware...</div>
                    <div className="text-green-500">[SUCCESS]: Connection established to module on pin D4</div>
                    <div className="text-blue-400">[INFO]: Loading hardware configurations...</div>
                    <div className="text-green-500">[SUCCESS]: Module detected, parameters set</div>
                    <div className="text-cyan-400">[DEBUG]: Refresh rate set to 60fps</div>
                    <div className="text-yellow-400">[WARN]: Module response time exceeds optimal threshold</div>
                    <div className="text-gray-400">[STATUS]: Hardware awaiting command...</div>
                    <div className="text-blue-400">[INFO]: Running operation on module...</div>
                    <div className="text-green-500">[SUCCESS]: Operation completed successfully</div>
                    <div className="text-cyan-400">[DEBUG]: System optimized for current workload</div>
                    <div className="text-gray-400">[STATUS]: All modules operational</div>
                </div>
            </div>
        </div>
    );
};

// Hardware Panel Component
interface HardwarePanelProps {
    runnerConfig: any;
    className?: string;
}

const HardwarePanel: FC<HardwarePanelProps> = ({runnerConfig, className}) => {
    return (
        <div className={className}>
            <div
                className="bg-gray-800 rounded-lg border border-blue-500/30 shadow-lg overflow-hidden flex flex-col h-full">
                <div className="flex items-center justify-between bg-gray-700 px-4 py-2">
                    <div className="flex items-center">
                        <MonitorSmartphone size={18} className="text-green-400 mr-2"/>
                        <h2 className="font-bold">Virtual Hardware</h2>
                    </div>
                </div>

                {/* Runner container with only the space it needs */}
                <div className="p-4 bg-black/70">
                    <PlaygroundRunner runnerConfig={runnerConfig}/>
                </div>

                {/* Console takes remaining vertical space with flex-grow */}
                <div className="flex-grow flex flex-col">
                <Console/>
                </div>
            </div>
        </div>
    );
};

// Footer Component
interface FooterProps {
    version: string;
}

const Footer: FC<FooterProps> = ({version}) => {
    return (
        <footer className="bg-gray-800 border-t border-blue-500/30 p-3 text-center text-sm text-gray-400">
            <div className="flex items-center justify-center">
                <Layers size={14} className="mr-1"/>
                <span>NeoPixel Playground v{version}</span>
            </div>
        </footer>
    );
};

// Main Component
export const NeoPixelPlayground: FC<PlaygroundState> = ({state}) => {
    const {connect, isDeviceConnected, runCode} = usePlayground();

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-100">
            <Header
                title={state.content.title}
                description={state.content.description}
                onConnect={connect}
                onRunCode={runCode}
                isDeviceConnected={isDeviceConnected}
            />

            <main className="flex-grow container mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <EditorPanel
                        editorConfig={state.editorConfig}
                        className="lg:col-span-2"
                    />
                    <HardwarePanel
                        runnerConfig={state.runnerConfig}
                        className="lg:col-span-1"
                    />
                </div>
            </main>

            <Footer version="1.0"/>
        </div>
    );
};