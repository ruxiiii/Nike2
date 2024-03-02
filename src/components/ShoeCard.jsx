import PropTypes from 'prop-types';



const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}) => {

  const handleClick = () => {
    if(bigShoeImg !== imgUrl.bigShoe)
    {
      changeBigShoeImage(imgUrl.bigShoe)
    }
  };
  console.log(imgUrl.thumbnail)

  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg === imgUrl.bigShoe 
    ? 'border-x-coral-red':'border-transparent'}
    cursor-pointer max-sm:flex-1`}
  
    onClick = {handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src = {imgUrl.thumbnail}
          alt = 'Shoe Collection'
          width = {127}
          height={103}
          className='object-contain' 
        />
      </div>
    </div>
  
  
  
  )
}


ShoeCard.propTypes = {
  imgUrl: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    bigShoe: PropTypes.string.isRequired,
  }).isRequired,
  changeBigShoeImage: PropTypes.func.isRequired,
  bigShoeImg: PropTypes.string.isRequired,
};




export default ShoeCard
