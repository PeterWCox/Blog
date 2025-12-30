---
title: I Hate Storybook
description: An honest take on Storybook - why it's not for everyone and when to skip it.
pubDate: 2024-11-20
---

Let me be clear: I hate Storybook. Not because it's bad software - it's actually quite good. I hate it because of what it represents and when it's used.

## What is Storybook?

Storybook is a tool for developing and testing UI components in isolation. You write "stories" that show your components in different states, and you can interact with them outside of your main application.

It's popular. It's well-maintained. It's used by many successful teams.

I still hate it.

## Why I Hate It

### 1. The Setup Overhead

Getting Storybook working isn't trivial:
- Install dependencies
- Configure webpack/vite
- Write stories for every component
- Maintain those stories as components change
- Keep stories in sync with actual usage

For a small project, this is massive overhead. The time spent setting up Storybook could be spent building features.

### 2. False Confidence

Stories show components in isolation. But components don't live in isolation. They live in:
- Real pages with real data
- Different screen sizes
- Various user states
- Complex interaction flows

A component that looks great in Storybook might break in context. Storybook gives you confidence that might be misplaced.

### 3. Maintenance Burden

Every component change means updating stories. Every new prop means new story variants. Every refactor means rewriting stories.

It's like writing tests, but for visual components. And like tests, they need to be maintained. Unlike tests, they don't catch bugs - they just show what components look like.

### 4. The Documentation Lie

"Storybook is living documentation!" No, it's not. Documentation explains *why* and *how*. Storybook shows *what*. 

Real documentation is:
- When to use a component
- What props mean
- Common patterns
- Edge cases
- Accessibility considerations

Storybook shows you the component. It doesn't explain it.

## When Storybook Makes Sense

I'll admit it: Storybook has its place.

**Large design systems** - When you have dozens of components used across multiple projects, Storybook helps.

**Designer-developer collaboration** - When designers need to see components without running the app.

**Complex component libraries** - When you're building a library for others to use.

**Large teams** - When multiple developers need to understand available components.

## When to Skip It

**Small projects** - The overhead isn't worth it.

**Tight deadlines** - You don't have time for setup and maintenance.

**Simple components** - If your components are straightforward, Storybook adds little value.

**Solo developers** - You know your own components. You don't need a catalog.

## Alternatives

Instead of Storybook, consider:
- **Component tests** - Actually test behavior, not just appearance
- **Real pages** - Develop components in their actual context
- **Screenshots** - Capture real usage, not isolated states
- **Documentation** - Write actual docs explaining components

## The Real Problem

My issue isn't really with Storybook. It's with the assumption that every project needs it. That component development requires isolation. That visual testing is essential.

Sometimes the best way to develop a component is to use it. In your app. With real data. In context.

Storybook is a tool. Use it when it helps. Skip it when it doesn't. And don't let anyone tell you that good development requires Storybook.

I hate Storybook. But I hate cargo-cult development practices more.

