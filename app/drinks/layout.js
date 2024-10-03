import Link from "next/link";

const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-4xl">
      <div className="mockup-code mb-8 flex mt-4 items-center justify-between">
        <pre data-prefix="$" className="mt-6">
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
        
        <Link href="/drinks" className="btn btn-sm btn-primary ml-auto mr-4">
          Drinks
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
