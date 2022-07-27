

            // backtotop 
            var bacakToTopbutton = document.querySelector("#scrollTop");
            window.addEventListener("scroll", scrollFunction);
            function scrollFunction(){
             if(window.scrollY > 300){
               bacakToTopbutton.style.display = "block";
             }
             else
             {
               bacakToTopbutton.style.display = "none";
             }
            }
            bacakToTopbutton.addEventListener("click",bacakToTop);
            function bacakToTop(){
             window.scroll(0,0);
            }

            // sale

            document.querySelector(".sale").addEventListener("mouseenter", function(){
              document.querySelector(".sale-box").style.display= "flex";
              

              document.querySelector(".sale").style.display= "none";
            })
            document.querySelector(".close-icone").addEventListener("click",function(){
              document.querySelector(".sale-box").style.display = "none";
              document.querySelector(".sale").style.display= "block";
            })
          

              // numbering
              

              const workSection = document.querySelector(".section-work-data");

              const workSectionObserve = (entries) => {
                  const [entry] = entries;
                  if (!entry.isIntersecting) return;
                  console.log(entries);
              
              
                  const counterNum = document.querySelectorAll(".counter-numbers");
                  // console.log(counterNum);
                  const speed = 200;
              
                  counterNum.forEach((curNumber) => {
                      const updateNumber = () => {
                          const targetNumber = parseInt(curNumber.dataset.number);
                          // console.log(targetNumber);
                          const initialNumber = parseInt(curNumber.innerText);
                          // console.log(initialNumber);
                          const incrementNumber = Math.trunc(targetNumber / speed);
                          // i am adding the value to the main number
                          // console.log(incrementNumber);
              
                          if (initialNumber < targetNumber) {
                              curNumber.innerText = `${initialNumber + incrementNumber}+`;
                              setTimeout(updateNumber, 10);
                          } else {
                              curNumber.innerText = `${targetNumber}+`;
                          }
              
                      };
                      updateNumber();
                  });
              };
              
              const workSecObserver = new IntersectionObserver(workSectionObserve, {
                  root: null,
                  threshold: 0,
              });
              
              workSecObserver.observe(workSection); 
