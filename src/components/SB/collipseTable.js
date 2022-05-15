import React from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

// Components
import SyntaxTwilightComponent from './syntaxTwilightComponent';
import PropsTable from './propsTable';

const CollipseTable = ({
  code,
  typeValue,
  defaultValue,
  requiredValue,
  description,
}) => {
  return (
    <Collapse>
      <CollapseHeader>
        <SyntaxTwilightComponent code={code} />
      </CollapseHeader>
      <CollapseBody>
        <PropsTable
          typeValue={typeValue}
          defaultValue={defaultValue}
          requiredValue={requiredValue}
          description={description}
        />
      </CollapseBody>
    </Collapse>
  );
};

export default CollipseTable;
