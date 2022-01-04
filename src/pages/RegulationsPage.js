import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const RegulationsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="title">
        <h1>!</h1>
        <h2>!</h2>
        <h3>!</h3>

        <h2 data-aos="fade-up">
          regulamin <br />
        </h2>
        <h3>!</h3>
        <h2>!</h2>
        <h1>!</h1>
      </div>
      <div className="content">
        <h2>
          Obsługa Hotel Miodowa wysoko cenić będzie Państwa współpracę w
          przestrzeganiu tego regulaminu, który służyć ma zapewnieniu spokojnego
          i bezpiecznego pobytu naszych gości.
        </h2>
        <h3>
          I ZAMELDOWANIE <br /> <br /> § 1
        </h3>
        <p>1. Apartament w Hotel Miodowa wynajmowany jest na doby.</p>
        <p>
          2. Jeżeli Gość podczas zameldowania nie określił czasu pobytu w
          hotelu, przyjmuje się, że apartament został wynajęty na jedną dobę.
        </p>
        <p>
          3. Doba hotelowa rozpoczyna się od godziny 14:00 i trwa do godziny
          12:00 dnia następnego. Nieopuszczenie apartamentu do godziny 12:00
          oznacza przedłużenie pobytu o kolejną dobę, co jest jednoznaczne z
          koniecznością uiszczenia opłaty za apartament według stawek ujętych w
          cenniku bez gwarancji zostania w apartamencie.
        </p>
        <h3>§ 2</h3>
        <p>
          1. Życzenia przedłużenia pobytu Gość powinien zgłosić w recepcji do
          godz. 9.00.
        </p>
        <p>
          2. Hotel może nie zaakceptować prośby o przedłużenie pobytu z powodu
          braku wolnego apartamentu.
        </p>
        <p>
          3. W celu zameldowania prosimy naszych Gości o przedstawienie
          dokumentu tożsamości ze zdjęciem (tj. dowód osobisty, paszport, prawo
          jazdy) oraz podpisania karty meldunkowej. Opłata za pobyt w
          aparthotelu pobierana jest z góry według cen podanych podczas
          rezerwacji pokoju oraz obowiązującego cennika, w przypadku
          niewykorzystania rezerwacji z przyczyn niezależnych od hotelu zadatek
          wpłacony na poczet konkretnej rezerwacji nie podlega zwrotowi.
          Istnieje możliwość wykorzystania zadatku w innym terminie.
        </p>
        <p>
          4. Potrzeba otrzymania Faktury VAT za pobyt w aparthotelu powinna być
          zgłaszana w momencie meldowania. Może być wystawiona najpóźniej w
          terminie 7 dni od dnia zapłaty (zarówno zadatku jak i należności
          końcowej), termin powyższy ulega wydłużeniu do 3 miesięcy, gdy faktura
          ma być wystawiona na osobę fizyczną nie prowadzącą działalności
          gospodarczej. Po upływie powyższych terminów aparthotel odmówi
          wystawienia faktury.
        </p>
        <p>
          5. W sytuacji gdy zostanie stwierdzone uszkodzenie bądź zniszczenie
          rzeczy powierzonych przez aparthotel, będzie pobierana dodatkowa
          opłata w stosownej wysokości: - klucze do pokoi od 1 do 24 – 150 zł, -
          pościel – 100 zł, - inne - według ceny naprawy lub zakupu nowego
          urządzenia.
        </p>
        <h3>§ 3</h3>
        <p>
          1. Gość hotelowy nie może przekazywać pokoju innym osobom, nawet jeśli
          nie upłynął okres, za który uiścił opłatę.
        </p>
        <p>
          2. Osoby zameldowane w hotelu zapraszające swoich gości powinny o tym
          poinformować pracownika recepcji i ponoszą całkowitą odpowiedzialność
          za ewentualne szkody spowodowane przez nich. Odwiedziny mogą trwać od
          8.00 do 22:00 a goście mieszkający w hotelu powinni dopilnować aby te
          osoby opuściły obiekt do godziny 22.00 . Niedopełnienie tego obowiązku
          może skutkować usunięciem gościa z hotelu przez służbę ochrony.{" "}
        </p>
        <p>
          3. Aparthotel Miodowa może odmówić przyjęcia Gościa, który podczas
          poprzedniego pobytu rażąco naruszył regulamin Aparthotel Miodowa,
          wyrządzając szkodę w mieniu hotelowym, na osobie Gościa, pracowników,
          osób przebywających albo też w inny sposób zakłócił spokój lub
          funkcjonowanie Aparthotelu Miodowa.
        </p>
        <h3>§ 4</h3>
        <p>
          1. Aparthotel Miodowa świadczy usługi zgodnie ze swoją kategorią i
          przyjętym standardem.{" "}
        </p>
        <p>
          2. W przypadku zastrzeżeń dotyczących jakości usług Gość jest proszony
          o jak najszybsze zgłaszanie ich w recepcji.
        </p>
        <h3>
          II PRAWA I OBOWIĄZKI GOŚCI HOTELU <br /> <br />§ 5
        </h3>
        <p>
          1. Na życzenie Gościa Aparthotel Miodowa nieodpłatnie świadczy
          następujące usługi: - udzielenie informacji związanych z pobytem i
          podróżą, - budzenie o zaplanowanej porze, - zamawianie taksówki, -
          wypożyczenie żelazka i deski do prasowania w recepcji.
        </p>
        <h3>§ 6</h3>
        <p>
          1.Za kosztowności, pieniądze, sprzęt elektroniczny oraz inne
          przedmioty pozostawione w apartamencie lub częściach wspólnego użytku
          Aparthotel Miodowa nie ponosi odpowiedzialności, a każda kradzież
          będzie zgłaszana na policję.
        </p>
        <p>
          2. Istnieje możliwość złożenia pieniędzy oraz innych wartościowych
          przedmiotów w depozycie znajdującym się w recepcji, za dodatkową
          opłatą.
        </p>
        <h3>§ 7</h3>
        <p>
          1. Cisza nocna obowiązuje w hotelu od godziny 22.00 do godziny 6.00.{" "}
        </p>
        <p>
          2. Zachowanie osób korzystających z usług hotelu nie powinno zakłócić
          pobytu innych Gości. Aparthotel Miodowa może odmówić dalszego
          świadczenia usług osobie, która naruszyła tę zasadę bez zwrotu
          wpłaconych należności za pobyt .
        </p>
        <h3>§ 8</h3>
        <p>
          1. Każdorazowo Gość opuszczając apartament powinien sprawdzić
          zamknięcie drzwi do swojego apartamentu, a klucze powinien pozostawić
          na recepcji.
        </p>
        <p>
          2. Gość hotelowy ponosi materialną odpowiedzialność za wszelkiego
          rodzaju uszkodzenia, działania lub zaniechania, jak również działania
          osób mu towarzyszących.
        </p>
        <p>
          3. Goście Aparthotelu Miodowa mają prawo do korzystania ze wszystkich
          urządzeń stanowiących wyposażenie poszczególnych apartamentów, tj.
          m.in.z telewizorów, wyposażenia aneksu kuchennego, wyposażenia
          łazienek, a także innych urządzeń znajdujących się w apartamentach.Na
          terenie całego obiektu istnieje możliwość nieodpłatnego korzystania z
          bezprzewodowej sieci Wi-Fi.{" "}
        </p>
        <p>
          4.W hotelu obowiązuje bezwzględny zakaz paleniaw pokojach i częściach
          ogólnodostępnych za wyjątkiem miejsca przeznaczonego do tego celu,
          które to na Państwa życzenie zostanie wskazane przez obsługę Recepcji.
          Złamanie zakazu grozi karą w wysokości 500 zł, a ponadto zostaną
          Państwo obciążeni kosztami odświeżenia pokoju oraz interwencji Straży
          Pożarnej.
        </p>
        <p>
          5. W przypadku odmowy zapłaty kary hotel ma prawo do obciążenia karty
          kredytowej Gościa, a przypadku jej braku do wystawienia faktury za
          nieuiszczoną opłatę.{" "}
        </p>
        <h3>§ 9</h3>
        <p>
          1. Na śniadanie zapraszamyw godzinach od 7:30 do 10:00 dosali
          śniadaniowej Aparthotelu Miodowa, mieszczącej się na poziomie -1. Do
          sali śniadaniowej prosimy przechodzić przez recepcję (winda zjeżdża
          tylko do poziomu 0 ).
        </p>
        <p>
          2. W godzinach wieczornych (19:00 -23:00 lub do ostatniego klienta)
          zapraszamy do drink baru, mieszczącego się również na poziomie -1.
        </p>
        <p>
          3. Prosimy o ostrożność podczas spożywania posiłków w apartamentach, w
          tym picia kawy i innych napojów mogących spowodować zabrudzenie
          pościeli i materacy. W przypadku zabrudzenia wyposażenia pokoi
          wynikającego z nieprzestrzegania powyższych zasad będą Państwo
          obciążeni kosztami czyszczenia, przewidujemy karę w wysokości 300 zł.
        </p>
        <p>
          4. Prosimy również o nie wyrzucanie jakichkolwiek rzeczy przez okno,
          co więcej, zabrania się siadania na parapetach okien ze względów
          niebezpieczeństwa wypadnięcia.
        </p>
        {/* DO SERWISU SPRZĄTAJĄCEGO */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  h4 {
    text-decoration: uppercase;
    font-size: 2rem;
    color: var(--secondaryColor2);
    text-align: center;
    margin: 10vh auto 5vh;
  }
  .title {
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100vw;
    background: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #444;
    h2 {
      color: var(--secondaryColor);
      letter-spacing: 10px;
      text-align: center;
      font-size: 2.8rem;
    }
  }
  .content {
    width: 80vw;
    margin: 15vh auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--textFont);
    h2,
    h3 {
      margin: 5vh auto;
      align-self: center;
      color: var(--secondaryColor2);
      text-align: center;
      font-family: var(--buttonFont);
    }

    p {
      margin: 1vh auto 1vh 0;
      letter-spacing: 1.3;
    }
  }
`;

export default RegulationsPage;
