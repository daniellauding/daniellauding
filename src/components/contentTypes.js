import React from "react";
import Slider from './slider';
import Accordion from './accordion';
import Text, { Title } from './typography';
import Image from './image';

const ContentType = ({ type, style, value, size, title, accordionItem, slides }) => {
  if (type === 'text') {
    return <Text value={value} size={size} style={style} />;
  }
  if (type === 'title') {
    return <Title value={value} size={size} style={style} />;
  }
  if (type === 'img') {
    return <Image value={value} style={style} />;
  }
  if (type === 'slider') {
    return <Slider slides={slides} />;
  }
  if (type === 'accordion') {
    return <Accordion accordionItem={accordionItem} title={title} />;
  }
  return null;
};

export default ContentType;