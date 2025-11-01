# Turborepo WebSocket React Project

This project is a **Turborepo monorepo** consisting of an **API** and a **React frontend**. It provides real-time **WebSocket communication** to synchronize **cursor pointers** across clients. Frontend routing is handled using **TanStack Router**.

# Screenshot Example
<img width="1915" height="1072" alt="ws-cursor-ss" src="https://github.com/user-attachments/assets/161c887d-3c1e-484c-9dc6-822722536a83" />

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [WebSocket & Cursor Handling](#websocket--cursor-handling)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This monorepo is designed to provide a scalable setup for real-time applications. The **API** handles WebSocket connections and broadcasts cursor positions, while the **React frontend** consumes these updates and renders remote cursors in real-time.

Routing and navigation in the frontend are managed with **TanStack Router** for declarative and flexible route management.

---

## Project Structure

.turbo/
apps/
├─ api/
├─ web/
node_modules/
packages/
├─ env/
├─ eslint-config/
├─ node_modules/
├─ tailwind-config/
├─ typescript-config/
├─ ui/
├─ utils/
scripts/
.env
.env.sample
.gitignore
.npmrc
bun.lock
package.json
README.md
turbo.json

---

## Features

- Turborepo monorepo for structured development
- WebSocket-based real-time communication
- Cursor pointer synchronization across multiple clients
- Frontend routing with TanStack Router
- Shared UI components and utilities

---

## Getting Started

### Prerequisites

- Node.js >= 18
- bun
- Git

### Installation

```bash
bun install
```
