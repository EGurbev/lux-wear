import loader from "@/assets/loader.gif";
import Image from "next/image";

export default function ProductListLoading() {
  return (
    <div
      className="flex flex-col gap-3 align-center justify-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        width: "100%",
      }}
    >
      <Image src={loader} height={100} width={100} alt="Loading..." />
      <p>Loading products...</p>
    </div>
  );
}
