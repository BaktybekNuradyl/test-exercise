

//  range block

function displaySliderValue(eSlider){   
    eSlider.parentElement.querySelector('span').textContent = eSlider.value;
}


	  //     pop up for  map


	  if (document.querySelector(".js-overlay-modal")) {
		/* Записываем в переменные массив элементов-кнопок и подложку.
			Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
		var modalButtons = document.querySelectorAll(".js-open-modal"),
		  overlay = document.querySelector(".js-overlay-modal"),
		  closeButtons = document.querySelectorAll(".js-modal-close");
	
		/* Перебираем массив кнопок */
		modalButtons.forEach(function (item) {
		  /* Назначаем каждой кнопке обработчик клика */
		  item.addEventListener("click", function (e) {
			/* Предотвращаем стандартное действие элемента. Так как кнопку разные
				люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
				Нужно подстраховаться. */
			e.preventDefault();
	
			/* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
				и будем искать модальное окно с таким же атрибутом. */
			var modalId = this.getAttribute("data-modal"),
			  modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
	
			/* После того как нашли нужное модальное окно, добавим классы
				подложке и окну чтобы показать их. */
			modalElem.classList.add("showmodal");
			overlay.classList.add("showmodal");
			
		  });
		});
	
		closeButtons.forEach(function (item) {
		  item.addEventListener("click", function (e) {
			var parentModal = this.closest(".modal");
	
			parentModal.classList.remove("showmodal");
			overlay.classList.remove("showmodal");
		  });
		});
	
		overlay.addEventListener("click", function () {
		  document.querySelector(".modal.showmodal").classList.remove("showmodal");
		  overlay.classList.remove("showmodal");
		});
	
		document.onkeydown = function (evt) {
		  if (evt.key == "Escape" || evt.key == "Esc" || evt.key == 27) {
			evt.preventDefault();
			document.querySelector(".modal.showmodal").classList.remove("showmodal");
			overlay.classList.remove("showmodal");
		  }
		};
	
	  }
	



//   tabs

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
    });



    //  more and less info

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
  
    let elem = document.getElementById(id);
  
     elem.hidden = !elem.hidden;

  });



   //  more and less info btns innerInfo

// var tabInfo = document.querySelector('.tabs-content');
// tabInfo.addEventListener("click", tabsClickHandler);


// function tabsClickHandler(event) {
//     let showMore = event.target.closest('.content__subdesc-btn');
//     if (showMore) {
//       toggleText(showMore);
//     }
//   }

//   function toggleText(btnMore) {
//     if (btnMore.innerHTML == "Show More") {
//         btnMore.innerHTML = "Show Less";
//     } else if (btnMore.innerHTML == "Show Less") {
//         btnMore.innerHTML = "Show More";
//     } else {
//         null;
//     }
//   }


function toggle(e) {
    let txt = e.innerText;
    e.innerText = txt == 'Show More' ? 'Show Less' : 'Show More';
  }



//   remove text form search input

const removeText = document.querySelector('.search__input');

const clickb = document.querySelector('.search__cross');

clickb.addEventListener('click', () => {
    removeText.value = " ";
})





  

  
  //     burger menu -------------------------------------------------------------------

// let burger = document.getElementsByClassName('burger')[0];
// let show = document.getElementsByClassName('navbar')[0];


// burger.addEventListener('click', () =>{
//   burger.classList.toggle('show-menu')
//   show.classList.toggle('show')
// });
