# Cohere <Badge type="tip" text="^0.5.0-beta.0" />

Raycast Unblock offers Cohere AI support. You can use Cohere's models for free via their official API.

::: tip
Different from [Cohere Web](./cohere-web), this is the official API, more stable and reliable. (But you may face *rate limit* issues)
:::

## Usage

1. Make sure you have an account on
[Cohere](https://dashboard.cohere.com). You can sign up for free.

2. Visit https://dashboard.cohere.com/api-keys to get Trial Keys

3. Modify the configuration file with your apiKey.

## Configuration

The configuration for this feature includes the following parameters:

- `api_key`: Your Cohere API key.
- `temperature`: The temperature of the model. <Badge type="info" text="Optional" />
- `max_tokens`: The maximum tokens of the model. <Badge type="info" text="Optional" />
- `default`: The default model to use. <Badge type="info" text="Optional" /> <Badge type="warning" text="^v0.5.0-beta.2" />

### Example

```toml
[AI.Cohere]
api_key = '<your api key>'
# temperature = 0.5
# max_tokens = 100
```
