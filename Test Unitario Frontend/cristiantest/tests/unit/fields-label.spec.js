import { shallowMount } from '@vue/test-utils';
import FieldsLabel from '@/components/FieldsLabel.vue';
import Insert from '@/components/Insert.vue';
import ShowList from '@/components/ShowList.vue';

describe('FieldsLabel.vue', () => {
  let wrapper;

  it('component should load', () => {
    wrapper = shallowMount(FieldsLabel, {});
    expect(wrapper.exists()).toBe(true);
  });

  it('does insert exists', () => {
    const text = 'Menssagem do Label';
    wrapper = shallowMount(FieldsLabel, {
      propsData: { text },
    });
    expect(wrapper.findComponent(Insert).exists()).toBe(true);
  });

  it('does showList exists', () => {
    const text = 'Menssagem do Label';
    wrapper = shallowMount(FieldsLabel, {
      propsData: { text },
    });
    expect(wrapper.findComponent(ShowList).exists()).toBe(true);
  });
});
