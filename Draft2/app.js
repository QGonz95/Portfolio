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
    //   ME MYSELF AND I click me
const $aboutMe = $('#About')
const $i = $('<div>').addClass('myself')
const $img1 = $('<img src= /png/punch.jpeg />').addClass('img1')
const $p1 = $('<p>').addClass('box').text("'March 10 2017, Quentin Gonzalez throws punch of the night, defeats Matthew Mahoney during Daily News Golden Gloves' It feels like yesterday that Daily News headline was published. So much is put on the line to dream as big as I try to. Time is ticking away and I fear oppurtunities fade faster than the body.")
const about = () => {
    $i.append($img1)
    $i.append($p1)
    $('#About').append($i)
}
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

$aboutMe.on('click', about)
$openBtn.on('click', openModal)
$closeBtn.on('click', closeModal)
$openBtn2.on('click', openModal2)
$closeBtn2.on('click', closeModal2)
  })