import React, {useState, useEffect, FC} from 'react';
import {Terminal, MonitorSmartphone, Cpu, Code2, Zap, Settings, Layers, ChevronRight} from 'lucide-react';
import {PlaygroundState} from "@/modules/playground/components/playground-container/swPlaygroundContainer";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {usePlayground} from "@/modules/playground/providers/playground.provider";

export const NeoPixelPlayground: FC<PlaygroundState> = ({state}) => {
    const [containerState, setContainerState] = React.useState(state);

    const [animating, setAnimating] = useState(true);
    const pixelCount = 8;
    const [pixelColors, setPixelColors] = useState(Array(pixelCount).fill('#00ff00'));
    const {initPlayground, connect, isDeviceConnected, runCode} = usePlayground();

    // Simulated animation effect for demo purposes
    useEffect(() => {
        if (!animating) return;

        const interval = setInterval(() => {
            setPixelColors(prev => {
                const rainbow = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff'];
                return prev.map((_, i) => {
                    const colorIndex = (Math.floor(Date.now() / 200) + i) % rainbow.length;
                    return rainbow[colorIndex];
                });
            });
        }, 100);

        return () => clearInterval(interval);
    }, [animating]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
            {/* Header */}
            <header className="bg-gray-800 border-b border-blue-500/30 shadow-lg p-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Cpu className="text-blue-400" size={28}/>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {containerState.content.title}
                            </h1>
                        </div>
                        <div className="flex space-x-3">

                            <button
                                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded flex items-center"
                                onClick={() => {
                                    console.log("Button clicked!");
                                    connect();
                                }}
                            >
                                <Zap size={16} className="mr-1"/> Connect
                            </button>
                            <button
                                className={`text-white px-3 py-1 rounded flex items-center transition-transform transform hover:scale-110 shadow-md ${
                                    isDeviceConnected ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                                }`}
                                onClick={() => {
                                    console.log("Button clicked!");
                                    runCode(); // Example function to execute your logic
                                }}
                            >
                                <Zap size={16} className="mr-1"/> Run
                            </button>

                        </div>
                    </div>
                    <p className="mt-2 text-gray-300 max-w-3xl">
                        {containerState.content.description}
                    </p>
                </div>
            </header>

            {/* Main content */}
            <div className="flex-grow container mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left panel - Blockly */}
                    <div className="lg:col-span-2">
                        <div
                            className="bg-gray-800 rounded-lg border border-blue-500/30 shadow-lg overflow-hidden h-full">
                            <div className="flex items-center justify-between bg-gray-700 px-4 py-2">
                                <div className="flex items-center">
                                    <Code2 size={18} className="text-blue-400 mr-2"/>
                                    <h2 className="font-bold">Blockly Editor</h2>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">Export
                                    </button>
                                    <button className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">Import
                                    </button>
                                </div>
                            </div>
                            <div className=" bg-gray-700/50 relative">
                                {/* Mock Blockly UI */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-3  h-full w-full">

                                        <PlaygroundEditor editorConfig={containerState.editorConfig}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right panel - Hardware simulation */}
                    <div className="lg:col-span-1">
                        <div
                            className="bg-gray-800 rounded-lg border border-blue-500/30 shadow-lg overflow-hidden h-full">
                            <div className="flex items-center justify-between bg-gray-700 px-4 py-2">
                                <div className="flex items-center">
                                    <MonitorSmartphone size={18} className="text-green-400 mr-2"/>
                                    <h2 className="font-bold">Virtual Hardware</h2>
                                </div>
                                <button
                                    className={`text-xs ${animating ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} px-2 py-1 rounded`}
                                    onClick={() => setAnimating(!animating)}
                                >
                                    {animating ? 'Stop' : 'Animate'}
                                </button>
                            </div>

                            {/* Virtual hardware display */}
                            <div className="p-4 bg-black/70">
                                <PlaygroundRunner runnerConfig={containerState.runnerConfig}/>

                            </div>

                            {/* Terminal/console */}
                            <div className="bg-gray-900 p-2">
                                <div className="flex items-center text-xs text-gray-400 mb-1">
                                    <Terminal size={12} className="mr-1"/>
                                    <span>CONSOLE</span>
                                </div>
                                <div
                                    className="font-mono text-xs bg-black/90 p-2 rounded h-28 overflow-y-auto text-green-500">
                                    <div>init: NeoPixel strip initialized on pin D6</div>
                                    <div>info: 8 pixels detected</div>
                                    <div>exec: animation pattern 'rainbow' started</div>
                                    <div>debug: brightness set to 80%</div>
                                    <div className="text-yellow-400">warn: refresh rate exceeds 50fps</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 border-t border-blue-500/30 p-3 text-center text-sm text-gray-400">
                <div className="flex items-center justify-center">
                    <Layers size={14} className="mr-1"/>
                    <span>NeoPixel Playground v1.0</span>
                </div>
            </footer>
        </div>
    );
}