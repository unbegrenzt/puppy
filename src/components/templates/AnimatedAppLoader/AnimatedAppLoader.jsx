
export default function AnimatedAppLoader({ children, image }){
  return (
    <div className="animated-app-loader">
      <div className="animated-app-loader__image">
        <img src={image} alt=""/>
      </div>
      <div className="animated-app-loader__content">
        {children}
      </div>
    </div>
  );
}
