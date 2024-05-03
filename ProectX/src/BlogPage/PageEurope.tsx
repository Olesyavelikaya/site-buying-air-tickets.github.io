import { ScrollRestoration } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { NavbarHeader } from "../component/Navbar/Navbar";
import { ButtonUp } from "./ButtonUp";
import "./BlogPage.scss";

function PageEurope() {
  return (
    <div className="main-container_pageBlog">
      <ScrollRestoration />
      <div className="container-bg-navbar">
        <NavbarHeader />
      </div>
      <Container>
        <ul>
          <h1>
            Пять супер-романтических поездок по Европе для двоих <br />
            От водных прогулок по островам Греции до пеших походов в Шотландии
          </h1>
          <p>
            Романтика Европы притягательна. И это не удивительно: ее ландшафт
            богат сказочными замками, уютными ресторанчиками, величественными
            пейзажами и бесконечными мощеными улочками. Даже если не брать в
            расчет романтическую атмосферу, многочисленные туристические
            направления Европы зачастую предлагают совместить в одной поездке
            все самое лучшее, например расслабляющий пляжный отдых и оживленную
            городскую жизнь. <br />
            Этот континент открывает бескрайние возможности для путешествий
            вдвоем. Мы выбрали пять направлений, которые понравятся любой паре.{" "}
          </p>
          <h4>Наслаждайтесь историей, культурой и винами Тосканы </h4>
          <p>
            Пейзажи Тосканы всегда навевают романтические чувства, особенно
            учитывая здешнее обилие солнца и вина. Флоренция славится богатой
            культурой и великолепной кухней. Отправляйтесь в Академию изящных
            искусств посмотреть на статую Давида и в галерею Уффицы полюбоваться
            на "Рождение Венеры", а затем поужинайте в ресторане Gucci Osteria,
            который возглавляет обладатель трех звезд Мишлен шеф-повар Массимо
            Боттура — и все это за один день. Полюбуйтесь терракотовыми фасадами
            в окрестностях Сиены, где дважды в год проводятся скачки на площади
            Пьяцца-дель-Кампо XIII века в форме раковины. Чтобы сбежать от
            толпы, отправляйтесь на остров Эльба. Любители поплавать смогут
            искупаться в чистейших водах, любители пеших прогулок — исследовать
            тропы с видом на Средиземное море, а любители истории — побывать в
            музее Палаццина дей Мулини, резиденции Наполеона во время его ссылки
            на острове. Вернемся на материк. Тоскана может похвастать десятками
            виноградников, в том числе прибрежным Терре-дель-Маркезато в
            Больгери, к которому ведет аллея из 400-летних кипарисов;
            расположенным в самом сердце Тосканы современным предприятием
            Антинори, известным своим Кьянти Классико; и менее посещаемой
            винодельней Монтекукко, расположенной на склонах горы Монте Амиата.
          </p>
          <h6>Где остановиться</h6>
          <p>
            Забронируйте номер в COMO Castello del Nero — отеле класса люкс,
            построенном в XII веке и специализирующемся на оздоровительных
            процедурах. За Ваше внимание будут соперничать фрески эпохи
            Возрождения и виды с холмов на территорию поместья площадью 740
            акров. А в мишленовском ресторане La Torre подадут оригинальные
            блюда итальянской кухни. В спа-центре COMO Shambhala Retreat
            применяется холистический подход к индивидуальным процедурам, а
            занятия йогой и пилатесом проходят на фоне ухоженных садов,
            вдохновленных французским дизайном.{" "}
          </p>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/69/4b/73/caption.jpg"
            alt="Пьенца, Италия"
            className="img-pageBlog"
          />

          <h4>Исследуйте мистические пейзажи Шотландского нагорья</h4>
          <p>
            Многие поколения писателей, артистов, поэтов и художников находили
            вдохновение в неземной красоте Шотландского нагорья. Стартовав из
            Инвернесса, путешественники могут отправиться в поход по
            разнообразным пешеходным тропам, пересекающим зеленеющие ландшафты,
            в том числе на 1,5-часовую прогулку по петляющей тропе вокруг
            полуострова Шилдейг или по более напряженному, многодневному
            маршруту вокруг Фишерфилдского леса, территории, называемой "Великой
            дикой местностью". По всему региону разбросаны почти 50 заводов по
            производству виски, и любителям этого спиртного напитка стоит
            отправиться на дегустационную экскурсию в такие места, как
            "Глентаррит", старейшую в регионе винокурню, построенную в 1775
            году, или на неизменно популярный завод "Гленморанджи". Сытные
            шотландские блюда в уютных ресторанчиках — идеальное противоядие от
            зачастую холодной погоды Высокогорья. Свидетельством тому служит The
            Struy Inn, загородный ресторан, построенный в XIX веке, где можно
            провести восхитительный вечер у дровяного камина, наслаждаясь
            шотландской дичью и струящимся виски.{" "}
          </p>
          <h6>Где остановиться</h6>
          <p>
            Отель The Torridon расположен в охотничьем домике XIX века в стиле
            загородного шотландского поместья, с пылающими каминами и видом на
            угрюмые горы из песчаника и бесконечные сосновые леса. В ресторане
            1887 на территории отеля имеется обеденный зал, отделанный сосновыми
            панелями, который служит прекрасным фоном для дегустации блюд из
            местной дичи и морепродуктов из изысканного меню. В отеле Вам могут
            организовать такие мероприятия, как катание на горных велосипедах с
            гидом, стрельба по глиняным голубям или стрельба из лука.{" "}
          </p>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/69/4e/06/caption.jpg"
            alt="Гленко, Шотландия"
            className="img-pageBlog"
          />

          <h4>Отправляйтесь в путешествие по островам Греции</h4>
          <p>
            Выбор островов, на которых стоит побывать, может оказаться непростым
            — обитаемыми здесь считаются 227 островов. Вы не ошибетесь, если
            остановитесь на нескольких из них, которые, в зависимости от Ваших
            интересов, идеально подходят для романтического отдыха. Для начала
            стоит посетить Миконос — центр вечеринок с оживленными клубами на
            каждом пляже. В гламурном баре Jackie O' Mykonos в пляжном клубе
            Super Paradise Beach подают коктейли на основе шампанского, а в баре
            клуба Soho House Scorpio атмосфера более непринужденная, на закате,
            до того как диджей начнет играть свои сеты, здесь устраивают
            медитации. Если Вы в поисках особого места только для двоих,
            островСанторини с его потрясающими закатами и уютными ресторанчиками
            станет идеальным вариантом. Отправляйтесь в ресторан Roka, который
            расположен на террасе на вершине скалы с видом на бескрайнее море.
            Остров Крит, в свою очередь, славится своими спа-курортами: в Blue
            Palace Вам предложат меню из оздоровительных процедур и уединенные
            люксы с личными панорамными бассейнами. Но чтобы полностью
            отдохнуть, отправляйтесь на остров Гидра, где нет автомобилей, а
            люди передвигаются пешком или на осликах. Каждый уголок острова
            кажется далеким от остального мира: от причудливых тратторий, таких
            как Il Casta, до тихих пляжей, таких как Влихос, где отдыхающие
            дремлют в шезлонгах под соломенными зонтиками. Эти безграничные
            средиземноморские пейзажи заставят вашу пару почувствовать себя
            единственными людьми в мире
          </p>
          <h6>Где остановиться</h6>
          <p>
            Тихий Four Seasons Hydra — райский уголок с нависающими над
            территорией курорта соснами. Люксы в минималистском стиле и теплых
            тонах, собственный сад, а также веранда с камином и видом на море
            придают этому месту романтический акцент.{" "}
          </p>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/69/50/2c/caption.jpg"
            alt="Пляж Навайо, Греция"
            className="img-pageBlog"
          />
          <h4>Отправляйтесь в поездку по побережью Испании </h4>
          <p>
            Благодаря постоянно светящему солнцу, впечатляющим пейзажам и
            завораживающей истории, встречающей Вас на каждом шагу, поездка по
            югу Испании занимает первое место в списке самых романтических
            путешествий на колесах. В Гранаде у подножья гор Сьерра-Невада
            находится Альгамбра с ее поражающими воображение дворцами на
            вершинах холмов, зеркальными бассейнами и зеленеющими садами.
            Примерно в двух часах езды отсюда, в Кордове, можно наблюдать все
            великолепие Андалусии, в постройках которой преобладают элементы
            римской и исламской архитектуры — например, в Римском мосте через
            реку Гвадалквививир или в соборе Мескита, ранее служившим мечетью,
            которые сегодня внесены в список объектов Всемирного наследия
            ЮНЕСКО. В Севилье, в полутора часах езды от Кордовы, где соседствуют
            бои быков и фламенко, царит особая чувственная атмосфера. Еще больше
            археологических памятников находится в прибрежном Кадисе, одном из
            старейших непрерывно населенных городов Европы, который расположен в
            полутора часах езды к западу от Севильи. Обязательно осмотрите 100
            сторожевых башен, которые когда-то использовались для наблюдения за
            прибывающими кораблями.{" "}
          </p>
          <h6>Где остановиться</h6>
          <p>
            В отеле Sacristia de Santa Ana в Севилье хранятся такие причудливые
            детали, как мебель, расписанная вручную пасторальными сценами и
            обтянутая тканью туаль де жуи. Оцените такие мельчайшие детали, как
            силуэты звезд, вырезанные на потолке, и воспользуйтесь преимуществом
            удобного расположения отеля в центре города.
          </p>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/69/54/32/caption.jpg?"
            alt="Альгамбра и Альбайсин в Гранаде, Испания"
            className="img-pageBlog"
          />

          <h4>Прогуляйтесь по винодельческому району Бордо </h4>
          <p>
            Бордо пьянит по-разному. Помимо славы винодельческой столицы, этот
            регион может похвастать такими архитектурными шедеврами, как
            Биржевая площадь, чудесами природы вроде Общественного сада XVIII
            века в английском стиле и роскошными мишленовскими ресторанами,
            такими как Le Pavillon des Boulevards. Но главное, чем притягивают
            эти места, — это, конечно же, винодельни. Здесь сложно ошибиться с
            выбором, но к двум основным достопримечательностям можно отнести
            винодельню Шато д'Агассак, с ее сказочным замком XIII века и ужинами
            с дегустацией вин, и винодельню Шато ля Доминик и ее винный погреб,
            спроектированный архитектором Жаном Нувелем. На верхнем этаже
            поместья, в ресторане La Terrasse Rouge, можно насладиться красными
            винами винами на основе мерло, блюдами богатой французской кухни и
            потрясающими видами.{" "}
          </p>
          <h6>Где остановиться</h6>
          <p>
            Особенно ярко романтика Бордо проявляется в отеле InterContinental
            Bordeaux Le Grand Hotel. Номера этого исторического здания 1920-х
            годов, испытавшего влияние неоклассицизма и декаданса, оформлены в
            насыщенных ярких тонах, мебель из красного дерева изобилует
            позолотой, а из окон открываются виды на такие архитектурные
            памятники, как Большой театр Бордо. Изюминкой отеля является
            бассейн, выполненный в стиле римского грота, с колоннами красного,
            синего и золотого цветов, добавляющих ему великолепия, и головой
            мифологического существа, извергающей струю воды.{" "}
          </p>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/69/55/91/caption.jpg"
            alt="Монтань-де-Реймс, Франция"
            className="img-pageBlog"
          />
        </ul>
      </Container>
      <ButtonUp />
    </div>
  );
}

export { PageEurope };