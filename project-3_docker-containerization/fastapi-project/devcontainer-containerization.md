# Containerization using Dev Containers in VS Code

To containerize your Python-FastAPI project using Docker and the DevContainer extension in VS Code, follow these steps:

1. **Create a `.devcontainer` directory in your project root.** This directory will hold configuration files for your development container.

2. **Create a `devcontainer.json` file in the `.devcontainer` directory.** This file will specify how VS Code should set up and configure the development container. Here's a basic example:

```json
{
  "name": "Python-FastAPI",
  "dockerFile": "../Dockerfile",
  "appPort": 8000,
  "customizations": {
    "vscode": {
      "settings": {
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
      },
      "extensions": ["ms-python.python"]
    }
  }
}
```

3. **Open your project in VS Code.** If you haven't already, open your project folder in VS Code.

4. **Open the Command Palette.** You can do this by pressing `F1` or `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS).

5. **Select "Remote-Containers: Reopen in Container".** This will start building your development container based on the Dockerfile and `devcontainer.json` configuration. The first build may take a while, but subsequent loads will be much faster.

6. **Wait for the build to finish.** Once the build is complete, VS Code will automatically connect to the container. You'll be able to use VS Code just like you would on your local machine, but all the commands will be run inside the container.

7. **Start your FastAPI server.** You can do this by running the command specified in your Dockerfile's `CMD` instruction in the integrated terminal in VS Code.

Now, your Python-FastAPI project is running in a Docker container, and you can access it at `localhost:8000` (or whatever port you specified in `devcontainer.json`) in your web browser.
