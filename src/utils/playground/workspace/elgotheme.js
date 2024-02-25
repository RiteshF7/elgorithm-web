import Blockly from 'blockly/core';

Blockly.registry.unregister('theme', 'elgo_theme');

export default Blockly.Theme.defineTheme('elgo_theme', {
    'base': Blockly.Themes.Classic,
    'blockStyles':{
        'loop_blocks': {
            'colourPrimary': '#000000',
            'colourSecondary':'#000000',
            'colourTertiary':'#000000'
        }

    },
    'componentStyles': {
        'workspaceBackgroundColour': '#1e1e1e',
        'toolboxBackgroundColour': 'blackBackground',
        'toolboxForegroundColour': '#fff',
        'flyoutBackgroundColour': '#252526',
        'flyoutForegroundColour': '#ccc',
        'flyoutOpacity': 1,
        'scrollbarColour': '#797979',
        'insertionMarkerColour': '#fff',
        'insertionMarkerOpacity': 0.3,
        'scrollbarOpacity': 0.4,
        'cursorColour': '#d0d0d0',
        'blackBackground': '#333',
    },
});
