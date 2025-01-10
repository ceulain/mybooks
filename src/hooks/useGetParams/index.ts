const useGetParams = (params: string) => {
  return new URLSearchParams(window.location.search).get(params);
};

export default useGetParams;
