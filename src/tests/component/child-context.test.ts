import {render} from '@testing-library/svelte'
import {describe, expect, it} from 'vitest';
import FakeApp from "$lib/testing/FakeApp.svelte";

describe('Test Child.svelte', () => {

    it('Renders with faked context', () => {
        const { container } = render(FakeApp)

        const headline  = container.getElementsByTagName("h2")[0].textContent
        // FakeParent.svelte provides this context
        expect(headline).toContain("Welcome to Paris")
        // Test should not receive the real Parent.svelte's context
        expect(headline).not.toContain("Welcome to Amsterdam")
    });
});