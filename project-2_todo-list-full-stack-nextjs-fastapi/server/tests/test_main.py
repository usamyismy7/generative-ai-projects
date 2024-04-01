from todo_list.main import Session, get_data, app, create_engine
from fastapi.testclient import TestClient
import os
from dotenv import load_dotenv

load_dotenv()

conn_str = os.getenv("TEST_DATABASE_URL")
engine = create_engine(conn_str)

def test_get_data():
    with Session(engine) as session:
        return session
        
app.dependency_overrides[get_data] = test_get_data

client = TestClient(app)

def test_get_todo():
    response = client.get("/todo")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_add_todo():
    response = client.post("/todo/add", json={"name": "Test Todo", "description": "Test Description"})
    assert response.status_code == 200
    assert response.json()["name"] == "Test Todo"
    assert response.json()["description"] == "Test Description"

def test_update_todo():
    response = client.post("/todo/add", json={"name": "Test Todo", "description": "Test Description"})
    id = response.json()["id"]
    response = client.put(f"/todo/update/{id}", json={"name": "Updated Test Todo", "description": "Updated Test Description"})
    assert response.status_code == 200
    assert response.json()["name"] == "Updated Test Todo"
    assert response.json()["description"] == "Updated Test Description"

def test_delete_todo():
    response = client.post("/todo/add", json={"name": "Test Todo", "description": "Test Description"})
    id = response.json()["id"]
    response = client.delete(f"/todo/delete/{id}")
    assert response.status_code == 200
    assert response.json()["name"] == "Test Todo"
    assert response.json()["description"] == "Test Description"
