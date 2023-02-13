import httpService from "../../service/httpservice";
import ApiConfig from "../../service/apiconfig";

export const getEmployeeListApi = async () => {
    return await httpService.get(ApiConfig.user)
}

export const postEmployeeListApi = async (data) => {
    return await httpService.post(ApiConfig.user, data)
}

export const deleteEmployeeListApi = async (id) => {
    const url = `${ApiConfig.user}/${id}`
    return await httpService.delete(url)
}

export const updateEmployeeListApi = async (id, data) => {
    console.log(data);
    const url = `${ApiConfig.user}/${id}`
    return await httpService.put(url, data)
}


