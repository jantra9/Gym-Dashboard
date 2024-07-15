import Link from "next/link";

export default function Login() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 w-96  rounded-3xl py-6 px-6">
          <h1 className="text-base font-bold flex justify-center">Login to your Account</h1>
          <p className="text-sm font-semibold opacity-40 flex justify-center py-2">Welcome to FITGYM! Login to continue</p>
          <form>
              <div className="pb-4">
                <label className="block font-bold pb-1">Email</label>
                <input 
                className="block rounded-lg w-full px-2 h-9 border border-gray-400 "
                type='email'
                placeholder='Enter your mail'
                />
              </div>
              <div>
                <label className="block font-bold pb-1">Password</label>
                <input 
                className="block rounded-lg w-full px-2 h-9 border border-gray-400 "
                type='password'
                placeholder='Password'
                />
              </div>
              <div className="flex flex-row justify-between pt-2">
                <div className="items-center">
                  <input type="checkbox"/>
                  <label className="text-sm font-semibold pl-2">Remember me</label>
                </div>
                <p className="text-sm font-semibold">Forgot password?</p>
              </div>
              <Link href='/dashboard/profile'>
                <button className="mt-4 w-full bg-black h-10 rounded-xl text-white"> Confirm</button>
              </Link>
              <Link href='/dashboard/profile'>
                <button className="mt-4 w-full h-10 rounded-xl border border-gray-400"> Cancel</button>
              </Link>
          </form>
      </div>
    </main>
    
  );
}