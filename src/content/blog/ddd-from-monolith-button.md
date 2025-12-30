---
title: DDD from a Monolith Button
description: How a single button click led to understanding Domain-Driven Design and refactoring a monolith.
pubDate: 2024-11-28
---

Sometimes the smallest change can reveal the biggest problems. This is the story of how clicking a button made me realize I needed Domain-Driven Design.

## The Button

It was just a button. A simple "Submit" button in a form. Click it, data gets saved, user sees confirmation. Standard stuff.

But when I clicked it, nothing happened. No error. No loading state. Just... nothing.

## The Investigation

I started digging. The button called a function. That function called a service. That service called a repository. That repository called a database. Somewhere in that chain, something was broken.

But where?

## The Problem

The codebase was a classic monolith:
- Business logic mixed with UI code
- Database queries scattered everywhere
- No clear boundaries between domains
- Tight coupling between components
- Unclear responsibilities

To fix the button, I had to understand:
- How the form worked
- How the service layer worked
- How the data layer worked
- How they all connected
- What the business rules actually were

It took hours to trace through the code. Hours to understand what should have been simple.

## The Realization

This wasn't just about a broken button. This was about architecture. The codebase had no clear domain boundaries. Everything was connected to everything else.

I needed Domain-Driven Design.

## What is DDD?

Domain-Driven Design is about:
- **Bounded Contexts** - Clear boundaries between different parts of your system
- **Ubiquitous Language** - Using the same terms your business uses
- **Aggregates** - Clusters of related entities
- **Domain Models** - Code that reflects business concepts

Instead of thinking about "services" and "repositories," think about "Orders," "Customers," "Products" - the actual things your business deals with.

## The Refactor

I started small. I identified one domain - let's say "Orders." I:
1. Defined what an Order actually is in business terms
2. Created a clear boundary around Order-related code
3. Moved all Order logic into one place
4. Made the Order domain independent of other domains

Suddenly, fixing the button was easy. The Order domain had clear responsibilities. I knew exactly where to look.

## Lessons Learned

**Start with the domain** - Understand what your business actually does before writing code.

**Small boundaries first** - You don't need to refactor everything at once.

**Language matters** - Using business terms in code makes it easier to understand.

**Isolation helps** - Clear boundaries make testing and debugging easier.

## The Button Works Now

The button works. But more importantly, the code makes sense. When I need to change something, I know where to look. When I add a feature, I know where it belongs.

One button. One investigation. One realization that architecture matters.

Sometimes the smallest problems reveal the biggest insights.

