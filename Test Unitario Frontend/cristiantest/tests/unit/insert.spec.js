import { shallowMount } from '@vue/test-utils';
import Insert from '@/components/Insert.vue';

describe('Insert.vue', () => {
    let wrapper;

    it('component should load', () => {
        wrapper = shallowMount(Insert, {});
        expect(wrapper.exists()).toBe(true);
    })

    it('does not label exists', () => {
        wrapper = shallowMount(Insert, {});
        expect(wrapper.find("label").exists()).toBe(false);
    })

    it('does label exists', () => {
        const text = 'Menssagem do Label';
        wrapper = shallowMount(Insert, {
            propsData: { text },
        });
        expect(wrapper.find("label").text()).toBe(text);
    })

    it('should send event to add input data do list', async() => {
        wrapper = shallowMount(Insert, {})
        wrapper.vm.$emit('newValue', "Entrada")
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().newValue[0]).toEqual(["Entrada"])
    })
});
