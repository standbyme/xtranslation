import axios from 'axios'
import { Option } from 'funfix-core'

import { News, Person } from './interface'

function get_or_null(str: string) {
    if(str) return str
    else return null
}

export default async function (news: News): Promise<[Person]> {
    const { data } = await axios.post('http://sentence.xtranslation.net/ner/who', { title: '', ...news }, {
        // tslint:disable-next-line:no-any
        transformRequest: [function (arg: any) {
            let ret = ''
            for (const it in arg) {
                // tslint:disable-next-line:prefer-template
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(arg[it]) + '&'
            }
            return ret
        }]
    })
    return data.people.filter((p: any) => p.who).map((p: any) => ({ name: p.who, org: Option.of(get_or_null(p.org)), job: Option.of(get_or_null(p.job)) }))
}
