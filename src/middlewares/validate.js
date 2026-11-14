import { AppError } from '../utils/index.js';

export const validate = ({ params, body } = {}) => {
  return (req, res, next) => {
    if (params) {
      const result = params.safeParse(req.params);
      if (!result.success) {
        const message = result.error.issues.map((issue) => issue.message).join('; ');
        return next(new AppError(message, 400));
      }
      req.params = result.data;
    }

    if (body) {
      const result = body.safeParse(req.body ?? {});
      if (!result.success) {
        const message = result.error.issues.map((issue) => issue.message).join('; ');
        return next(new AppError(message, 400));
      }
      req.body = result.data;
    }

    next();
  };
};
