$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius:10
    });

    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerHTML = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);

    })

    // Counter



    const counters = document.querySelectorAll('.counter');
    console.log(counters);

    function runcounter(){
        counters.forEach(counter => {
            counter.innerHTML = 0;
        
            let target = +counter.dataset.count;
            let step = target / 100;
            // console.log(target);

            let countIt = function(){
                let displayedCount = +counter.innerHTML;

                if(displayedCount < target) {
                    
                    counter.innerHTML = Math.ceil(displayedCount + step);
                       

                    setTimeout(countIt, 1);
                }else{
                    counter.innerHTML = target; 
                }
            }
            countIt();
        })
    }

    

    let  counterSection = document.querySelector('.counter_section');
    
    let options = {
        rootMargin : '0px 0px -200px 0px'
    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function(entries){

        if(entries[0].isIntersecting && done!==1){
            done= 1;

            runcounter();

        }
    }, options)
    sectionObserver.observe(counterSection);

    // Gallery section for Portfolio
    var $wrapper = $('.portfolio_wrapper');
    
    // initialize isotope
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animatedOptions : {
            duration: 750,
            easing: 'linear'

        }
       

    } );

    let links = document.querySelectorAll('.tabs a');
    
    links.forEach(link => {

        let selector = link.dataset.filter;

        link.addEventListener('click', function(e){
            e.preventDefault();


            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration: 750,
                    easing: 'linear'
        
                }
               
        
            } );

            
            links.forEach(link=>{

                link.classList.remove('active');

            })
                e.target.classList.add('active');


        });

    })

    // magninfic popup
    $('.magnific').magnificPopup({
        type: 'image',
        gallery: {
            enabled : true
        },
        zoom: {
            enabled : true
        }
    });
    // Slider for Review
    $('.slider').slick({
        arrows: false,
        autoplay: true,

    });

});