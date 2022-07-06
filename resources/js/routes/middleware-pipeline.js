function middlewarePipeline(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMidd = middlewarePipeline(context, middleware, index + 1);

    nextMiddleware({ ...context, next: nextMidd });
  };
}
export default middlewarePipeline