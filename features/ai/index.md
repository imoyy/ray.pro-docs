# AI

AI features are used to enhance the capabilities of Raycast Unblock. These features are powered by AI models and APIs.

Raycast Unblock currently supports multiple AI models and APIs. You can see which AI models and APIs are supported by Raycast Unblock in the sidebar.

## Configuration

The configuration for AI features includes the following parameters:

- `default`: The default AI Server to use.

::: warning
The `default` parameter is used to set the default AI service to use. It may be used in other AI-related features, such as Search Emoji with AI Results.

Moreover, in specific AI services, the `default` parameter will be used to set the default model to use. Of course, it is *optional*.
:::

- `temperature`: The temperature of the model. <Badge type="info" text="Optional" />
- `max_tokens`: The maximum tokens of the model. <Badge type="info" text="Optional" />

::: tip
If the `temperature` and `max_tokens` parameters are not set in the specific AI service, this value will be used.

For example:

- If I don't set the temperature parameter in `AI.OpenAI`, this value will be used
- But if I set the temperature parameter in `AI.Gemini`, the temperature parameter in `AI.Gemini` will be used
:::

Besides, the `temperature` and `max_tokens` parameters can be set in specific AI services to override the global configuration.

### Example

```toml
[AI]
default = 'openai'
# temperature = 0.5
# max_tokens = 100
```
