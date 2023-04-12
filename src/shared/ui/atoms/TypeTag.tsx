import React from 'react';
import { Tag } from 'antd';
import { TAG_COLOR_BY_TYPE } from 'src/shared/constants/pokemonType';

import './TypeTag.scss';

type TTypeTagProps = {
  type: string;
};

const TypeTag = ({ type }: TTypeTagProps) => (
  <Tag color={TAG_COLOR_BY_TYPE[type]} className="tag">
    {type}
  </Tag>
);

export default TypeTag;
