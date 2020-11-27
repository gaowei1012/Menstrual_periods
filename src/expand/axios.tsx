import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'http://xxxx',
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
