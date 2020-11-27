import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { base_url } from './api'

const instance = axios.create({
    baseURL: base_url,
    timeout: 3000,
})

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (config) {
            return config
        }
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (res: AxiosResponse) => {
        return Promise.resolve(res.data)
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
)

export const Http = ({ url, method, data }) => {
    return instance({
        url,
        method,
        data,
    })
}
