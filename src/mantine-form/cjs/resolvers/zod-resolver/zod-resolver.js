'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function zodResolver(schema) {
  return (values) => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      return {};
    }
    const results = {};
    parsed.error.errors.forEach((error) => {
      results[error.path.join(".")] = error.message;
    });
    return results;
  };
}

exports.zodResolver = zodResolver;
//# sourceMappingURL=zod-resolver.js.map
