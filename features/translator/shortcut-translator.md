# Shortcut Translator <Badge type="tip" text="^0.1.0-beta.0" />

Raycast Unblock provides a shortcut translator. You can use it to translate text in Raycast Translate feature.

::: warning
This feature is only available on the `macOS` deployment method.
:::

::: tip
- Some languages may not be recognized, this is because the system's built-in translation engine is used, which may be due to incorrect [dictionary settings](https://github.com/wibus-wee/raycast-unblock/blob/main/src/features/translations/dict.ts) or encountering languages not supported by the system.

If you are sure that it is a problem with the dictionary settings, you can submit an Issue or Pull Request to help us fix this problem.

:::

## Usage

1. Open [iCloud Shortcut - RaycastUnblock.Translate.v1](https://www.icloud.com/shortcuts/4a907702fe3145d9a378a9c8af47bb2e) and add it to your shortcuts.
2. Modify your `config.toml` file and set `Translate.type` to `shortcut`.
3. Run Raycast Unblock and use Raycast Translate feature.

## Configuration

```toml
# No configuration options for now
```
