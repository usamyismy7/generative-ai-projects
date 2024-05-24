# Todo list FastAPI App with Neon PostgresSQL

## Details

A CRUD Todo list Serverless FastAPI App with Neon PostgresSQL

### Technologies used

#### Dependencies

python, fastapi, uvicorn, sqlmodel, psycopg2, pytest, httpx

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
poetry run uvicorn todo_list.main:app --reload
```

Open in Browser [http://localhost:8000](http://localhost:8000).

Open Docs in Browser [http://localhost:8000/docs](http://localhost:8000/docs).

Open OpenAPI specs in Browser [http://localhost:8000/openapi.json](http://localhost:8000/openapi.json).

#### Deploy with your static domain

```bash
ngrok http --domain=mammoth-touched-halibut.ngrok-free.app 8000
```

Open in Browser [https://mammoth-touched-halibut.ngrok-free.app](https://mammoth-touched-halibut.ngrok-free.app).

Open Docs in Browser [https://mammoth-touched-halibut.ngrok-free.app/docs](https://mammoth-touched-halibut.ngrok-free.app/docs).

Open OpenAPI specs in Browser [https://mammoth-touched-halibut.ngrok-free.app/openapi.json](https://mammoth-touched-halibut.ngrok-free.app/openapi.json)

### Run tests

```bash
poetry run pytest
```

## Screenshots

![image 1](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image-3.png)

![image 2](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image-2.png)

![image 3](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image-1.png)

![image 4](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image.png)

![image 5](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image3.png)

![image 6](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image4.png)

![image 7](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image2.png)

![image 8](https://raw.githubusercontent.com/usamyismy7/generative-ai-projects/master/project-2_todo-list-full-stack-nextjs-fastapi/server/assets/image5.png)
