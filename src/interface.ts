import { Option } from 'funfix-core'

interface News {
    title?: string
    para: string
}

interface Person {
    org: Option<string>,
    job: Option<string>,
    name: string,
}

export { News, Person }
