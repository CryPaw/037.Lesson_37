const catCatalog = document.getElementById('c1');
const dogCatalog = document.getElementById('d2');
const birdCatalog = document.getElementById('b3');

const cats = document.querySelector(".cats")
const dogs = document.querySelector(".dogs")
const birds = document.querySelector(".birds")

const selectedCategoryCats1 = document.querySelector('.q1');
const selectedCategoryCats2 = document.querySelector('.q2');
const selectedCategoryCats3 = document.querySelector('.q3');

const selectedCategoryDogs1 = document.querySelector('.q1_1');
const selectedCategoryDogs2 = document.querySelector('.q2_2');
const selectedCategoryDogs3 = document.querySelector('.q3_3');

const selectedCategoryBirds1 = document.querySelector('.q1_1_1');
const selectedCategoryBirds2 = document.querySelector('.q2_2_2');
const selectedCategoryBirds3 = document.querySelector('.q3_3_3');

const productDescription = document.getElementById('pd');
const pl = document.getElementById('pl2');
const mybtn = document.querySelector('.mybtn');
const removescc = document.querySelectorAll('.selectedCategory_cats');
const title = document.createElement('div');
const titletd = document.createElement('div');
titletd.className = 'titletd';
titletd.className = 'tit_td';
title.className = 'title_2';
title.id = 'tit_2';



function catFood() {
        productDescription.appendChild(title);
        pl.style.setProperty("display", "flex");

        dogs.style.setProperty("display", "none");
        birds.style.setProperty("display", "none");
        cats.style.setProperty("display", "flex");

        selectedCategoryCats1.style.setProperty("display", "block");
        selectedCategoryCats2.style.setProperty("display", "block");
        selectedCategoryCats3.style.setProperty("display", "block");
        
}

function dogFood() {
        productDescription.appendChild(title);
        pl.style.setProperty("display", "flex");
        
        cats.style.setProperty("display", "none");
        birds.style.setProperty("display", "none");
        dogs.style.setProperty("display", "flex");

        selectedCategoryDogs1.style.setProperty("display", "block");
        selectedCategoryDogs2.style.setProperty("display", "block");
        selectedCategoryDogs3.style.setProperty("display", "block");
        
}

function birdFood() {
        productDescription.appendChild(title);
        pl.style.setProperty("display", "flex");

        cats.style.setProperty("display", "none");
        dogs.style.setProperty("display", "none");
        birds.style.setProperty("display", "flex");

        selectedCategoryBirds1.style.setProperty("display", "block");
        selectedCategoryBirds2.style.setProperty("display", "block");
        selectedCategoryBirds3.style.setProperty("display", "block");
}

document.getElementById("pm").addEventListener("click", function(event) {
  
    let targetElement = event.target;
  
    if (targetElement === catCatalog) {
        catFood();
      } else if (targetElement === dogCatalog){
        dogFood();
      } else if (targetElement === birdCatalog){
        birdFood();
      }
  });

  function count() {
    let counter = 0;
    return function() {
      return counter+=1;
    };
  }

  

    let counter = count();

  function addClone(targetElement) {
    mybtn.style.setProperty("display", "inline-block");
    let clone = targetElement.cloneNode(true);
    title.appendChild(clone);
    targetElement.style.setProperty("display", "none");
  }

  document.getElementById("pl").addEventListener("click", function(event) {
    let targetElement = event.target;

    switch (targetElement) {
            case selectedCategoryCats1:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryCats2:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryCats3:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryDogs1:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryDogs2:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryDogs3:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryBirds1:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryBirds2:
                county.value = counter();
            addClone(targetElement);
            break;

            case selectedCategoryBirds3:
                county.textContent = counter();
            addClone(targetElement);
            break;
    };

  });

  const formMain = document.querySelector(".form-group")

  document.getElementById("pd").addEventListener("click", function(event) {
  
    let targetElement = event.target;
    let elements = document.querySelectorAll("#pd > .title_2 > div > h4");
    const tdprod = document.querySelector(".tdprod")
    let a = [];
    
    

    if (targetElement === mybtn) {

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      a.splice(1, 0, element.textContent);
      console.log(a);
    }
        tdprod.textContent = (a)
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        console.log(currentDate.toLocaleDateString());
        const tddate = document.querySelector(".tddate");
        tddate.textContent = (`Орієнтовна дата прибуття ${currentDate.toLocaleDateString()}`);
        formMain.style.setProperty("display", "block");
        
    } 

  });

  const newinput = document.createElement("input")
  const newinput2 = document.createElement("input")
  const newinput3 = document.createElement("input")


// // выбираем нужный элемент
// var target = document.querySelector("#orders");
 
// function count2() {
//   let counter2 = 0;
//   return function() {
//     let a = localStorage.getItem('county2');
//     return counter2+=1+ +eval(a) - counter2;
//   };
// }

// let counter2 = count2();

// // создаем новый экземпляр наблюдателя
// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     let county2 = document.getElementById("county2")
    
//     county2.value = counter2();
//     // counter2 = 0;
    

//     localStorage.setItem('county2', JSON.stringify(county2.value));
//     // console.log(county2.value)
//     console.log(mutation.type);
//   });    
// });
 
// // создаем конфигурации для наблюдателя
// var config = { attributes: true, childList: true, characterData: true };
 
// // запускаем механизм наблюдения
// observer.observe(target,  config);
 
// позже, если надо, прекращаем наблюдение
// observer.disconnect();

// ____________________________________________________________________________________________


  formMain.onsubmit = function(evt) {
    evt.preventDefault();
    const mytable = document.getElementById("my-table")

        let clonetable = mytable.cloneNode(true)
        clonetable.style.setProperty("margin", ".1rem 0 .1rem 0")
        clonetable.className = "class1 class2 class3";
        clonetable.id = ("")
        document.getElementById("orders").appendChild(clonetable);
        // clonetable.style.setProperty("display", "block")
        
        counter = 0;
        counter = count();

        let usname = document.getElementById("usname")
        let ussname = document.getElementById("ussname")
        let ussname2 = document.getElementById("ussname2")
        let npdep = document.getElementById("npdep")
        let paypl = document.getElementById("paypl")
        let amo = document.getElementById("amo")
        let prod = document.getElementById("prod")
        let dat = document.getElementById("dat")
        let name = document.getElementById("name")
        let surname = document.getElementById("surname")
        let surname2 = document.getElementById("surname2")
        let np = document.getElementById("np")
        let payplace1 = document.getElementById("payplace1")
        let payplace2 = document.getElementById("payplace2")
        let county = document.getElementById("county")
        
        const newOrder = {
          name: usname.textContent,
          surname: ussname.textContent,
          surname2: ussname2.textContent,
          np: npdep.textContent,
          payplace: paypl.textContent,
          amount: amo.textContent,
          product: prod.textContent,
          date: dat.textContent,
        };

        
        const oldOrdersList = JSON.parse(localStorage.getItem("orders"));

        if (oldOrdersList) {
          localStorage.setItem(
            "orders",
            JSON.stringify([...oldOrdersList, newOrder])
          );
        } else {
          localStorage.setItem("orders", JSON.stringify([newOrder]));
        }
        
        formMain.style.setProperty("display", "none")
        pl.style.setProperty("display", "none")
        title.replaceChildren('')
        mybtn.style.setProperty("display", "none");
        name.value = ("");
        surname.value = ("");
        surname2.value = ("");
        np.value = ("");
        payplace1.value = ("");
        payplace2.value = ("unchecked");
        county.value = ("");
  };



  var knopka = document.getElementById("mybtnfororder")
  knopka.addEventListener('click',func1);

  function func1() {
    var orders2 = document.getElementById ('orders2');
    if (orders2.style.display === 'none'){
      
      orders2.innerHTML="";
      orders2.style.display="flex";

    }else{
      orders2.innerHTML="";
      orders2.style.display="none";
      
    }
    
  };

  knopka.addEventListener("click", function(event) {
    
    let county2 = document.getElementById("county2")
    
    a = localStorage.getItem('county2');
    county2.value = eval(a);
    
    console.log(a)
    var arr1 = [];
    
    for (let index = 0; index < eval(a); index++) {
      const element = eval(a)[index];
      arr1.push(element);
    }
      
  });

  knopka.addEventListener("click", () => {
    const storedOrders = JSON.parse(localStorage.getItem("orders"));
   
orderList = document.getElementById('orders2')
      if (storedOrders) {
        orderList.innerHTML = "";

        storedOrders.forEach((order) => {
          const orderItem = document.createElement("li");
          orderItem.classList.add("order-item");
          orderItem.style.marginBottom = "13px";
          orderItem.style.cursor = "pointer";
          orderItem.innerHTML = `
          <span>Назва продукту: ${order.product};</span></br>
          <span>Дата: ${order.date};</span></br>
        `;
          orderList.appendChild(orderItem);

          orderItem.addEventListener("click", () => {
            orderItem.innerHTML = `
          <span>Назва продукту: ${order.product};</span></br>
          <span>Дата: ${order.date};</span></br>
          <span>ПІБ: ${order.name + ` ` + order.surname + ` ` + order.surname2};</span></br>
          <span>Кількість продукції: ${order.amount};</span></br>
          <span>Нова Пошта: ${order.np};</span></br>
          <span>Спосіб оплати: ${order.payplace}</span></br>
        `;

            const deleteOrderButton = document.createElement("button");
            deleteOrderButton.textContent = "Видалити замовлення";
            deleteOrderButton.style.margin = "5px 0 5px";
            deleteOrderButton.style.fontSize = "12px";
            orderItem.appendChild(deleteOrderButton);

            deleteOrderButton.addEventListener("click", (event) => {
              event.stopPropagation();

              const index = storedOrders.indexOf(order);
              if (index !== -1) {
                storedOrders.splice(index, 1);
                localStorage.setItem("orders", JSON.stringify(storedOrders));
                orderList.removeChild(orderItem);
              }
            });
          });
        });
      } else {
        orderList.textContent = "У вас немає замовлень.";
      }  

    });


  const payplace1 = document.getElementById("payplace1")
  const payplace2 = document.getElementById("payplace2")
  const county = document.getElementById("county")
  const lab = document.querySelector(".payplacelab")
  

  newinput.type = ("number")
  newinput2.type = ("number")
  newinput3.type = ("number")
  newinput.id = ("newinput")
  newinput2.id = ("newinput2")
  newinput3.id = ("newinput3")
  newinput.pattern = ("([2-6]([0-9]{3}) ?) (([0-9]{4} ?) {3})")
  newinput2.pattern = ("(0 [1-9] | 1 [0-2]) / ([0-9]{2})")
  newinput3.pattern = ("[0-9]{3}")
  
  newinput.required = ("required")
  newinput2.required = ("required")
  newinput3.required = ("required")
  newinput.placeholder = ("Введіть номер картки")
  newinput2.placeholder = ("cvv")
  newinput3.placeholder = ("Рік")
  newinput.className = ("card")
  newinput2.className = ("cvv")
  newinput3.className = ("year")
  newinput.style.setProperty("margin", "0 3px 0 0");
  newinput2.style.setProperty("margin", "0 3px 0 0");
  newinput3.style.setProperty("margin", "0 3px 0 0");
  newinput2.style.setProperty("width", "30px");
  newinput3.style.setProperty("width", "30px");

  document.querySelector(".form-group").addEventListener("click", function(event) {

    let targetElement = event.target;

    if (targetElement === payplace2) {
    lab.innerHTML = '';
    lab.appendChild(newinput)
    lab.appendChild(newinput2)
    lab.appendChild(newinput3)
    } else if (targetElement === payplace1) {
        lab.innerHTML = '';
        lab.textContent = 'Оплатити карткою';
    }

    
  });

  class Form {
    constructor() {
    this.tdname = document.querySelector(".tdname");
    this.tdsurname = document.querySelector(".tdsurname");
    this.tdsurname2 = document.querySelector(".tdsurname2");
    this.tdnp = document.querySelector(".tdnp");
    this.tdpayplace1 = document.querySelector(".tdpayplace1");
    this.tdpayplace2 = document.querySelector(".tdpayplace2");
    this.tdamount = document.querySelector(".tdamount");
    this.table = document.querySelector("#my-table");
    this.tdpp = document.querySelector(".tdpp");

    this.nameInput = document.getElementById("name")
    this.surnameInput = document.getElementById("surname")
    this.surname2Input = document.getElementById("surname2")
    this.np = document.getElementById("np")
    this.payplace1 = document.getElementById("payplace1");
    this.payplace2 = document.getElementById("payplace2");
    this.amount = document.getElementById("county");
    

    this.mybtndiv = document.getElementById("submit");
    
    
    }

    addInputElement() {
                    
    
        this.nameInput.addEventListener('keyup', (event) => {
             this.tdname.textContent = this.nameInput.value;
             this.tdamount.textContent = this.amount.value;
        });
       
        this.surnameInput.addEventListener('keyup', (event) => {
            this.tdsurname.textContent = this.surnameInput.value;
            this.tdamount.textContent = this.amount.value;
        });

        this.surname2Input.addEventListener('keyup', (event) => {
            this.tdsurname2.textContent = this.surname2Input.value;
            this.tdamount.textContent = this.amount.value;
        });

        this.np.addEventListener('keyup', (event) => {
            this.tdnp.textContent = this.np.value;
            this.tdamount.textContent = this.amount.value;
        });
    
        this.payplace1.addEventListener('click', (event) => {
            this.tdpp.innerHTML = '';
            this.tdpp.textContent = ("Після оплати");
            this.tdpayplace1.innerHTML = '';
            this.tdpayplace1.textContent = ("При отриманні")
            this.tdamount.textContent = this.amount.value;
        });

        this.payplace2.addEventListener('click', (event) => {
          this.tdpp.innerHTML = '';
          this.tdpp.textContent = ("Оплата карткою");
          this.tdpayplace1.innerHTML = '';
          this.tdpayplace1.textContent = ("Оплата карткою")
          this.tdamount.textContent = this.amount.value;
      });

        
       }
}

const form = new Form();

form.addInputElement();



