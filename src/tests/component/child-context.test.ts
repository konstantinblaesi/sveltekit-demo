import {render} from '@testing-library/svelte'
import {describe, expect, it} from 'vitest';
import FakeApp from "$lib/testing/FakeApp.svelte";
import Child from "$lib/context/Child.svelte";
import type {Data} from "$lib/context/context";
import {key} from "$lib/context/context";

describe('Test Child.svelte', () => {

    it('Renders with faked context', () => {
        const {container} = render(FakeApp)

        const headline = container.getElementsByTagName("h2")[0].textContent
        // FakeParent.svelte provides this context
        expect(headline).toContain("Welcome to Paris")
        // Test should not receive the real Parent.svelte's context
        expect(headline).not.toContain("Welcome to Amsterdam")
    });

    it("Renders directly", () => {
        // context value
        const data = {
            city: "New York"
        } satisfies Data

        const host = document.createElement('div');
        new Child({
            context: new Map([
                [key, data]]
            ),
            target: host
        })

        const headline = host.getElementsByTagName("h2")[0].textContent
        expect(headline).toContain(`Welcome to ${data.city}`)
    })
});