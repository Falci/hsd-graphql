# Graphql Plugin for HSD

This is a graphql plugin for [Handshake Daemon](https://github.com/handshake-org/hsd).

This is just a proof of concept. Only `block(height)` method is currently implemented.
Let me know if you think this project deserves more attention.

## Usage:

In your HSD directory:

```bash
npm i hsd-graphql
```

Then, reload HSD with the plugins flag:

```bash
./bin/hsd --plugins hsd-graphql
```

## Options

The following flags are allowed:

| Params               | Default value | Description               |
| -------------------- | ------------- | ------------------------- |
| --graphql-port       | 4000          | GraphQL Server's port.    |
| --graphql-playground | false         | Enable the GraphiQL (UI). |
