import React, { useState } from "react";
import Grid from "./components/Grid";
import Button from "./components/UI/Button";
import Block1 from "./components/blocks/Block1";
import Slider from "./components/SliderBox/Slider";
import ContactUs from "./components/ContactUs";
import ExpandableText from "./components/ExpandableText";

function App() {
  // const [text, setText] = React.useState('')
  const [activeBlock, setActiveBlock] = useState('block1');

  const showBlock = (blockName) => {
    setActiveBlock(blockName);
  };

  return (
    <div className="App">
      <div className="header-block">
        <nav>
          <div className="nav-block">
            <div className="logo">
              <img src="./img/vnv-logo.png" alt="logo"/>
            </div>
            <div className="navigation">
              <p>ПОСЛУГИ</p>
              <p>ПОРТБОЛІО</p>
              <p>КОНТАКТИ</p>
            </div>
          </div>
        </nav>

        <div className="header">
          <div className="container">
            <div className="title-block">
              <p className="sub-title">
                VNV Solutions
              </p>
              <p className="title">
              Easy, quality, IT -winning solutions for your business
              </p>
              <Button title={"Замовити"}/>
            </div>
            <div className="pic-block">
              <img src="./img/first-block.png" alt="block"/>
            </div>
          </div>
        </div>
        
      </div>


      <div className="why-block">
        <div className="container">
          <div className="title">
            <span className='slesh'>/</span>Чому ми?
          </div>
          <div className="grid-block">
            <Grid 
                title={'Наші сайти – як магніт для нових клієнтів'}
                image={"./img/icons/dollar.png"}
              />
              <Grid 
                title={'Наші сайти – як магніт для нових клієнтів'}
                image={"./img/icons/dollar.png"}
              />
              <Grid 
                title={'Наші сайти – як магніт для нових клієнтів'}
                image={"./img/icons/dollar.png"}
              />
              <Grid 
                title={'Наші сайти – як магніт для нових клієнтів'}
                image={"./img/icons/dollar.png"}
              />
              <Grid 
                title={'Наші сайти – як магніт для нових клієнтів'}
                image={"./img/icons/dollar.png"}
              />
              <Grid 
                title={'Наші сайти – як магніт для нових клієнтів'}
                image={"./img/icons/dollar.png"}
              />
          </div>
          <Button title={"Замовити"}/>

        </div>
      </div>


      <div className="services-block">
        
            {/* <div className="servives-title">
              <p>Послуги</p>
            </div> */}

          <div className="services-container">
            <div className="navigation-block">
              <div className="select-block">
                <div className="btn-nav" onClick={() => showBlock('block1')}><p>Software Development</p></div>
                <div className="btn-nav" onClick={() => showBlock('block2')}><p>Development ERP SYSTEM</p></div>
                <div className="btn-nav" onClick={() => showBlock('block3')}><p>Online-Store
Development</p></div>
                <div className="btn-nav" onClick={() => showBlock('block4')}><p>Показати блок 4</p></div>
                <div className="btn-nav" onClick={() => showBlock('block5')}><p>Показати блок 5</p></div>
                <div className="btn-nav" onClick={() => showBlock('block6')}><p>Показати блок 6</p></div>
              </div>
              

              {/* Отображение активного блока */}
              <div className="visible-blocks">
                {activeBlock === 'block1' 
                && <Block1 
                title="SOFTWARE
                DEVELOPMENT" 
                description="Our software is aiming to solve your business problems and meet specific business needs. Our experienced team can develop software for a wide range of industries and applications, especially agriculture, finance, healthcare, and logistics, among others."
                img="./img/illustrations/illustration-1.jpg"

                d1='-Qualitatively'
                d2='-Fast'
                d3='-Promising'
                />}
                {activeBlock === 'block2' && 
                <Block1 
                title="Величезне поле для креативу" 
                description="Ви можете використати будь-яку кількість сторінок для того, щоб розповісти про свій бізнес, показати свій продукт, презентувати компанію або просто поділитись корисною інформацією"
                img="./img/illustrations/illu-2.jpg"
                />}
                {activeBlock === 'block3' && 
                <Block1 
                title="Cайт для бізнесу, який дозволить користувачам зробити замовлення у будь-який час" 
                description="Каталог, зручна фільтрація, особистий кабінет і продуманий до деталей інтерфейс точно збільшать кількість ваших клієнтів"
                img="./img/illustrations/illu-3.jpg"
                />}
              </div>
            </div>
          </div>
      <div>

    </div>
      </div>

      <Slider />
      

      {/* CONTACT US BLOCK */}

    <ContactUs />

    
        <div className="brief-form">
            <h2><span className="slesh">/</span>Заповнення брифу</h2>
            <div className="brief-block">
              <img src="./img/brief-illu.jpg"/>
              <p>
                  Бриф - це документ, що містить інформацію про ваші потреби та вимоги щодо проекту.
                  Він допомагає нам зрозуміти ваші очікування та почати спільну роботу.
              </p>
            </div>
            
            <div className="brief-btn">
              <Button title={"Оформити"}/>
            </div>
        </div>

        {/* FAQ */}
        <div className="faq">
          <div className="container">
            <div className="faq-block">
              <div className="title">
                <span className="slesh">/</span>FAQ
              </div>
              <div className="description">

                <span>*</span>FAQ - це абревіатура від "Frequently Asked Questions" (Часто Задавані Питання). Це розділ, де надаються відповіді на часто задавані питання, спрощуючи пошук інформації для користувачів та клієнтів. 
                
                
              </div>
            </div>

            <div className="questions">
              <div className="expandable-text">
                <ExpandableText title={'Як проводиться оплата?'}
                description={'Повна передплата та поетапна передплата..'}/>
              </div>
              <div className="expandable-text">
                <ExpandableText title={'Чи можна допрацювати вже наявний сайт?'}
                description={'Ні, лише створити сайт з нуля. Наявний сайт можна використати як приклад для дизайну.'}/>
              </div>
              <div className="expandable-text">
                <ExpandableText title={'Чи можна повернути кошти після оплати?'}
                description={'Так, можна.'}/>
              </div>
              
            </div>
          </div>
        </div>

        
        {/* Social networks */}
        <footer className="footer">
          <div className="container">
            <div className="loction">
              <p>Karla Miklʹosha, 7</p>
              <p>Lviv, Ukraine</p>
            </div>
            <div className="social-media-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./net/facebook.png"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./net/instagram.png"/>
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./net/tik-tok.png"/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./net/linkedin.png"/>
                </a>
            </div>
          </div>
        </footer>


    </div>
  );
}

export default App;
