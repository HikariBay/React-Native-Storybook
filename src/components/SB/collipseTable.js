import React from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

// Components
import SyntaxOkaidiaComponent from './syntaxOkaidiaComponent';
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
        <SyntaxOkaidiaComponent code={code} />
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
