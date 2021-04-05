import { shallowMount } from '@vue/test-utils';
import FieldsLabel from '@/components/FieldsLabel.vue';
import axios from 'axios';

jest.mock('axios');

describe('FieldsLabel.vue', () => {
    let wrapper;

    it('component should load', () => {
        wrapper = shallowMount(FieldsLabel, {});
        expect(wrapper.exists()).toBe(true);
    })

    it('does not label exists', () => {
        wrapper = shallowMount(FieldsLabel, {});
        expect(wrapper.find("label").exists()).toBe(false);
    })

    it('does label exists', () => {
        const text = 'Menssagem do Label';
        wrapper = shallowMount(FieldsLabel, {
            propsData: { text },
        });
        expect(wrapper.find("label").text()).toBe(text);
    })

    it('should add input data do list', () => {
        wrapper = shallowMount(FieldsLabel, {
            data() {
                return {
                    content: "Entrada"
                }
            }
        });
        wrapper.find("button").trigger("click");
        expect(wrapper.vm.$data.list.length).toStrictEqual(1);
        expect(wrapper.vm.$data.list[0]).toBe("Entrada");
    })

    it('should get data from back', async () => {
        const resp = ["entrada1", "entrada2", "entrada3", "entrada4"];

        wrapper = shallowMount(FieldsLabel, {});

        axios.get.mockImplementation(()=> Promise.resolve(resp));

        wrapper.find(".recuperar").trigger("click");
        wrapper.vm.$nextTick(()=>{
            expect(wrapper.vm.$data.list.length).toStrictEqual(4);
        })
    })
});
