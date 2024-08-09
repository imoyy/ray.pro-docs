# Azure OpenAI

::: tip
This function is completed by `@ImSingee`. Thank you.
:::

## Usage

Assume you have such a azure endpoint link like following:

`https://<yourAzure>.openai.azure.com/openai/deployments/<yourDeployment>/chat/completions?api-version=2023-07-01-preview`

Modify `[AI.OpenAI]` field in `config.toml` according to the following steps.

1. set `is_azure = true`
2. set `base_url = https://yourAzure.openai.azure.com`
3. set `azure_deployment_name = yourDeployment`

`azure_deployment_name` is optional and when it isn't provided, using `req.body.model` as a substitute. It is useful when you want to use multiple models.

### Example

```toml
[AI.OpenAI]
is_azure = true
base_url = "https://yourAzure.openai.azure.com"
azure_deployment_name = "yourDeployment"
```
