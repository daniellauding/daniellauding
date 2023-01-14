import React from 'react';
// import ContentType from './contentType';
import classNames from 'classnames';
import Text, { Title } from './typography'
import DummyImage from 'react-dummy-image';

const Group = ({group}) => {
  const {title, text, dummyimage, ...rest} = group;
  console.log(group);
  return (
    <div className={classNames(`group`, {
      [`col-span-${group.columns}`] : group.columns,
      [`col-start-${group.colStart}`] : group.colStart,
      [`col-end-${group.colEnd}`] : group.colEnd,
      [`row-span-${group.rows}`] : group.rows,
      [`row-start-${group.rowStart}`] : group.rowStart,
      [`row-end-${group.rowEnd}`] : group.rowEnd,
      [`${group.style}`] : group.style
    })}>
      {title && (<Title value={title?.value} variant={title?.variant} style={title?.style} />)}
      {text && (<Text value={text?.value} variant={text?.variant} style={text?.style} />)}
      {dummyimage && (<DummyImage color={dummyimage?.color} format={dummyimage?.format} width={dummyimage?.width} height={dummyimage?.height} text={dummyimage?.text} textColor={dummyimage?.textcolor} />)}
      {rest?.groups && (<Groups section={rest} />)}
    </div>
  )
}

const Groups = ({ section }) => {
  const { groups = [] } = section;
  if (groups.length === 0) {
    return null;
  }
  return (
    <div className={classNames(`groups`, {
      [`grid-cols-${section.columns}`] : section.columns,
      [`grid-rows-${section.rows}`] : section.rows,
      [`gap-${section.gap}`] : section.gap,
      [`gap-y-${section.gapY}`] : section.gapY,
      [`gap-x-${section.gapX}`] : section.gapX
    })}>
      {groups.map((group) => <Group key={group?.id} group={group} />)}
    </div>
    
  )
}

export default Groups;