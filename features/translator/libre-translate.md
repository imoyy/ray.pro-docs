# LibreTranslate <Badge type="tip" text="^0.1.0-beta.8" />

You can use LibreTranslate to translate text in Raycast Translate feature.

## Solutions

We provide two solutions:

1. **api**: Use the official LibreTranslate API service for translation.
2. **reserve**: Use the inverted LibreTranslate service for translation.

::: warning
*Reserve solution* is an inverted implementation. Please use with caution.
:::

## Usage

1. Set `Translate.default` to `libretranslate` in your configuration file.
2. Set `Translate.LibreTranslate.type` to `api` or `reserve` in your configuration file.
  1. If you choose `api`, you need to set `Translate.LibreTranslate.api_key` to your LibreTranslate API key.

## Configuration

- `base_url`: The base URL for LibreTranslate API. <Badge type="info" text="Optional" />
- `type`: The type of LibreTranslate service. [Type - Solutions](#solutions) <Badge type="info" text="Optional" />
- `api_key`: The API key for LibreTranslate API. <Badge type="info" text="Optional (Only for reserve solution)" />

## Example

```toml
[Translate.LibreTranslate]
base_url = "https://libretranslate.com"
type = "reserve"
api_key = ""
```
