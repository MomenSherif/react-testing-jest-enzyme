import checkPropTypes from 'check-prop-types';

/**
 * Returns ShalowWrapper containing node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {String} attr
 * @returns {ShallowWrapper}
 */
export const fintByTestAttr = (wrapper, attr) =>
  wrapper.find(`[data-test="${attr}"]`);

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
