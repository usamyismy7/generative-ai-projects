from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Optional, Annotated
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

class Todo(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    description: str

class TodoCreate(SQLModel):
    name: str
    description: str
    
class TodoResponse(SQLModel):
    id: int
    name: str
    description: str

conn_str = os.getenv("DATABASE_URL")
engine = create_engine(conn_str)

def get_data():
    with Session(engine) as session:
        yield session

app: FastAPI = FastAPI(
    title="Todo List",
    description="A simple todo list application",
    version="0.1",
    servers=[
        {
            "url": "http://127.0.0.1:8000", # ADD NGROK URL Here Before Creating GPT Action
            "description": "Development Server"
        }]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/todo")
def get_todo(session: Annotated[Session, Depends(get_data)]):
    todo = session.exec(select(Todo)).all()
    return todo

@app.post("/todo/add", response_model=TodoResponse)
def add_todo(todo: TodoCreate, session: Annotated[Session, Depends(get_data)]):
    todo_add = Todo.model_validate(todo)
    session.add(todo_add)
    session.commit()
    session.refresh(todo_add)
    return todo_add

@app.delete("/todo/delete/{id}", response_model=TodoResponse)
def delete_todo(id: int, session: Annotated[Session, Depends(get_data)]):
    todo_delete = session.get(Todo, id)
    if not todo_delete:
        return {"error": "Todo not found"}
    session.delete(todo_delete)
    session.commit()
    return todo_delete

@app.put("/todo/update/{id}", response_model=TodoResponse)
def update_todo(id: int, todo: TodoCreate, session: Annotated[Session, Depends(get_data)]):
    todo_update = session.get(Todo, id)
    if not todo_update:
        return {"error": "Todo not found"}
    todo_update.name = todo.name
    todo_update.description = todo.description
    session.commit()
    session.refresh(todo_update)
    return todo_update