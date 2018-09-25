import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { App } from '../App';
import sinon from 'sinon';

configure({
  adapter: new Adapter
})

describe('<App />', () => {

  let wrapper = mount(<App />);

  beforeEach(() => {
    wrapper.setProps({
      evaluate: sinon.spy(),
      delete: sinon.spy(),
      calculate: sinon.spy(),
      clear: sinon.spy()
    })
  })

  it('mounts and renders app without errors', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    mount(<App />)

    expect(App.prototype.componentDidMount.calledOnce).toBeTruthy()
    expect(toJson(wrapper)).toMatchSnapshot()
  })


  it('calls the calculate action, on keypad clicks ', () => {

    wrapper.find('button[name="5"]').simulate('click')
    expect(wrapper.prop('calculate').calledWith('5')).toBeTruthy()

    wrapper.find('button[name="*"]').simulate('click')
    expect(wrapper.prop('calculate').calledWith('5')).toBeTruthy()

    wrapper.find('button[name="5"]').simulate('click')
    expect(wrapper.prop('calculate').calledWithExactly('5')).toBeTruthy()

    expect(wrapper.prop('calculate').callCount).toBe(3);
    expect(wrapper.prop('clear').notCalled).toBeTruthy()
    expect(wrapper.prop('delete').notCalled).toBeTruthy()

  })

  it('calls the evaluate action, on keypad "=" click ', () => {

    wrapper.find('button[name="="]').simulate('click')

    expect(wrapper.prop('evaluate').calledOnce).toBeTruthy()
    expect(wrapper.prop('clear').notCalled).toBeTruthy()
    expect(wrapper.prop('delete').notCalled).toBeTruthy()
    expect(wrapper.prop('calculate').notCalled).toBeTruthy()

  })

  it('calls clear action, on keypad "c" click ', () => {

    wrapper.find('button[name="c"]').simulate('click')

    expect(wrapper.prop('clear').calledOnce).toBeTruthy()
    expect(wrapper.prop('calculate').notCalled).toBeTruthy()
    expect(wrapper.prop('delete').notCalled).toBeTruthy()
    expect(wrapper.prop('evaluate').notCalled).toBeTruthy()
  })


  it('calls delete action, on keypad "Del" click ', () => {

    wrapper.find('button[name="Del"]').simulate('click')

    expect(wrapper.prop('delete').calledOnce).toBeTruthy()
    expect(wrapper.prop('calculate').notCalled).toBeTruthy()
    expect(wrapper.prop('clear').notCalled).toBeTruthy()
    expect(wrapper.prop('evaluate').notCalled).toBeTruthy()
  })

})