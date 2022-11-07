$(() => {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
/// IMAGE CAROUSEL FUNCTION PREVIOUS AND NEXT BUTTON \
//////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
//   ABOUT ME PAGE \
////////////////////
// CLICK 'ME'\
//////////////
    const $img1 = $('<img src= /png/punch.jpeg />').addClass('img1')
    const $p1 = $('<p>').addClass('box').text("'3/10/2017, Quentin Gonzalez throws punch of the night,defeats Matthew Mahoney during Daily News Golden Gloves' It feels like yesterday that Daily News headline was published. So much is put on the line to dream as big as I try to. Time is ticking away and I fear oppurtunities fade faster than the body. On the brightside many blessings came my way since.")
    const $me = $('.i')
    const $i = $('<div>').addClass('myself')
    const me = () => {
        $i.append($img1)
        $i.append($p1)
        $('#About').append($i)
        }
//////////////////      
// CLICK 'MYSELF'\
//////////////////
    const $img2 = $('<img src= /png/marrry.png />').addClass('img2')
    const $p2 = $('<p>').addClass('box2').text('4/1/2022, I know its a huge time skip but this is the most significant date in my life so far. Blessed with a partner who is the very reason why I still get to dream big, even after all I have been through in pursuit of dreaming. Its safe to say my dreams are shifting with the times, and I am excited to see what unfolds in front of me. The experience I gained is immearusable, and I look forward to gaining more.')
    const $myself = $('.my')
    const $us = $('<div>').addClass('april')
    const $noi = $('.us')
    const us = () => {
        $us.append($p2)
        $us.append($img2)
        $('#About').append($us)
        $('.us').text($('.us').text().replace(/and I/g, 'and Us'))
    }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
//   ABOUT ME PAGE \
////////////////////
    const $sect2 = $('.section2')
    const tech = () => {
        $sect2.empty()
        $('<a>').addClass('prof').text('-Technical Profile-').appendTo($sect2)
        $('<a>').addClass('sume').text('Html').appendTo($sect2)
        $('<a>').addClass('sume').text('CSS').appendTo($sect2)
        $('<a>').addClass('sume').text('JavaScript').appendTo($sect2)
        $('<a>').addClass('sume').text('jQuery').appendTo($sect2)
    }

    const comp = () => {
        $sect2.empty()
        $('<a>').addClass('prof').text('-Competencies-').appendTo($sect2)
        $('<a>').addClass('com').text('Development standards').appendTo($sect2)
        $('<a>').addClass('com').text('Source Code Review').appendTo($sect2)
        $('<a>').addClass('com').text('Html and CSS proficiency').appendTo($sect2)
        $('<a>').addClass('com').text('Web app development').appendTo($sect2)
        $('<a>').addClass('com').text('Software Development').appendTo($sect2)
    }

    const work = () => {
        $sect2.empty()
        $('<a>').addClass('prof').text('-Work History-').appendTo($sect2)
        $('<a>').addClass('story').text('General Assembly Fellow').appendTo($sect2)
        $('<a>').addClass('exp').text('ø Shadowed team members to learn new tasks and how to appropriately handle technical issues.').appendTo($sect2)
        $('<a>').addClass('exp').text('ø Learned new skills and applied to daily tasks to improve efficiency and productivity.').appendTo($sect2)    
        $('<a>').addClass('exp').text('ø Wrote clear, clean code for various projects.').appendTo($sect2)
        $('<a>').addClass('exp').text('ø Coded a website using HTML, CSS, JavaScript and jQuery languages.').appendTo($sect2)
        $('<a>').addClass('story2').text('Equinox Fitness Club - Personal Trainer').appendTo($sect2)
        $('<a>').addClass('exp').text('ø Designed plans from a macrocycle to microcycle cycle scale to ensure goals are achieved by deadlines agreed upon with clients.').appendTo($sect2)
        $('<a>').addClass('exp').text('ø Used critical thinking to break down problems, evaluate solutions and make decisions.').appendTo($sect2)
        $('<a>').addClass('exp').text('ø Collaborated with clients to define solution requirements.').appendTo($sect2)
    } 

    const ed = () => {
        $sect2.empty()
        $('<a>').addClass('prof').text('-Education-').appendTo($sect2)
        $('<a>').addClass('school').text('Software Engineer').appendTo($sect2)
        $('<a>').addClass('class').text('October 2022 - Current').appendTo($sect2)
        $('<a>').addClass('class').text('General Assembly New York, NY').appendTo($sect2)
        $('<a>').addClass('school2').text('Associate in Liberal Arts').appendTo($sect2)
        $('<a>').addClass('class').text('Fall 2014 - Spring 2017').appendTo($sect2)
        $('<a>').addClass('class').text('Deans List 2015 - Cumulative GPA: 3.488').appendTo($sect2)
        $('<a>').addClass('class').text('Borough of Manhattan Community College New York, NY').appendTo($sect2)
    }
    
    const skill = () => {
        $sect2.empty()
        $('<a>').addClass('prof').text('-Transferable Skills-').appendTo($sect2)
        $('<a>').addClass('able').text('ø Effectively understand and communicate ideas/thoughts in an unambigous manner and adjusts communication as per the context').appendTo($sect2)
        $('<a>').addClass('able').text('ø Ability to break up a problem into multiple functions to solve the overall problem').appendTo($sect2)
        $('<a>').addClass('able').text('ø Staying composed and persistant while facing adversity.').appendTo($sect2)
        $('<a>').addClass('able').text('ø Enjoying repetitive tasks and able to work without motivation').appendTo($sect2)

    }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MEDIA SCREEN AT MAX-WIDTH 550 \
//////////////////////////////////
   
// const head = (x) => {
//       let x = window.matchMedia("(max-width: 550px)")
//        while (x.matches){ 
//         $('.nav_links').css('display', 'flex')
//         $('.statement').css('padding-top', '30%')
//         setTimeout (() => {$('.nav_links').css('display', 'none')}, 4000)
//         setTimeout (() => {$('.statement').css('padding-top', '0')}, 4000)
    
//         }
//     }
// //     }


// window.addEventListener('load', ()=>{

// })
const mediaQueryCondition = window.matchMedia('(max-width: 550px)')
const head = () => {
    $('.nav_links').css('display', 'flex')
    $('.statement').css('padding-top', '30%')
    setTimeout (() => {$('.nav_links').css('display', 'none')}, 4000)
    setTimeout (() => {$('.statement').css('padding-top', '0')}, 4000)
    if ($('#About').on('click')){
        $('#About').css('padding-top', '50%')
        // remove(head())
    } else if($('#Resume').on('click')) {
        $('.statement').css('padding-top', '90%')
        // remove(head())
    } else (
        head()
    )
}
if (mediaQueryCondition.matches) {
    $('#head').on('click', head)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPEN AND CLOSE BUTTONS FOR FOOTER MODALS \
/////////////////////////////////////////////
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


$('.skill').on('click', skill)
$('.ed').on('click', ed)
$('.work').on('click', work)
$('.comp').on('click', comp)
$('.tech').on('click', tech)
$myself.on('click', us)
$me.on('click', me)
$openBtn.on('click', openModal)
$closeBtn.on('click', closeModal)
$openBtn2.on('click', openModal2)
$closeBtn2.on('click', closeModal2)

})