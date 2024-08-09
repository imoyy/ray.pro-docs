# Gemini

Raycast Unblock provides a Gemini feature. You can use it to generate text using the Gemini API.

## Usage

1. Set `AI.default` to `gemini` in your configuration file.
2. Set `AI.Gemini.api_key` to your Gemini API key in your configuration file.

### Configuration

- `api_key`: Your Gemini API key.
- `temperature`: The temperature of the model. <Badge type="info" text="Optional" />
- `max_tokens`: The maximum tokens of the model. <Badge type="info" text="Optional" />

### Example

```toml
[AI.Gemini]
api_key = '<your api key>'
# temperature = 0.5
# max_tokens = 100
```
