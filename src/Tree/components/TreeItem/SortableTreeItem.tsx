import {CSSProperties} from 'react';
import type {UniqueIdentifier} from '@dnd-kit/core';
import {AnimateLayoutChanges, useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import {TreeItem, Props as TreeItemProps} from './TreeItem';
import {iOS} from '../../utilities';

interface Props extends TreeItemProps {
  id: UniqueIdentifier;
  itemStyle?: CSSProperties,
  actionNode?: React.ElementType
}

const animateLayoutChanges: AnimateLayoutChanges = ({isSorting, wasDragging}) =>
  isSorting || wasDragging ? false : true;

export function SortableTreeItem({id, depth, itemStyle = {}, actionNode, ...props}: Props) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  });
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    ...itemStyle
  };

  return (
    <TreeItem
      id={id}
      ref={setDraggableNodeRef}
      wrapperRef={setDroppableNodeRef}
      style={style}
      depth={depth}
      ghost={isDragging}
      disableSelection={iOS}
      disableInteraction={isSorting}
      ActionNode={actionNode}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    />
  );
}
