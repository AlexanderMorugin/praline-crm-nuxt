import { defineStore } from "pinia";

export const useOrdersStore = defineStore("ordersStore", () => {
  const orders = ref([]);

  const loadOrders = async () => {
    const result = await useFetch("/api/orders/load-orders", {
      method: "GET",
    });

    // console.log(result.data.value);
    orders.value = result.data.value;

    // return result;
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
    loadOrders,
    // deleteOrder,
    // cleanOrder,
  };
});
