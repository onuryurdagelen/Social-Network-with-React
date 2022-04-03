import React, { Fragment } from 'react';

const Education = () => {
    
    return (
      <Fragment>
        <h2 className="my-2">Education Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th className="hide-sm">Degree</th>
              <th className="hide-sm">Years</th>
              <th />
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </Fragment>
    );
  };

  export default Education;