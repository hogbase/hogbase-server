# Hogbase Database

![CircleCI](https://circleci.com/gh/hogbase/hogbase-server.svg?style=shield)

Hogbase is a realtime, distributed database that's built with connected apps in mind. It's a highly-resilient database that supports the following features:

* Realtime, connected updates
* Ordered messaging
* Eventual consistency
* Robust, horizontally scalable architecture
* API compatibility with Google Firebase's Realtime Database

# Is Hogbase A Firebase Clone?
Yes, yes it is. Hogbase is a clone of the Firebase Realtime Database (not Cloud Firestore)

# About Hogbase Server
Hogbase Server is what clients connect to and use to interact with data stored in the engine.
Users connect via websocket and interact with data stored in a tree-like structure.

Users can also subscribe to nodes in the tree and watch for value changes, new branch additions and so on.

# Developer New Start Guide
This guide will help you get set up to start working on Hogbase Server.

## Prerequisites

* [Redis](https://redis.io)
* [Redis Commander](https://github.com/joeferner/redis-commander) (not required, but really useful)

