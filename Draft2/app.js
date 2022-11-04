$(() => {
    /// IMAGE CAROUSEL FUNCTION PREVIOUS AND NEXT BUTTON \\\
      let currentImgIndex = 0;
      let numOfImages = $('.imgs').children().length - 1
  
      $('.next').on('click', () =>{
        $('.imgs').children().eq(currentImgIndex).css('display', 'none')
  
        if(currentImgIndex < numOfImages) {
          currentImgIndex ++
         } else {
          currentImgIndex = 0
         }   
         
          $('.imgs').children().eq(currentImgIndex).css('display', 'block')       
      })
  
      $('.prev').on('click', () => {
        $('.imgs').children().eq(currentImgIndex).css('display', 'none')
  
        if(currentImgIndex > 0) {
          currentImgIndex --
        } else {
          currentImgIndex = numOfImages
        }   
          
          $('.imgs').children().eq(currentImgIndex).css('display', 'block')       
      })

      $('')
  })