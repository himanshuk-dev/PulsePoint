import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  return (
    <button
      className="bg-transparent hover:bg-blue-900 m-5 text-white-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
      onClick={() => router.push("/dashboard")}
    >
      Dashboard
    </button>
  );
};

export default Button;
