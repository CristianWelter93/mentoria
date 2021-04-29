import { shallowMount } from '@vue/test-utils';
import ShowList from '@/components/ShowList.vue';
import axios from 'axios';

jest.mock('axios');

describe('ShowList.vue', () => {
  let wrapper;

  it('component should load', () => {
    wrapper = shallowMount(ShowList, {});
    expect(wrapper.exists()).toBe(true);
  });

  it('should add input data do list', async () => {
    wrapper = shallowMount(ShowList, {});
    wrapper.setProps({ new: 'Entrada' });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$data.list[0]).toBe('Entrada');
    });
  });

  it('should get data from back', async () => {
    const resp = ['entrada1', 'entrada2', 'entrada3', 'entrada4'];

    wrapper = shallowMount(ShowList, {});

    axios.get.mockImplementation(() => Promise.resolve(resp));

    wrapper.find('.recuperar').trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$data.list.length).toStrictEqual(4);
    });
  });

  it('should call method buscar', async () => {
    wrapper = shallowMount(ShowList, {
    });
    const botao = wrapper.find('.recuperar')

    const spy = jest.spyOn(wrapper.vm, 'buscar');
    
    await botao.trigger('click');

    expect(spy).toBeCalled();

  });
});
