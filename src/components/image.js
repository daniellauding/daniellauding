import React from 'react';
import DummyImage from 'react-dummy-image';
//import classNames from 'classnames';

const Image = ({ item, variant, color, format, width, height, text, textColor, value }) => {

  if (loop === true) {
    return (
      <img
        src={`../images/${item.client}/${item.name}.jpg`}
        alt='Beer picture'
      />
    );
  }

  if (variant === 'dummy') {
    return (
      <DummyImage color={color} format={format} width={width} height={height} text={text} textColor={textColor} />
    );
  }

  return <img className="mt-4 mb-4" src={value} alt="" />;
};

export default Image;

export { DummyImage };