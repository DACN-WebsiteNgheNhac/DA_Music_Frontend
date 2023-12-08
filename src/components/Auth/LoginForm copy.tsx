import React, { useState } from 'react';

interface LoginFormProps {
   onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
   const [isClose, setIsClose] = useState<boolean>(false);

   const handleClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
      const { id } = e.target as HTMLDivElement;
      if (id === 'auth-popup' && isClose) onClose();
   };

   return (
      <div
         id="auth-popup"
         onMouseDown={() => setIsClose(true)}
         onMouseUp={handleClickBackdrop}
         tabIndex={-1}
         className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
      >
         <div
            className="relative p-4 w-full max-w-md h-full md:h-auto"
            onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
         >
            <div className="relative bg-white rounded-lg shadow">
               <button
                  onClick={onClose}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
               >
                  <svg
                     aria-hidden="true"
                     className="w-5 h-5"
                     fill="#c6c7c7"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                     />
                  </svg>
                  <span className="sr-only">Close popup</span>
               </button>
               <div className="p-5">
                  <h3 className="text-2xl mb-0.5 font-medium" />
                  <p className="mb-4 text-sm font-normal text-gray-800" />
                  <div className="text-center">
                     <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                        đăng nhập vào tài khoản của bạn
                     </p>
                     <p className="mt-2 text-sm leading-4 text-slate-600">
                        Bạn phải đăng nhập để thực hiện hành động này.
                     </p>
                  </div>
                  <div className="mt-7 flex flex-col gap-2">
                     <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:border-red-600 disabled:cursor-not-allowed disabled:opacity-60">
                        <img
                           src="https://www.svgrepo.com/show/512317/github-142.svg"
                           alt="GitHub"
                           className="h-[18px] w-[18px] "
                        />
                        Tiếp tuc với GitHub
                     </button>
                     <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:border-red-600 disabled:cursor-not-allowed disabled:opacity-60">
                        <img
                           src="https://www.svgrepo.com/show/475656/google-color.svg"
                           alt="Google"
                           className="h-[18px] w-[18px] "
                        />
                        Tiếp tục với Google
                     </button>
                  </div>
                  <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                     <div className="h-px w-full bg-slate-200" />
                     Hoặc
                     <div className="h-px w-full bg-slate-200" />
                  </div>
                  <form className="w-full">
                     <label htmlFor="username" className="sr-only">
                        Tên đăng nhập
                     </label>
                     <input
                        name="username"
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:border-red-600"
                        placeholder="Tên đăng nhập"
                        defaultValue=""
                     />
                     <label htmlFor="password" className="sr-only">
                        Mật khẩu
                     </label>
                     <input
                        name="password"
                        type="password"
                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:border-red-600"
                        placeholder="Mật khẩu"
                        defaultValue=""
                     />
                     <p className="mb-3 mt-2 text-sm text-gray-500">
                        <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">
                           Quên mật khẩu?
                        </a>
                     </p>
                     <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:border-red-600 disabled:bg-gray-400"
                     >
                        Đăng nhập
                     </button>
                  </form>
                  <div className="mt-6 text-center text-sm text-slate-600">
                     Chưa có tài khoản?
                     <a href="/signup" className="font-medium text-[#4285f4]">
                        Đăng ký
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
