# Dev Container Configuration

This directory contains the configuration for developing this blog in a containerized environment using VS Code Dev Containers.

## What's Included

- **Node.js 20** - Latest LTS version
- **Git** - Version control
- **GitHub CLI** - For GitHub operations
- **VS Code Extensions**:
  - Astro language support
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

## Getting Started

1. Open the project in VS Code
2. When prompted, click "Reopen in Container"
   - Or use Command Palette: `Dev Containers: Reopen in Container`
3. Wait for the container to build and dependencies to install
4. Run `npm run dev` to start the development server

## Port Forwarding

Port 4321 (Astro dev server) is automatically forwarded to your local machine.

## Requirements

- VS Code with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Docker Desktop (or compatible container runtime)

