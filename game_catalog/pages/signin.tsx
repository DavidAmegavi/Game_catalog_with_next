import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";

const Login: React.FC = () => {
  return (
    <div className="container">
      <Link href="#">
        <a>Login</a>
      </Link>
    </div>
  );
};

export default Login;
