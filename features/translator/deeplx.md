# DeepL <Badge type="tip" text="^0.1.0-beta.8" />

You can use DeepL to translate text in Raycast Translate feature.

::: warning Configuration Change in <Badge text="^0.5.0-beta.2" type="warning" />
We have changed the configuration structure for DeepL. Please update your configuration file.

And we support *multiple DeepL endpoints and access tokens* now.
:::

## Usage

1. Set `Translate.default` to `deeplx` in your configuration file.

## Configuration

- `check_available`: Check if the DeepL API is available or not. <Badge type="info" text="Optional" /> <Badge type="warning" text="^v0.5.0-beta.2" />
- `concurrency`: The concurrency of the DeepL API. <Badge type="info" text="Optional" /> <Badge type="warning" text="^v0.5.0-beta.2" />
- `proxy_endpoints`: The proxy endpoints for DeepL API. <Badge type="info" text="Optional" /> <Badge type="warning" text="^v0.5.0-beta.2" />
- `access_tokens`: The access tokens for DeepL API. <Badge type="info" text="Optional" /> <Badge type="warning" text="^v0.5.0-beta.2" />

::: warning
Please note that `proxy_endpoints` and `access_tokens` should be **one-to-one**.

If some `proxy_endpoints` do not have corresponding `access_tokens`, please set them to `'' (empty)`.
:::

- ~~`proxy_endpoint`: The proxy endpoint for DeepL API.~~ <Badge type="danger" text="Deprecated (^v0.5.0-beta.2)" />
- ~~`access_token`: The access token for DeepL API.~~ <Badge type="danger" text="Deprecated (^v0.5.0-beta.2)" />

## Example

```toml
[Translate.DeepLX]
# check_available = true
# concurrency = 2
# proxy_endpoints = []
# access_tokens = []
```
