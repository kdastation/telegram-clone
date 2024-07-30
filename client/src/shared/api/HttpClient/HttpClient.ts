import axios, { AxiosInstance, CreateAxiosDefaults, RawAxiosRequestConfig } from 'axios'

type RequestParams = RawAxiosRequestConfig

type BaseConfig = CreateAxiosDefaults

export class HttpClient {
  readonly api: AxiosInstance
  readonly bodyConverter: (data: any) => any
  readonly responseConverter: (data: any) => any
  private accessToken: string | null | undefined = null

  constructor(
    baseConfig: BaseConfig,
    bodyConverter: (body: any) => any,
    responseConverter: (data: any) => any,
    accessToken?: string | null
  ) {
    this.api = axios.create(baseConfig)
    this.bodyConverter = bodyConverter
    this.accessToken = accessToken
    this.responseConverter = responseConverter
  }

  public getInstance() {
    return this.api
  }

  public async request<Result = any>(args: RequestParams) {
    const body = args.data ? this.bodyConverter(args.data) : undefined

    const result = await this.api<Result>({
      ...args,
      data: body,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })

    result.data = (result.data ? this.responseConverter(result.data) : result.data) as Result

    return result
  }

  public setAccessToken(token: string | null) {
    this.accessToken = token
  }
}
