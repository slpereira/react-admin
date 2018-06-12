import {
    required as createRequiredValidator,
    number as createNumberValidator,
} from '@devel/react-admin';

export const required = createRequiredValidator();
export const number = createNumberValidator();
