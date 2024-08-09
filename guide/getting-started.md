# Getting Started

::: info
**Raycast Unblock is currently in heavy development**, with frequent code updates, and you need to keep up with the latest developments in this project.
:::

::: warning
**This project is for educational purposes only.** Please do not use it for commercial purposes.
:::

## Requirements

- Raycast
- macOS / Linux (Windows is not maintained)
- Surge (or other proxy tools) _**(optional)**_
- Node.js 18.x (optional) _**(optional)**_

## Installaion

### Docker / Docker Compose

In general, we recommend deploying your application using *Docker or Docker Compose*.

::: code-group

```bash [Docker Compose]
wget https://github.com/wibus-wee/raycast-unblock/raw/main/docker-compose.yml
# ⬆ Modify the environment variables in docker-compose.
wget https://github.com/wibus-wee/raycast-unblock/raw/main/config.example.toml -O config.toml
# ⬆ Modify the configurations in config.toml.

docker-compose up -d
```

```bash [Docker]
wget https://github.com/wibus-wee/raycast-unblock/raw/main/config.example.toml -O config.toml
# ⬆ Modify the configurations in config.toml.

docker run -d \
  --name raycast-unblock \
  -p 3000:3000 \
  -v ./config.toml:/app/config.toml \
  wibuswee/raycast-unblock:latest
```
:::

### Prebuilt-bundle

1. Download the latest dist from [GitHub Actions](https://github.com/wibus-wee/raycast-unblock/actions/workflows/ci.yml).

::: tip
The naming format is `raycast-unblock-<platform>-<type>`:

- `<platform>` field refers to the deployment platform.
  - If you want to deploy Raycast Unblock to macOS, select `macOS` Platform.
  - If deploying to Linux, select `Ubuntu` Platform.
- `<type>` field refers to the type of built package.
  -  `app` type is a single-application built with Node 21. It is larger in size, but it does not depend on Node runtime, which means you can use it anywhere. **_(Recommended 👍)_**
  -  `js` type includes all dependencies bundled as a js bundle. It is relatively small in size but requires Node 18 or later to run.
:::

2. Download [config.example.toml](https://github.com/wibus-wee/raycast-unblock/raw/main/config.example.toml) as `config.toml`, then fill in the environment variables.
3. Put the `config.toml` file in the same directory as the executable file.
4. Start Raycast Unblock

::: code-group

```bash [raycast-unblock-platform-app]
./raycast-unblock-app
# Your config.toml file should be in this directory,
# or you should set the `--config` parameter.
./raycast-unblock-app --config /path/to/your/config.toml
```

```bash [raycast-unblock-platform-js]
node index.js
# Your config.toml file should be in this directory,
# or you should set the `--config` parameter
node index.js --config /path/to/your/config.toml
```

:::

If you want to run it in the background, you can use `pm2` or `nohup`.

## 🎉 Congratulations

You have completed the installation of Raycast Unblock. Next, read the [Intercept Raycast](./intercept-raycast) chapter and let Raycast Unblock take effect.
