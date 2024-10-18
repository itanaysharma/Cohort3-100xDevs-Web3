import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
  useQuery,
} from "@tanstack/react-query";
// #https://jsonplaceholder.typicode.com/posts

const queryClient = new QueryClient();
async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts></Posts>
    </QueryClientProvider>
  );
}
function Posts() {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["posts"], queryFn: getter });

  if (query.isLoading) {
    return <div>"Loading..."</div>;
  }

  return <div>{JSON.stringify(query.data)}</div>;
}

export default App;
