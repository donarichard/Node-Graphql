
# NodeJs GraphQL with MongoDB

A simple project with architecture of nodejs with typescript and auto generated typedefs using graphql-codegen and mongodb

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.15.0

    $ npm --version
    8.5.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Configure app

Open `.env` then edit it with your settings. You will need:

    
    PORT=
    DATABASE_URL=
    JWT_SECRET_KEY =
    SECRET= 

## Running the project

    $ npm run dev

## To generate typedef

    $ npm run generate

# GraphQL

<img alt="GraphQL Logo" align="right" src="https://graphql.org/img/logo.svg" width="15%" />

The GraphQL specification is edited in the markdown files found in
[`/spec`](./spec) the latest release of which is published at
https://graphql.github.io/graphql-spec/.

The latest draft specification can be found at
https://graphql.github.io/graphql-spec/draft/ which tracks the latest commit to
the main branch in this repository.

Previous releases of the GraphQL specification can be found at permalinks that
match their [release tag](https://github.com/graphql/graphql-spec/releases). For
example, https://graphql.github.io/graphql-spec/October2016/. If you are linking
directly to the GraphQL specification, it's best to link to a tagged permalink
for the particular referenced version.

## Overview

This is a Working Draft of the Specification for GraphQL, a query language for
APIs created by Facebook.

The target audience for this specification is not the client developer, but
those who have, or are actively interested in, building their own GraphQL
implementations and tools.

In order to be broadly adopted, GraphQL will have to target a wide variety of
backend environments, frameworks, and languages, which will necessitate a
collaborative effort across projects and organizations. This specification
serves as a point of coordination for this effort.

Looking for help? Find resources
[from the community](https://graphql.org/community/).

[![CodeGen](https://raw.githubusercontent.com/dotansimha/graphql-code-generator/master/logo.svg)](https://graphql-code-generator.com)

[![npm version](https://badge.fury.io/js/%40graphql-codegen%2Fcli.svg)](https://badge.fury.io/js/%40graphql-codegen%2Fcli)


GraphQL Code Generator is a tool that generates code out of your GraphQL schema. Whether you are developing a frontend or backend, you can utilize GraphQL Code Generator to generate output from your GraphQL Schema and GraphQL Documents (query/mutation/subscription/fragment).

By analyzing the schema and documents and parsing it, GraphQL Code Generator can output code at a wide variety of formats, based on pre-defined templates or based on custom user-defined ones. Regardless of the language that you're using, GraphQL Code Generator got you covered.

GraphQL Code Generator lets you choose the output that you need, based on _plugins_, which are very flexible and customizable. You can also write your _plugins_ to generate custom outputs that match your needs.

You can try this tool live on your browser and see some useful examples. Check out [GraphQL Code Generator Live Examples](https://graphql-code-generator.com/#live-demo).

We currently support and maintain [these plugins](https://graphql-code-generator.com/plugins) (TypeScript, Flow, React, Angular, MongoDB, Stencil, Reason, and some more), and there is an active community that writes and maintains custom plugins.

## Docker

Why Docker
"With Docker, developers can build any app in any language using any toolchain. “Dockerized” apps are completely portable and can run anywhere - colleagues’ OS X and Windows laptops, QA servers running Ubuntu in the cloud, and production data center VMs running Red Hat.

Developers can get going quickly by starting with one of the 13,000+ apps available on Docker Hub. Docker manages and tracks changes and dependencies, making it easier for sysadmins to understand how the apps that developers build work. And with Docker Hub, developers can automate their build pipeline and share artifacts with collaborators through public or private repositories.

Docker helps developers build and ship higher-quality applications, faster." -- What is Docker


## Running the docker project

    $ docker compose up



## List docker process

    $ docker ps


## List docker container

    $ docker container ls
