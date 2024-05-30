import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import {useCatalogStore} from "~/stores/catalog";

describe('app', async () => {
    await setup()

    test('contains Application as string', async () => {
        const html = await $fetch('/catalog/4')
        expect(html).toContain('Application')
    })

})

describe('Catalog Store', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it('increments', () => {
        const store = useCatalogStore()
        expect(store.category).toBe()


        expect(counter.n).toBe(0)
        counter.increment()
        expect(counter.n).toBe(1)
    })

    it('increments by amount', () => {
        const counter = useCounterStore()
        counter.increment(10)
        expect(counter.n).toBe(10)
    })
})