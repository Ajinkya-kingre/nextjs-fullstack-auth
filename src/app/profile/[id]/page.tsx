export default function userProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        profile page
        <span className="p-2 text-black rounded-md bg-orange-500 ml-2" >{params.id}</span>
      </p>
    </div>
  );
}
