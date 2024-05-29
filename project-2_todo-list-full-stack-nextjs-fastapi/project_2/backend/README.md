# Todo list FastAPI App with Neon PostgresSQL

## Details

A CRUD Todo list Serverless FastAPI App with Neon PostgresSQL

### Technologies used

#### Dependencies

python, fastapi, uvicorn, sqlmodel, psycopg-binary, pytest, httpx

## Getting Started

### Pre-requisites

python, ngrok, poetry, account & project setup in neon db, code editor like VSCode.

### Install project dependencies

```bash
poetry install
```

### Run development server

#### Run project in Poetry Environment

```bash
poetry run uvicorn dailydo_todo_app.main:app --reload
```

Open in Browser [http://localhost:8000](http://localhost:8000).

Open Docs in Browser [http://localhost:8000/docs](http://localhost:8000/docs).

Open OpenAPI specs in Browser [http://localhost:8000/openapi.json](http://localhost:8000/openapi.json).

### Run tests

```bash
poetry run pytest
```

## Screenshots

![image 1](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/project_2/backend/assets/image.png)

![image 2](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/project_2/backend/assets/image-2.png)

![image 3](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/project_2/backend/assets/image-1.png)
