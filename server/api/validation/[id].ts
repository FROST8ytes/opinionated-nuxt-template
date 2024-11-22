export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.id) as number;

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }

  if (id == 0) {
    setResponseStatus(event, 202);
  }
  return "All good";
});
