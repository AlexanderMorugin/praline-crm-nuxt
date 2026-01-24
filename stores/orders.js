import { defineStore } from "pinia";

export const useOrdersStore = defineStore("ordersStore", () => {
  const orders = ref([]);
  const order = ref(null);

  const loadOrders = async () => {
    const result = await useFetch("/api/orders/load-orders", {
      method: "GET",
    });

    if (result.status.value === "success") {
      orders.value = result.data.value;
    }

    return result;
  };

  const getOrder = async (orderId) => {
    const result = await useFetch("/api/orders/get-order", {
      method: "POST",
      body: {
        id: orderId,
      },
    });

    if (result.status.value === "success") {
      order.value = result.data.value[0];
    }

    return result;
  };

  const updateStatusAcceptOrder = async (date) => {
    const result = await useFetch("/api/orders/accept-order", {
      method: "PATCH",
      body: {
        id: order.value.id,
        status: date,
      },
    });

    if (result.status.value === "success") {
      order.value.status_accept = date;

      orders.value = orders.value.map((item) =>
        item.id === order.value.id ? { ...item, status_accept: date } : item
      );
    }

    return result;
  };

  const updateStatusDeliveryOrder = async (date) => {
    const result = await useFetch("/api/orders/delivery-order", {
      method: "PATCH",
      body: {
        id: order.value.id,
        status: date,
      },
    });

    if (result.status.value === "success") {
      order.value.status_delivery = date;

      orders.value = orders.value.map((item) =>
        item.id === order.value.id ? { ...item, status_delivery: date } : item
      );
    }

    return result;
  };

  const updateStatusCompleteOrder = async (date) => {
    const result = await useFetch("/api/orders/complete-order", {
      method: "PATCH",
      body: {
        id: order.value.id,
        status: date,
      },
    });

    if (result.status.value === "success") {
      order.value.status_complete = date;

      orders.value = orders.value.map((item) =>
        item.id === order.value.id ? { ...item, status_complete: date } : item
      );
    }

    return result;
  };

  const deleteOrder = async () => {
    const result = await useFetch("/api/orders/delete-order", {
      method: "DELETE",
      body: {
        id: order.value.id,
      },
    });

    if (result.status.value === "success") {
      orders.value = orders.value.filter((item) => item.id !== order.id);
    }

    return result;
  };

  return {
    orders,
    order,
    loadOrders,
    getOrder,
    updateStatusAcceptOrder,
    updateStatusDeliveryOrder,
    updateStatusCompleteOrder,
    deleteOrder,
  };
});
