import chai from 'chai';
import CounterInput from '../src/CounterInput';
import { mount } from 'enzyme';
import React from 'react';

chai.should();

const decSymbol = '−';
const incSymbol = '+';

describe(`CounterInput`, () => {
  it(`should increment`, () => {
    const wrapper = mount(<CounterInput count={0} />);
    const incBtn = wrapper.findWhere(x => x.text() === incSymbol).at(0);
    wrapper.find('input').getDOMNode().value.should.equal('0');

    incBtn.prop('onClick')();
    wrapper.find('input').getDOMNode().value.should.equal('1');
  });

  it(`should decrement`, () => {
    const wrapper = mount(<CounterInput count={0} />);
    const decBtn = wrapper.findWhere(x => x.text() === decSymbol).at(0);

    wrapper.find('input').getDOMNode().value.should.equal('0');

    decBtn.prop('onClick')();
    wrapper.find('input').getDOMNode().value.should.equal('-1');
  });

  it(`should update input value on change`, () => {
    const wrapper = mount(<CounterInput/>);
    wrapper.find('input').prop('onChange')({ target: { value: '23' }});

    wrapper.find('input').getDOMNode().value.should.equal('23');
  });

  describe(`when input value can be coerced to number`, () => {
    it(`should update count on blur`, () => {
      const wrapper = mount(<CounterInput/>);
      wrapper.find('input').prop('onChange')({ target: { value: '23' }});
      wrapper.find('input').prop('onBlur')();

      wrapper.state('count').should.equal(23);
    });
  });

  describe(`when input value cannot be coerced to number`, () => {
    it(`should not update count on blur`, () => {
      const wrapper = mount(<CounterInput count={0}/>);
      wrapper.find('input').prop('onChange')({ target: { value: 'foo' }});
      wrapper.find('input').prop('onBlur')();

      wrapper.state('count').should.equal(0);
    });
  });


  it(`should use count from props`, () => {
    const wrapper = mount(<CounterInput count={5}/>);
    wrapper.find('input').getDOMNode().value.should.equal('5');
  });

  describe(`when prev props count does not equal props count`, () => {
    it(`should update count state with new props count`, () => {
      const wrapper = mount(<CounterInput count={0} />);
      const incBtn = wrapper.findWhere(x => x.text() === incSymbol).at(0);

      incBtn.prop('onClick')();
      wrapper.find('input').getDOMNode().value.should.equal('1');

      wrapper.setProps({ count: 5 });
      wrapper.find('input').getDOMNode().value.should.equal('5');
    });
  });

  it(`should render children`, () => {
    const wrapper = mount(
      <CounterInput>
        {() => <div>Test</div>}
      </CounterInput>
    );

    wrapper.html().should.equal('<div>Test</div>');
  });

  describe(`when count is incremented`, () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it(`should call onCountChange with count`, () => {
      const onCountChange = jest.fn();
      const wrapper = mount(<CounterInput count={0} onCountChange={onCountChange} />);
      const incBtn = wrapper.findWhere(x => x.text() === incSymbol).at(0);

      incBtn.prop('onClick')();
      onCountChange.mock.calls.length.should.equal(1);
      onCountChange.mock.calls[0][0].should.equal(1);
    });
  });

  describe(`when count is decremented`, () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it(`should call onCountChange with count`, () => {
      const onCountChange = jest.fn();
      const wrapper = mount(<CounterInput count={0} onCountChange={onCountChange} />);
      const decBtn = wrapper.findWhere(x => x.text() === decSymbol).at(0);

      decBtn.prop('onClick')();
      onCountChange.mock.calls.length.should.equal(1);
      onCountChange.mock.calls[0][0].should.equal(-1);
    });
  });

  describe(`when count is updated via input`, () => {
    it(`should call onCountChange with count`, () => {
      const onCountChange = jest.fn();
      const wrapper = mount(<CounterInput count={0} onCountChange={onCountChange} />);
      wrapper.find('input').prop('onChange')({ target: { value: '23' }});
      wrapper.find('input').prop('onBlur')();

      onCountChange.mock.calls.length.should.equal(1);
      onCountChange.mock.calls[0][0].should.equal(23);
    });
  });

  describe(`when count equals max`, () => {
    it(`should not increment`, () => {
      const wrapper = mount(<CounterInput count={5} max={5}/>);
      const incBtn = wrapper.findWhere(x => x.text() === incSymbol).at(0);
      wrapper.find('input').getDOMNode().value.should.equal('5');

      incBtn.prop('onClick')();
      wrapper.find('input').getDOMNode().value.should.equal('5');
    });
  });

  describe(`when count equals min`, () => {
    it(`should not decrement`, () => {
      const wrapper = mount(<CounterInput count={0} min={0}/>);
      const decBtn = wrapper.findWhere(x => x.text() === decSymbol).at(0);
      wrapper.find('input').getDOMNode().value.should.equal('0');

      decBtn.prop('onClick')();
      wrapper.find('input').getDOMNode().value.should.equal('0');
    });
  });

  describe(`when input value is greater than max`, () => {
    it(`should change value to max`, () => {
      const wrapper = mount(<CounterInput count={0} max={5}/>);
      wrapper.find('input').prop('onChange')({ target: { value: '10' }});
      wrapper.find('input').prop('onBlur')();

      wrapper.find('input').getDOMNode().value.should.equal('5');
    });
  });

  describe(`when input value is less than min`, () => {
    it(`should change value to min`, () => {
      const wrapper = mount(<CounterInput count={10} min={5}/>);
      wrapper.find('input').prop('onChange')({ target: { value: '0' }});
      wrapper.find('input').prop('onBlur')();

      wrapper.find('input').getDOMNode().value.should.equal('5');
    });
  });
});