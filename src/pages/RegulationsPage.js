import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const RegulationsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <div className="title">
        <h1>!</h1>
        <h2>!</h2>
        <h3>!</h3>

        <h2 data-aos="fade-up">
          {polish ? "regulamin" : "regulations"} <br />
        </h2>
        <h3>!</h3>
        <h2>!</h2>
        <h1>!</h1>
      </div>
      {polish ? (
        <div className="content">
          <h2>
            Obsługa Hotel Miodowa wysoko cenić będzie Państwa współpracę w
            przestrzeganiu tego regulaminu, który służyć ma zapewnieniu
            spokojnego i bezpiecznego pobytu naszych gości.
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
            koniecznością uiszczenia opłaty za apartament według stawek ujętych
            w cenniku bez gwarancji zostania w apartamencie.
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
            dokumentu tożsamości ze zdjęciem (tj. dowód osobisty, paszport,
            prawo jazdy) oraz podpisania karty meldunkowej. Opłata za pobyt w
            aparthotelu pobierana jest z góry według cen podanych podczas
            rezerwacji pokoju oraz obowiązującego cennika, w przypadku
            niewykorzystania rezerwacji z przyczyn niezależnych od hotelu
            zadatek wpłacony na poczet konkretnej rezerwacji nie podlega
            zwrotowi. Istnieje możliwość wykorzystania zadatku w innym terminie.
          </p>
          <p>
            4. Potrzeba otrzymania Faktury VAT za pobyt w aparthotelu powinna
            być zgłaszana w momencie meldowania. Może być wystawiona najpóźniej
            w terminie 7 dni od dnia zapłaty (zarówno zadatku jak i należności
            końcowej), termin powyższy ulega wydłużeniu do 3 miesięcy, gdy
            faktura ma być wystawiona na osobę fizyczną nie prowadzącą
            działalności gospodarczej. Po upływie powyższych terminów aparthotel
            odmówi wystawienia faktury.
          </p>
          <p>
            5. W sytuacji gdy zostanie stwierdzone uszkodzenie bądź zniszczenie
            rzeczy powierzonych przez aparthotel, będzie pobierana dodatkowa
            opłata w stosownej wysokości: - klucze do pokoi od 1 do 24 – 150 zł,
            - pościel – 100 zł, - inne - według ceny naprawy lub zakupu nowego
            urządzenia.
          </p>
          <h3>§ 3</h3>
          <p>
            1. Gość hotelowy nie może przekazywać pokoju innym osobom, nawet
            jeśli nie upłynął okres, za który uiścił opłatę.
          </p>
          <p>
            2. Osoby zameldowane w hotelu zapraszające swoich gości powinny o
            tym poinformować pracownika recepcji i ponoszą całkowitą
            odpowiedzialność za ewentualne szkody spowodowane przez nich.
            Odwiedziny mogą trwać od 8.00 do 22:00 a goście mieszkający w hotelu
            powinni dopilnować aby te osoby opuściły obiekt do godziny 22.00 .
            Niedopełnienie tego obowiązku może skutkować usunięciem gościa z
            hotelu przez służbę ochrony.{" "}
          </p>
          <p>
            3. Aparthotel Miodowa może odmówić przyjęcia Gościa, który podczas
            poprzedniego pobytu rażąco naruszył regulamin Aparthotel Miodowa,
            wyrządzając szkodę w mieniu hotelowym, na osobie Gościa,
            pracowników, osób przebywających albo też w inny sposób zakłócił
            spokój lub funkcjonowanie Aparthotelu Miodowa.
          </p>
          <h3>§ 4</h3>
          <p>
            1. Aparthotel Miodowa świadczy usługi zgodnie ze swoją kategorią i
            przyjętym standardem.{" "}
          </p>
          <p>
            2. W przypadku zastrzeżeń dotyczących jakości usług Gość jest
            proszony o jak najszybsze zgłaszanie ich w recepcji.
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
            przedmioty pozostawione w apartamencie lub częściach wspólnego
            użytku Aparthotel Miodowa nie ponosi odpowiedzialności, a każda
            kradzież będzie zgłaszana na policję.
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
            2. Zachowanie osób korzystających z usług hotelu nie powinno
            zakłócić pobytu innych Gości. Aparthotel Miodowa może odmówić
            dalszego świadczenia usług osobie, która naruszyła tę zasadę bez
            zwrotu wpłaconych należności za pobyt .
          </p>
          <h3>§ 8</h3>
          <p>
            1. Każdorazowo Gość opuszczając apartament powinien sprawdzić
            zamknięcie drzwi do swojego apartamentu, a klucze powinien
            pozostawić na recepcji.
          </p>
          <p>
            2. Gość hotelowy ponosi materialną odpowiedzialność za wszelkiego
            rodzaju uszkodzenia, działania lub zaniechania, jak również
            działania osób mu towarzyszących.
          </p>
          <p>
            3. Goście Aparthotelu Miodowa mają prawo do korzystania ze
            wszystkich urządzeń stanowiących wyposażenie poszczególnych
            apartamentów, tj. m.in.z telewizorów, wyposażenia aneksu kuchennego,
            wyposażenia łazienek, a także innych urządzeń znajdujących się w
            apartamentach.Na terenie całego obiektu istnieje możliwość
            nieodpłatnego korzystania z bezprzewodowej sieci Wi-Fi.{" "}
          </p>
          <p>
            4.W hotelu obowiązuje bezwzględny zakaz paleniaw pokojach i
            częściach ogólnodostępnych za wyjątkiem miejsca przeznaczonego do
            tego celu, które to na Państwa życzenie zostanie wskazane przez
            obsługę Recepcji. Złamanie zakazu grozi karą w wysokości 500 zł, a
            ponadto zostaną Państwo obciążeni kosztami odświeżenia pokoju oraz
            interwencji Straży Pożarnej.
          </p>
          <p>
            5. W przypadku odmowy zapłaty kary hotel ma prawo do obciążenia
            karty kredytowej Gościa, a przypadku jej braku do wystawienia
            faktury za nieuiszczoną opłatę.{" "}
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
            3. Prosimy o ostrożność podczas spożywania posiłków w apartamentach,
            w tym picia kawy i innych napojów mogących spowodować zabrudzenie
            pościeli i materacy. W przypadku zabrudzenia wyposażenia pokoi
            wynikającego z nieprzestrzegania powyższych zasad będą Państwo
            obciążeni kosztami czyszczenia, przewidujemy karę w wysokości 300
            zł.
          </p>
          <p>
            4. Prosimy również o nie wyrzucanie jakichkolwiek rzeczy przez okno,
            co więcej, zabrania się siadania na parapetach okien ze względów
            niebezpieczeństwa wypadnięcia.
          </p>
          {/* DO SERWISU SPRZĄTAJĄCEGO */}
        </div>
      ) : (
        <div className="content">
          <h2>
            The staff of Hotel Miodowa will highly appreciate your cooperation
            in compliance with these regulations, which is to ensure peace and
            the safe stay of our guests.
          </h2>
          <h3>
            AND CHECK-IN <br /> <br /> § 1
          </h3>
          <p> 1. The apartment at Hotel Miodowa is rented for days. </p>
          <p>
            2. If the Guest did not specify the time of stay at check-in hotel,
            it is assumed that the apartment has been rented for one day.
          </p>
          <p>
            3. The hotel day starts at 2 p.m. and lasts until one hour 12:00 the
            next day. Not leaving the apartment until 12:00 means extending the
            stay by another day, which is synonymous with the necessity to pay
            the fee for the apartment according to the rates included in in the
            price list without a guarantee of staying in the apartment.
          </p>
          <h3> § 2 </h3>
          <p>
            1. Wishes to extend the stay, the Guest should report to the
            reception desk time. 9.00 a.m.
          </p>
          <p>
            2. The hotel may not accept the request to extend the stay for any
            reason lack of a free apartment.
          </p>
          <p>
            3. In order to check in, we ask our guests to present photo ID (i.e.
            ID card, passport, law driving) and signing the registration card.
            Fee for staying in the aparthotel is charged in advance according to
            the prices quoted during booking a room and the applicable price
            list, in the case of failure to use the reservation for reasons
            beyond the control of the hotel, a down payment paid for a specific
            reservation is not refundable. It is possible to use the deposit at
            a different date.
          </p>
          <p>
            4. The need to receive a VAT invoice for the stay at the aparthotel
            should be reported upon check-in. It can be issued at the latest in
            within 7 days from the date of payment (both the deposit and the
            amount due final), the above period is extended to 3 months when the
            invoice is to be issued to a natural person who does not conduct
            business economic. After the above-mentioned deadlines, the
            aparthotel will refuse issuing an invoice.
          </p>
          <p>
            5. When damage or destruction is found items entrusted by the
            aparthotel will be charged extra an appropriate fee: - room keys
            from 1 to 24 - PLN 150, - bed linen - PLN 100, - other - according
            to the price of repair or purchase of a new one devices.
          </p>
          <h3> § 3 </h3>
          <p>
            1. The hotel guest may not transfer the room to other people, even
            if the period for which the fee has been paid has not expired.
          </p>
          <p>
            2. Persons registered at the hotel inviting their guests should
            inform about it inform the receptionist and are fully responsible
            for any damage caused by them. Visits may last from 8.00 a.m. to
            10.00 p.m. and guests staying at the hotel should make sure that
            these people left the facility by 22.00. Failure to do so may result
            in the removal of the guest from the hotel by the security service.{" "}
            {""}
          </p>
          <p>
            3. Aparthotel Miodowa may refuse to accept a Guest who during of the
            previous stay, grossly violated the regulations of Aparthotel
            Miodowa, causing damage to hotel property, the Guest, employees,
            people staying or otherwise disturbed the peace or functioning of
            Aparthotel Miodowa.
          </p>
          <h3> § 4 </h3>
          <p>
            1. Aparthotel Miodowa provides services in accordance with its
            category and accepted standard. {""}
          </p>
          <p>
            2. In the event of reservations regarding the quality of services,
            the Guest is requested o reporting them at the reception as soon as
            possible.
          </p>
          <h3>
            II RIGHTS AND DUTIES OF HOTEL GUESTS <br /> <br /> § 5
          </h3>
          <p>
            1. At the Guest's request, Aparthotel Miodowa provides free services
            the following services: - providing information related to the stay
            i travel, - wake up at the scheduled time, - ordering a taxi, -
            rental of an iron and ironing board at the reception.
          </p>
          <h3> § 6 </h3>
          <p>
            1.For valuables, money, electronic equipment and more items left in
            the apartment or shared areas Aparthotel Miodowa is not responsible
            for any theft will be reported to the police.
          </p>
          <p>
            2. It is possible to deposit money and other valuable items items in
            the deposit at the reception, for an additional fee fee.
          </p>
          <h3> § 7 </h3>
          <p>
            1. The curfew is valid in the hotel from 10.00 p.m. to 6.00 a.m.{" "}
            {""}
          </p>
          <p>
            2. The behavior of people using the hotel services should not
            disturb you stay of other guests. Aparthotel Miodowa may refuse to
            continue providing services to a person who has breached this rule
            without return paid fees for the stay.
          </p>
          <h3> § 8 </h3>
          <p>
            1. Each time the Guest leaves the apartment, he should check it
            close the door to his apartment, and he should leave the keys at the
            reception.
          </p>
          <p>
            2. The hotel guest is financially responsible for all the nature of
            the damage, act or omission, as well as the action people
            accompanying him.
          </p>
          <p>
            3. Guests of Aparthotel Miodowa have the right to use all of them
            devices constituting the equipment of individual apartments, i.e.
            e.g. from televisions, kitchenette equipment, equipment bathrooms,
            as well as other devices located in the apartments there is a
            possibility of free use of the entire facility wireless Wi-Fi
            network. {""}
          </p>
          <p>
            4. There is an absolute ban on smoking in the hotel rooms and parts
            generally accessible, except for the place intended for this
            purpose, which, at your request, will be indicated by the reception
            staff. Breaking the ban may result in a fine of PLN 500, and they
            will also be punished The state was charged with the costs of
            refreshing the room and the intervention of the Guard Fire.
          </p>
          <p>
            5. In the event of a refusal to pay the penalty, the hotel has the
            right to charge the card the Guest's credit card, and in the event
            of its failure to issue an invoice unpaid fee. {""}
          </p>
          <h3> § 9 </h3>
          <p>
            1. We invite you to breakfast from 7:30 to 10:00 am breakfast bar of
            Aparthotel Miodowa, located on level -1. Down the breakfast room,
            please go through the reception (the elevator goes down only to
            level 0).
          </p>
          <p>
            2. In the evening hours (19:00 - 23:00 or until the last customer)
            we invite you to a drink bar, also located on level -1.
          </p>
          <p>
            3. Please be careful when eating in the apartments, in including
            drinking coffee and other beverages that may dirty bedding and
            mattresses. In case of contamination of the room equipment resulting
            from non-compliance with the above rules, you will burdened with the
            costs of cleaning, we expect a fine of PLN 300.
          </p>
          <p>
            4. We also ask you not to throw anything out of the window,
            Moreover, it is forbidden to sit on the window sills for reasons
            danger of falling out.
          </p>
          {/* DO SERWISU SPRZĄTAJĄCEGO */}
        </div>
      )}
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
    @media screen and (max-width: 800px) {
      h1:nth-of-type(2) {
        display: none;
      }

      h2:nth-of-type(3) {
        display: none;
      }
      h3:nth-of-type(2) {
        display: none;
      }
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.8rem;
        letter-spacing: 5px;
      }
      h3 {
        font-size: 1.8rem;
      }
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
