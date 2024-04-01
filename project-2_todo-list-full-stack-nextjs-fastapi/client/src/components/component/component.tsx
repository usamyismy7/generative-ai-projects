"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

import axios from "axios";
import { useState, useEffect } from "react";

interface IData {
  id: number;
  name: string;
  description: string;
}

export function Component() {
  const [data, setData] = useState<IData[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const baseURL = "http://127.0.0.1:8000";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/todo`);
      setData(response.data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const handleAddTask = async () => {
    try {
      const response = await axios.post(`${baseURL}/todo/add`, {
        name: name,
        description: description,
      });
      // Update the state with the new task
      setData((prevData) => [...prevData, response.data]);
      console.log("data added successfully!");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const handleAdd = () => {
    handleAddTask();
    setName("");
    setDescription("");
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`${baseURL}/todo/delete/${id}`);
      // Update the state with the new task
      setData((prevData) => prevData.filter((item) => item.id !== id));
      console.log("data deleted successfully!");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const handleUpdateTask = async (
    id: number,
    newName: string,
    newDescription: string
  ) => {
    try {
      const response = await axios.put(`${baseURL}/todo/update/${id}`, {
        name: newName,
        description: newDescription,
      });
      // Update the state with the new task
      setData((prevData) =>
        prevData.map((item) => {
          if (item.id === id) {
            return { ...item, name: newName, description: newDescription };
          }
          return item;
        })
      );
      console.log("data updated successfully!");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const handleUpdate = (id: number) => {
    handleUpdateTask(id, name, description);
    setName("");
    setDescription("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-blue-50">
      <div className="grid gap-4 w-full max-w-sm">
        <div className="text-3xl font-bold tracking-tight text-blue-600">
          Todo App
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-base text-blue-500" htmlFor="task">
            Task
          </Label>
          <Input
            id="task"
            placeholder="Write Name Here "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-base text-blue-500" htmlFor="description">
            Description
          </Label>
          <Textarea
            className="min-h-[100px]"
            id="description"
            placeholder="Write Description Here"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            size="lg"
            className="bg-blue-500 text-white"
            onClick={handleAdd}
          >
            Add task
          </Button>
        </div>
        <div className="overflow-y-scroll h-40">
          <Card>
            {data.map((todo, index) => (
              <CardContent className="p-0" key={index}>
                <ul className="divide-y">
                  <li className="flex items-center justify-between p-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-blue-700">
                        {todo.name}
                      </span>
                      <span className="text-sm text-blue-500 dark:text-gray-400 ">
                        {todo.description}
                      </span>
                    </div>
                    <div className="flex gap-2 ml-auto">
                      <Button
                        className="rounded-full bg-blue-500 text-white"
                        size="icon"
                        variant="ghost"
                        onClick={() => handleUpdate(todo.id)}
                      >
                        <FileEditIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        className="rounded-full bg-red-500 text-white"
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(todo.id)}
                      >
                        <TrashIcon className="w-4 h-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </li>
                </ul>
              </CardContent>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function FileEditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
