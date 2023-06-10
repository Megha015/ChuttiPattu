export const createOrder = async ({ name, phone, message }) => {
  const res = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      message: message,
    }),
  });
  const id = await res.json();
  return id;
};
