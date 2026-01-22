import { defineStore } from "pinia";

export const useOrdersStore = defineStore("ordersStore", () => {
  const orders = ref([]);
  const order = ref(null);

  const loadOrders = async () => {
    const result = await useFetch("/api/orders/load-orders", {
      method: "GET",
    });

    if (result.status.value === "success") {
      // console.log(result);

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

  // const deleteOrder = async (orderId: number) => {
  //   const result = await useFetch("/api/orders/delete-order", {
  //     method: "DELETE",
  //     body: {
  //       id: orderId,
  //     },
  //   });

  //   return result;
  // };

  // const cleanOrder = () => (order.value = null);

  return {
    orders,
    order,
    loadOrders,
    getOrder,
    // deleteOrder,
    // cleanOrder,
  };
});
