import { axiosInstance } from "../config/axiosInstance";

export const getAllTodosRequest = () => {
  return axiosInstance.get("/todos");
};

export const postAllTodosRequest=(data)=>{
    return axiosInstance.post('/todos',data)
}

export const deleteAllTodosRequest=(id)=>{
    return axiosInstance.delete(`/todos/${id}`)

}

export const checkTodoRequest=(data)=>{
    return axiosInstance.put(`/todos/${data.id}`,data)
}

export const editTodoRequest=(data)=>{
    return axiosInstance.put(`/todos/${data.id}`,data)
}