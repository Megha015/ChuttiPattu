import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import css from "../styles/OrderModal.module.css";
import { createOrder } from "../lib/orderHandler";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const OrderModal = ({ opened, setOpened }) => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [messageSent, setMessageSent] = useState(false); // Track whether the message has been sent or not

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const total = typeof window !== "undefined" && localStorage.getItem("total");

  const handleSubmit = async () => {
    const id = await createOrder({ ...formData });
    toast.success("Message Sent");
    console.log("order success" + id);

    // typeof window !== "undefined" && localStorage.setItem("order", id);
    // router.push(`/order/${id}`);
    // setMessageSent(true); // Set messageSent state to true after successful submission
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(null)}
      title="Type in Your Message"
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          required
          placeholder="Name"
        />
        <input
          onChange={handleInput}
          type="text"
          name="phone"
          required
          placeholder="Phone Number"
        />
        <textarea
          onChange={handleInput}
          name="message"
          rows={3}
          placeholder="Message"
        ></textarea>

        <button type="submit" className="btn">
          Click To Send
        </button>
      </form>

      {/* Display the message if messageSent is true */}
      <Toaster />
    </Modal>
  );
};

export default OrderModal;
