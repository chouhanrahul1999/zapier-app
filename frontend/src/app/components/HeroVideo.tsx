

export const HeroVideo = () => {
  return (
    <div className="flex justify-center items-center pt-8">
    <div
      className='flex justify-center max-w-8xl max-h-4xl p-4  bg-[url("https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'
    >
      <video
        src="https://res.cloudinary.com/zapier-media/video/upload/q_auto/f_auto/c_scale,w_1920/v1745864783/aiworkflowshomepage.mp4"
        className="max-w-6xl p-8"
        controls={false}
        muted
        autoPlay
      ></video>
    </div>
    </div>
  );
}