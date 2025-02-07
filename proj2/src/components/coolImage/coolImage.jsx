import './style.css';

function CoolImage({src, alt, h="900px"}) {
  return (
    <>
    <div className='cool-image-div'>
      <img className="cool-image" src={src} alt={alt} style={{height: h}}/>
    </div>
    </>
    );
}

export default CoolImage;