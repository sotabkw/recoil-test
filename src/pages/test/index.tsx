import React from "react";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  const router = useRouter();
  return (
    <>
      aaaa
      <button
        onClick={() => {
          router.replace("/");
        }}
      >
        遷移
      </button>
    </>
  );
};

export default Index;
