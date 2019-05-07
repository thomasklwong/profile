import camelcase from 'camelcase';
import decamelize from 'decamelize';

const kebabCase = str => decamelize(camelcase(str), '-');

export default kebabCase;
