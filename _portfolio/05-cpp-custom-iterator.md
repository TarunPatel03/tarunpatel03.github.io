---
title: "C++ Custom Iterator HashSet - std::unordered_set Functionality"
excerpt: "STL-style HashSet implementation with custom iterator class."
collection: portfolio
layout: portfolio
---

## Problem / Motivation

To deepen my understanding of C++ containers, memory management, and iterator design, I challenged myself to build a fully functional `HashSet` implementation that mimics the behavior of `std::unordered_set`. Rather than relying on built-in STL containers, I implemented custom bucket management, separate chaining with linked lists, and a fully STL-compliant iterator class. 

This project strengthened my skills in dynamic memory management, iterator categories, rehashing, and constant-time complexity analysis, while also preparing me for real-world systems programming challenges where understanding how data structures behave under the hood is critical.

## System Architecture

- **Separate Chaining:** Uses an external linked list (`std::list<int>`) with each bucket pointing to iterators for constant-time insert/delete.
- **Custom Iterators:** STL-compliant forward iterators built manually for full compatibility with standard algorithms.
- **Dynamic Rehashing:** Automatically resizes the bucket array when load factor thresholds are reached to maintain constant-time operations.
- **Memory Safety:** All memory ownership handled via RAII patterns and modern C++ practices.
- **Unit Testing:** Fully tested for correctness across insertion, deletion, iteration, search, and rehashing scenarios.

## Key Technical Challenges

- Correctly designing iterators that integrate with STL algorithms while maintaining iterator validity after rehashes.
- Ensuring constant-time insertion, deletion, and lookup while preserving iterator stability.
- Balancing global linked list design with bucket-local indexing for efficient lookup.
- Handling collision resolution cleanly without pointer aliasing or invalidation.
- Writing self-contained unit tests that cover edge cases like empty buckets, duplicate insertions, and rehash boundary conditions.

## Future Work & Expansion

- Extend to support templated types (generic key types beyond `int`).
- Add hash function specialization for custom object types.
- Implement allocator support for customizable memory management.
- Profile memory usage and optimize bucket sizing heuristics.
- Add exception-safety guarantees for all operations.

## Technologies Used

C++, Custom Data Structures, Linked Lists, STL Iterators, Memory Management, RAII, Hash Tables, Separate Chaining, Unit Testing

[🔗 View GitHub Repository](https://github.com/Reetabass/custom-hashset)
