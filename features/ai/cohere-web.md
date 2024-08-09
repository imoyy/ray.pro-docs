# Cohere Web <Badge type="tip" text="^0.5.0-beta.0" />

Raycast Unblock offers Cohere Web AI support. You can use Cohere's models for free via their Web API.

::: danger
This feature has been deprecated because Cohere Web's API is no different from the official API, but due to the special nature of Cohere Web, it may cause unstable situations.
:::

::: warning
This is an inverted API. Please use with caution.

~~In the following, we found that Cohere Web also uses Cohere's official API, but with some special handling in transmission. It *still has the same Rate Limit issue* as the API.~~

**Therefore, we recommend that you use [Cohere's official API](./cohere).**
:::

::: tip
Due to the special nature of Cohere Web's transmission, this feature may face *many unstable situations*. Please use with caution.

We are not sure if the model configuration is effective in this scenario.
:::

## Usage

1. Make sure you have an account on [Cohere](https://coral.cohere.com). You can sign up for free.

2. Modify the configuration file with your Cohere account credentials (email and password).

3. Set the `[AI.Cohere].type` to `web`.

## Configuration

The configuration for this feature includes the following parameters:

- `type`: The type of Cohere API to use. **Set this to `web`.**
- `email`: Your email address for Cohere.
- `password`: Your password for Cohere.
- `temperature`: The temperature of the model. <Badge type="info" text="Optional" />
- `max_tokens`: The maximum tokens of the model. <Badge type="info" text="Optional" />

### Example

```toml
[AI.Cohere]
type = 'web'
email = '<your email>'
password = '<your password>'
# temperature = 0.5
# max_tokens = 100
```
