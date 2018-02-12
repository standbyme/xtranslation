import * as assert from 'assert'

import who from './who'

describe('Xtranslation Who', function () {
    it('basic test', async function () {
        const mock = {
            para: '11月14日，青鸟盛地体育与荷兰维特斯足球俱乐部战略合作签约仪式新闻发布会在北京举行，这将标志着中欧联动、共同打造国内青少年足球运动培训体系步入一个崭新阶段。中国足协执委高洪波，荷兰维特斯足球俱乐部总经理德维特（Joost de Wit），青鸟盛地董事长赵乾翔，青鸟盛地副总经理毛阔等出席签约仪式。'
        }
        const result = await who(mock)
        assert.equal(result.length, 4)
        const example = result[3]
        assert.equal(example.name, '毛阔')
        assert.equal(example.job.get(), '副总经理')
        assert.equal(example.org.get(), '青鸟盛地')
    })

    it('basic test', async function () {
        const mock = {
            para: '外交部长王毅在北京与印尼外长蕾特诺共同会见记者'
        }
        const result = await who(mock)
        assert.equal(result.length, 2)
        const example = result[0]
        assert.equal(example.name, '王毅')
        assert.equal(example.job.get(), '外交部长')
        assert(example.org.isEmpty())
    })
})
