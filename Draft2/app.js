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
    //   OPEN AND CLOSE BUTTONS FOR FOOTER MODALS 
    const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

const openModal = () => {
    $modal.css('display', 'block')
}
const closeModal = () => {
    $modal.css('display', 'none')
}
const $openBtn2 = $('#openModal2');
const $modal2 = $('#modal2');
const $closeBtn2 = $('#close2');

const openModal2 = () => {
    $modal2.css('display', 'block')
}
const closeModal2 = () => {
    $modal2.css('display', 'none')
}


$openBtn.on('click', openModal)
$closeBtn.on('click', closeModal)
$openBtn2.on('click', openModal2)
$closeBtn2.on('click', closeModal2)
  })