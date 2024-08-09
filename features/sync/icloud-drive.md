# iCloud Drive

Raycast Unblock provides an iCloud Drive sync feature. You can use it to sync your Raycast Unblock configuration file between different devices.

::: warning
This feature is only available on the `macOS` deployment method.

**It is enabled by default.**
:::

## Usage

1. Set `Sync.type` to `icloud` in your configuration file.

## Configuration

- `type`: The type of sync service to use. **Set this to `icloud`.** <Badge type="info" text="Optional" />

### Example

```toml
[Sync]
type = "icloud"
```
