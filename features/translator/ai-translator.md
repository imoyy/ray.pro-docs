# AI Translator

You can use AI to translate text in Raycast Translate feature. Prompts provided by `@zhuozhiyongde`.

::: warning
Pay attention to the request and usage issues, Translator may cause frequent requests to AI services, resulting in overuse or rate limit, so please use it carefully.
:::

## Usage

You can configure the default translation AI provider and model in the `[Translate.AI]` section of the configuration file.

## Configuration

- `default`: If the default model is not set, or if the default model is set, but the specific AI service's model is not set, the default model written in the code will be used  <Badge type="info" text="Optional" />
  - Default: openai
- `model`: The model used by the AI service (only effective for openai, groq)  <Badge type="info" text="Optional" />
  - Default: gpt-3.5-turbo

### Example

```toml
[Translate.AI]
default = "openai"
model = "gpt-3.5-turbo"
```
