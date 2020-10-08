import React from "react";
import profile_photo from "./img/volov.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Резюме</h3>
      <div className={"photo"}>
        <img src={profile_photo} width="90%" alt="profile-image" />
      </div>
      <p>
        <span className={"item_title"}>Воловенко Володимир Георгiйович</span>
        <br />
        <span className={"item_title"}>Дата народження:</span> 05.10.1971р.
        <br />
        <span className={"item_title"}>Телефон:</span> +38 063 291 81 17
        <br />
        <span className={"item_title"}>email:</span> vladim884@gmail.com
        <br />
        <span className={"item_title"}>my data:</span>{" "}
        https://vladim884.github.io/github_page/
      </p>
      <div className="rezume_body">
        <div className="item">
          <div className="item_title">Meta:</div>
          <div className="item_body">
            отримати посаду веб-розробника framework ReactJS/Redux
            <br />
            Отримати заробiтну плату 8 тис. гривень
          </div>
        </div>
        <div className="item">
          <div className="item_title">Професiйна дiяльнiсть:</div>
          <div className="item_body">
            Працював адмiном на сайтi iнтернет-видання "Вичерпно"
            {/* <br /> */}
            та контент-менеджером. Знiмав iнтерв`ю у студії, займався
            вiдеомонтажем для продакшен.
            <br />
            Самостsйно провадив у студії зйомку на хромакей.
            <br />
            Через рiк роботи вже отримав 3 мiсце за конкурсну роботу в Україні.
            <br />
            <a
              href="https://internews.ua/opportunity/decentralization-2018"
              target="blank"
            >
              Всеукраїнський конкурс журналістських робіт за участі ОБСЄ в
              Україні.
            </a>
            <br />
            До цього торгував электрообладнанням 18 рокiв. За першi ciм рокiв
            придбав власний магазин.
          </div>
        </div>
        <div className="item">
          <div className="item_title">Досвiд роботи:</div>
          <div className="item_body">
            11.02.19 - 23.07.20 iнтернет-видання "Вичерпно" <br />
            Посада: Оператор вiдеомонтажу.
            <br />
            23.03.1996 - 01.04.2015 Фізична особа-підприємець.
          </div>
        </div>
        <div className="item">
          <div className="item_title">Освiта:</div>
          <div className="item_body">
            Неповна середня. Незакiнчений Донецький Гiрничий технiкум.
          </div>
        </div>
        <div className="item">
          <div className="item_title">Додаткова Освiта:</div>
          <div className="item_body">
            <a
              href="https://assets.htmlacademy.ru/certificates/intensive/26/191011.pdf"
              target="blank"
            >
              Базовий HTML и CSS Сертифiкат з HTML ACADEMY:
            </a>
            <br />
            GeetHub у Черкасах: ReactJS + Frontend.
            <br />
            Git, Redux, Bootstrap-4, Sass, JS, HTML-5, CSS-3, розумію на
            англійській мові технiчну документацiю. <br />
            Rурси англійської мови.Cертифiкат. Вмiю працювати в програмах Photohsop та Premiere Pro CC.
            <br />
            Самостiйно вивчив технологiю виробництва меблiв. Перший виріб -
            велика кухня.
            <br />
            Розробляв меблi на платформi програми PRO-100.
            <br />
          </div>
        </div>
        <div className="item">
          <div className="item_title">Особистi якостi:</div>
          <div className="item_body">
            Постійно вчуся новому. Досягаю поставлених цілей. Легко знаходжу
            спільну мову з людьми, вмію оптимізувати і організувати роботу. Був
            і керівником, і підлеглим, і частиною команди.
            <br />
            <br />
            Давно мріяв працювати в IT, але можливість з'явилася тільки, коли
            став переселенцем.
          </div>
        </div><br />
        <div className="item">
          <div className="item_title">Дата:</div>

          <div className="item_body">___________________ </div>
          <div className="item_title"> Пiдпис:</div>

          <div className="item_body">___________________</div>
        </div>
      </div>
      <button onClick={window.print()}></button>
    </div>
  );
}

export default App;
