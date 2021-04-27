import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Insert from '@/components/Insert.vue';

const localVue = createLocalVue();
const mountWrapper = () => mount(Insert, {
  localVue,
  mocks: {
  },
  props: {

  },
});

describe('Insert.vue', () => {
  let wrapper;

  it('component should load', () => {
    wrapper = shallowMount(Insert, {});
    expect(wrapper.exists()).toBe(true);
  });

  it('does not label exists', () => {
    wrapper = shallowMount(Insert, {});
    expect(wrapper.find('label').exists()).toBe(false);
  });

  it('does label exists', () => {
    const text = 'Menssagem do Label';
    wrapper = shallowMount(Insert, {
      propsData: { text },
    });
    expect(wrapper.find('label').text()).toBe(text);
  });

  it('should send event to add input data do list', async () => {
    //wrapper = mountWrapper();
    wrapper = shallowMount(Insert, {
    });
    const botao = wrapper.find('#botao')
    wrapper.setData({content: "Entrada"})

    await botao.trigger('click');

    expect(botao.exists()).toBe(true);
    
    expect(wrapper.emitted('new-value')[0]).toEqual(['Entrada']);
    expect(wrapper.emitted('new-value')).toBeTruthy();

  });
});
