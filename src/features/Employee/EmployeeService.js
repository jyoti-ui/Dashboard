import httpService from "../../service/httpservice";
import ApiConfig from "../../service/apiconfig";

export const getEmployeeListApi = async () => {
    return await httpService.get(ApiConfig.user)
}

export const postEmployeeListApi = async (data) => {
    return await httpService.post(ApiConfig.user, data)
}