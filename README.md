
# 🔧 CodePlayground: Learn Coding with Virtual Electronics

**CodePlayground** is an interactive learning platform designed to teach kids and beginners how to code using **block-based programming**. It brings hardware to life—virtually! With components like **NeoPixels, Servo Motors, LEDs**, and more, users can build and control circuits through a fun and intuitive Blockly interface.

---

## 🌟 Features

- 🧱 **Blockly Integration**  
  Drag-and-drop blocks to build your programs—no typing required.

- 💡 **Virtual Hardware Components**  
  Simulate real-world components like:
    - NeoPixel LED strips
    - Servo motors
    - Basic LEDs
    - More to come!

- 🎯 **Challenge Mode**  
  Learn by doing! Step-by-step challenges teach users how to control components and solve problems using logic and creativity.

- 🧪 **Live Playground**  
  Instant feedback while coding. See your virtual components respond in real time.

---

## 🚀 Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/mrmilind11/elgorithm-web.git
   cd elgorithm-web


## 🛠️ How to Add a New Component

To integrate a new virtual hardware component:

### 1. Create the UI Component
- **Path:** `src/modules/playground/components/simulated-hardwares/`
- **Action:** Create a new file for your component.
- **Include:** Add Wokwi element and basic rendering logic.

### 2. Add Component Controller
- **Create a controller file** for the component.
- **Define all methods and action payloads** that will be triggered from block code.

### 3. Define Block Keys
- **Create unique keys** for each Blockly block related to this component.
- **Purpose:** Helps in mapping actions to block definitions and code generation.

### 4. Add Block Definitions
- **Path:** `src/utils/playground/workspace/blocks/definitions/`
- **Action:** Create a block definition file (e.g., `ledBlocks.js`).
- **Structure:** Define all block UIs in a JSON array format.

### 5. Generate Code for Blocks
- **Create a function** that maps block keys to actual code.
- **Fetch logic** from the component controller to keep things modular.

### 6. Register Blocks in Block Registry
- **Path:** `src/utils/playground/workspace/blocks/blocks.js`
- **Action:** Import your block definition file and add it to the registry.

### 7. Add to Component Toolbox
- **Path:** `src/utils/playground/workspace/toolbox/component_toolboxes/`
- **Action:** Create a toolbox file for your component.
- **Include:** All relevant block keys.

### 8. Include in Main Toolbox
- **Path:** `src/utils/playground/workspace/toolbox/toolboxContainer.js`
- **Action:** Import your component toolbox and add to the `mainToolbox` array.

---

## 🎮 Demo

_Demo coming soon!_

---

## 🤝 Contributing

We welcome contributions to improve components, add new challenges, or enhance the interface!

- Fork the repo
- Create a feature branch
- Submit a pull request 🚀

---

## 📄 License

**MIT License**  
Feel free to use, modify, and share!

---

**Made with ❤️ to make coding fun for everyone.**

## Getting Started

First, run the development server:

```bash
yarn install 
yarn build
yarn dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


