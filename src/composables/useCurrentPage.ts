import { computed } from "vue";
import { useRoute } from "vue-router";

const useCurrentPage = () => {
  const route = useRoute();
  const currentPage = route.query.page as string;
  return computed(() => Number.parseInt(currentPage || "1"));
};

export default useCurrentPage;
