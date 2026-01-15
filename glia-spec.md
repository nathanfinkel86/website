# Glia

Glia is a **multiplayer music visual programming environment** for creating and sharing audio processing graphs in real-time. Built on CMajor and JUCE, it enables collaborative music creation through an intuitive node-based interface, real-time code generation, and distributed synchronization.

## What is Glia?

- **Visual Programming:** Drag-and-drop interface for building audio processing graphs
- **Real-Time Collaboration:** Multiple users can edit sessions simultaneously via Yjs CRDTs
- **CMajor-Powered:** High-performance audio DSL compiled to native code or WebAssembly
- **Cross-Platform:** Web client, desktop relay, and native plugin (VST3/AU)
- **MIDI Integration:** MIDI learn system for hardware controller mapping
- **Modular Design:** Organize complex graphs with nested groups

## Quick Links

- **[Architecture Overview](./Architecture.md)** - Comprehensive system architecture
- **[Feature Status](./features/FEATURE_STATUS.md)** - Implementation status of all features
- **[Quick Start Guide](../QUICKSTART.md)** - Get up and running quickly
- **[Web Client Context](../web/client/Context.md)** - Client-specific documentation

## Core Technologies

- **CMajor** (https://cmajor.com/) - Audio DSL for high-performance processing
- **JUCE** (https://juce.com/) - Cross-platform C++ framework for audio plugins
- **Yjs** (https://yjs.dev/) - CRDTs for conflict-free real-time collaboration
- **React Flow** (https://reactflow.dev/) - Graph visualization library
- **RedwoodJS** (https://redwoodjs.com/) - Full-stack React framework
- **Tauri** (https://tauri.app/) - Desktop application framework

## Architecture

> **📖 For comprehensive architectural details, see [Architecture.md](./Architecture.md)**

Glia consists of three main components working together:

### 1. Web Client (`/web/client`)

**Purpose:** Visual programming interface for creating audio graphs

**Key Features:**
- React Flow-based graph editor with drag-and-drop nodes
- Real-time CMajor code generation from visual graphs
- Yjs integration for collaborative editing
- MIDI CC mapping interface
- Group-based node organization
- IndexedDB for local viewport persistence

**Technologies:** RedwoodJS, React, React Flow, Yjs, Vite, TypeScript

**Details:** See [Web Client Context](../web/client/Context.md)

### 2. Relay (`/relay`)

**Purpose:** Desktop application hosting synchronization services

**Components:**
- **Hocuspocus Runner** - Yjs WebSocket server (port 40775)
- **Patch Watcher** - Filesystem ↔ Yjs synchronization
- **Tauri App** - Process management and monitoring UI
- **libp2p Service** - P2P discovery (foundation, not yet active)

**Technologies:** Tauri (Rust), Node.js, Hocuspocus, Chokidar, libp2p

**Port Configuration:** Port 40775 (changed from 1234 to avoid conflicts with DAWs like Bitwig). Automatic fallback to 40776-40779 if unavailable.

### 3. Native Plugin (`/native`)

**Purpose:** Audio engine for real-time processing in DAWs or standalone

**Features:**
- CMajor JIT compilation
- MIDI CC learning and mapping
- WebSocket communication with embedded webview
- Plugin formats: VST3, AU, Standalone

**Technologies:** JUCE 7.x, CMajor, C++17, CMake

**UI:** Embeds the web client in a native webview for consistent UX 

## Data Synchronization

Glia uses **Yjs CRDTs** (Conflict-free Replicated Data Types) for real-time collaborative synchronization, enabling multiple users to edit sessions simultaneously without conflicts.

### Document Structure

**Patch Documents** (`glia/<PatchID>`):
- Stores CMajor source files synchronized from filesystem
- Y.Map `files` containing:
  - `content`: File contents as string
  - `name`: Filename without extension
  - `extension`: Extension with leading dot (`.cmajor`, `.js`)
  - `lastModified`: Timestamp (ms since epoch)
  - `relativePath`: Full relative path

**Session Documents** (`session:<username>/<sessionname>`):
- Stores user's music workspace (graph of nodes)
- Y.Map `session` containing:
  - `name`: Session name
  - `groups`: Nested groups of nodes (recursive structure)
  - `nodes`: Audio processing nodes with parameters
  - `connections`: Wires between nodes
  - `midiMappings`: MIDI CC to parameter mappings
  - `owner`, `collaborators`: Permission metadata

**Index Document** (`glia/__index__`):
- Lightweight directory of all known patches
- Y.Map `patches` for quick discovery
- Clients connect to index first, then lazily load patches

### Port Configuration

**Default Port:** 40775 (changed from 1234 to avoid conflicts with Bitwig Studio and other DAWs)

**Fallback Ports:** Automatic retry on 40776, 40777, 40778, 40779 if port unavailable

**Port Discovery:**
- Hocuspocus writes actual port to `/tmp/relay-hocuspocus/hocuspocus.port`
- Patch Watcher reads port file to connect
- Web client tries default port then fallbacks
- Native plugin uses user-specified port

### Filesystem Synchronization

**Patch Watcher** monitors `~/Glia/patches/public/` (or configured directory):
- **Chokidar** watches for file changes
- **Validation** via Zod schemas (`patch.schema.ts`)
- **Bidirectional sync**: Filesystem ↔ Yjs ↔ Clients
- **Ignore patterns**: `.git`, `.DS_Store`, `node_modules`, `.vscode`, temp files
  - Centralized in `/relay/patch-watcher/src/ignore.js`

### Data Schemas

All data structures defined in `/schemas/yjs/` with TypeScript + Zod:

| Schema | Purpose | Yjs Path |
|--------|---------|----------|
| **`session.schema.ts`** | Sessions, groups, nodes, connections, MIDI mappings | `session:<user>/<name>` |
| **`patch.schema.ts`** | CMajor files, metadata, I/O endpoints | `glia/<PatchID>` |
| **`awareness.schema.ts`** | Real-time user presence (ephemeral) | Awareness API |
| **`validation.ts`** | Runtime validation utilities | N/A |
| **`permissions.ts`** | Access control framework | N/A |

**Benefits:**
- ✅ TypeScript types for compile-time safety
- ✅ Zod validation for runtime checks
- ✅ Shared across client, relay, tests
- ✅ Living documentation for AI and humans

**See:** `/schemas/README.md` for detailed usage

### Collaborative Features

**Real-Time Awareness:**
- Mouse cursor position tracking
- Viewport position and zoom sync
- Remote user cursors (colored with names)
- Throttled updates (~20Hz / 50ms) for performance
- Ephemeral data (not persisted)

**Conflict-Free Editing:**
- Yjs CRDTs automatically merge concurrent changes
- No manual conflict resolution needed
- Per-user undo stacks (planned)
- Offline-capable (changes queue when disconnected)

**Permissions (Current):**
- Owner-based access control
- Collaborators with specific permissions
- Hooks into HocusPocus `onConnect` and `onChange`
- Designed to evolve to libp2p-based decentralized auth

**See:** [Feature Status - Awareness](./features/FEATURE_STATUS.md#-real-time-collaboration-awareness)

## Debugging
https://github.com/workbackai/mcp-nodejs-debugger