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
            hotelu pobierana jest z góry według cen podanych podczas rezerwacji
            pokoju oraz obowiązującego cennika, w przypadku niewykorzystania
            rezerwacji z przyczyn niezależnych od hotelu zadatek wpłacony na
            poczet konkretnej rezerwacji nie podlega zwrotowi. Istnieje
            możliwość wykorzystania zadatku w innym terminie.
          </p>
          <p>
            4. Potrzeba otrzymania Faktury VAT za pobyt w hotelu powinna być
            zgłaszana w momencie meldowania.
          </p>
          <p>
            5. W sytuacji gdy zostanie stwierdzone uszkodzenie bądź zniszczenie
            rzeczy powierzonych przez hotel, będzie pobierana dodatkowa opłata w
            stosownej wysokości: - klucze do pokoi od 1 do 24 – 150 zł, -
            pościel – 100 zł, - inne - według ceny naprawy lub zakupu nowego
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
            3. Hotel Miodowa może odmówić przyjęcia Gościa, który podczas
            poprzedniego pobytu rażąco naruszył regulamin Hotel Miodowa,
            wyrządzając szkodę w mieniu hotelowym, na osobie Gościa,
            pracowników, osób przebywających albo też w inny sposób zakłócił
            spokój lub funkcjonowanie Hotelu Miodowa.
          </p>
          <h3>§ 4</h3>
          <p>
            1. Hotel Miodowa świadczy usługi zgodnie ze swoją kategorią i
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
            1. Na życzenie Gościa Hotel Miodowa nieodpłatnie świadczy
            następujące usługi: - udzielenie informacji związanych z pobytem i
            podróżą, - budzenie o zaplanowanej porze, - zamawianie taksówki, -
            wypożyczenie żelazka i deski do prasowania w recepcji.
          </p>
          <h3>§ 6</h3>
          <p>
            1. Za kosztowności, pieniądze, sprzęt elektroniczny oraz inne
            przedmioty pozostawione w apartamencie lub częściach wspólnego
            użytku Hotel Miodowa nie ponosi odpowiedzialności, a każda kradzież
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
            2. Zachowanie osób korzystających z usług hotelu nie powinno
            zakłócić pobytu innych Gości. Hotel Miodowa może odmówić dalszego
            świadczenia usług osobie, która naruszyła tę zasadę bez zwrotu
            wpłaconych należności za pobyt .
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
            3. Goście Hotelu Miodowa mają prawo do korzystania ze wszystkich
            urządzeń stanowiących wyposażenie poszczególnych apartamentów, tj.
            m.in.z telewizorów, wyposażenia aneksu kuchennego, wyposażenia
            łazienek, a także innych urządzeń znajdujących się w apartamentach.
            Na terenie całego obiektu istnieje możliwość nieodpłatnego
            korzystania z bezprzewodowej sieci Wi-Fi.{" "}
          </p>
          <p>
            4. W hotelu obowiązuje bezwzględny zakaz palenia w pokojach i
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
            śniadaniowej Hotelu Miodowa, mieszczącej się na poziomie -1. Do sali
            śniadaniowej prosimy przechodzić przez recepcję (winda zjeżdża tylko
            do poziomu 0 ).
          </p>
          <p>
            2. W godzinach wieczornych (19:00 -23:00 lub do ostatniego klienta)
            zapraszamy do drink baru, mieszczącego się na poziomie 0.
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
          <h3>
            III SERWIS SPRZĄTAJĄCY <br /> <br />§ 10
          </h3>
          <p>
            1. Sprzątanie pokoi, w których przebywają Goście dłużej niż 1 dobę,
            odbywa się codziennie DO GODZINY 14:00.
          </p>
          <p>
            2. Serwis sprzątający obejmuje: wyrzucanie śmieci, sprzątanie
            łazienki, ścielenie łóżek.
          </p>
          <p>
            3. Serwis sprzątający NIE obejmuje natomiast mycia naczyń oraz
            sprzątania osobistych rzeczy Gości (dotyczy rzeczy pozostawionych na
            łóżkach, sofach, stołach, łazience, podłodze).
          </p>
          <p>
            4. Ręczniki wymieniane są na czyste po trzeciej dobie pobytu chyba,
            że Gość poprosi o wcześniejszą wymianę. Pościel natomiast jest
            wymieniana tylko podczas długich pobytów (powyżej 7 dni) po czwartej
            dobie pobytu.
          </p>
          <h3>§ 11</h3>
          <p>
            1. Pod nieobecność Gości w apartamencie pracownik Hotelu Miodowa
            może wejść do pokoju w celu posprzątania lub naprawienia usterki.
            Jeżeli Państwo sobie tego nie życzą, proszę o tym poinformować
            pracownika recepcji podczas meldowania lub poprzez wywieszenie
            specjalnej zawieszki NIE PRZESZKADZAĆ, która znajduje się w
            apartamencie.
          </p>
          <h3>§ 12</h3>
          <p>
            1. Przedmioty osobistego użytku pozostawione przez wyjeżdżającego
            Gościa w apartamencie hotelowym mogą zostać odesłane na życzenie
            Gościa pod wskazany adres.{" "}
          </p>
          <p>
            2. W przypadku nie otrzymania takiej dyspozycji Hotel Miodowa
            przechowa przedmioty przez okres 3 miesięcy od dnia wymeldowania.
            Powyższa zasada nie dotyczy produktów spożywczych, które są
            wyrzucane zaraz po wyjeździe gościa.{" "}
          </p>
          <h3>§ 13</h3>
          <p>
            1. Obsługa Hotelu Miodowa ma prawo do usunięcia osób niestosujących
            się do regulaminu i zakłócających porządek i spokój pobytu innych
            Gości hotelu. W takiej sytuacji uprzednio uiszczone opłaty za nocleg
            nie podlegają zwrotowi.
          </p>
          <p>
            2. Zabrania się przenoszenia wyposażenia pokoi bez zgody recepcji
            bądź innej osoby z obsługi.
          </p>
          <p>
            3. Każda osoba zameldowana w hotelu posiada na własny użytek zestaw
            kluczy, który ma być zwrócony w momencie wymeldowania.
          </p>
          <p>
            4. Podczas składania zamówień u dostawców, np. pizza itp., proszę
            pamiętać o tym, aby poinformować dostawcę o numerze pokoju.
          </p>
          <p>
            5. Goście hotelu są zobowiązani do zapoznania się z instrukcją
            przeciwpożarową oraz do jej przestrzegania.
          </p>
          <p>6. Części wspólne hotelu są całodobowo monitorowane.</p>
          <h3>
            IV OSOBY NIELETNIE <br /> <br />§ 14
          </h3>
          <p>
            1. Wszystkie osoby nieletnie przebywające w Hotelu Miodowa muszą
            znajdować się pod opieką odpowiedzialnej za nich osoby dorosłej.
          </p>
          <p>
            2. Podczas pobytu w Hotelu Miodowa osobom poniżej 18 lat nie wolno
            spożywać alkoholu.
          </p>
          <h3>
            V GRUPY <br /> <br />§ 15
          </h3>
          <p>
            1. Grono osób liczące powyżej 20 członków jest uważane za GRUPĘ.
          </p>
          <p>
            2. Opiekun grupy ponosi całkowitą odpowiedzialność za grupę podczas
            jej pobytu w Hotelu Miodowa, jak również za ewentualne zniszczenie
            mienia hotelowego.
          </p>
          <p>
            3. Przy zameldowaniu w hotelu opiekun grupy powinien przedstawić
            pełną listę uczestników, podając ich imiona i nazwiska, datę
            urodzin, miejsce zamieszkania, numer dokumentu stwierdzającego
            tożsamość.
          </p>
          <p>
            4. Opiekun zobowiązany jest do podanie numeru telefonu kontaktowego
            do siebie jak również do pozostałych opiekunów.
          </p>
          <p>
            5. Po zameldowaniu grupy opiekun powinien złożyć podpis pod listą
            dotyczącą wydanych kluczy do apartamentów, tym samym zobowiązuje się
            do ich zwrotu w takiej ilości, jaka wynikała z listy oraz przyjmuje
            na siebie obowiązek opłaty określonej kary w przypadku nie zwrócenia
            któregokolwiek z kluczy oraz za zniszczenia spowodowane przez grupę.
          </p>
          <p>
            6. Doba hotelowa dla rezerwacji grupowych kończy się o godzinie
            10:00. Czas rozpoczęcia pozostaje bez zmian jak dla gości
            indywidualnych.
          </p>
          <p>
            7. Pracownik recepcji może poprosić opiekuna grupy o wpłatę depozytu
            na poczet ewentualnych zniszczeń oraz kary za palenie w obiekcie w
            wysokości ustalonej wspólnie.
          </p>
          <h3>
            VI WYMELDOWANIE <br /> <br />§ 16
          </h3>
          <p>
            1. Każdy gość wyjeżdzający z Hotelu Miodowa zobowiązany jest do
            pozostawienia kluczy do apartamentu na recepcji.
          </p>
          <p>
            2. Obsługa hotelu będzie wdzięczna za pozostawienie za sobą porządku
            w pokojach oraz w łazienkach.
          </p>
          <p>
            3. W sprawie pozostawienia bagaży w przechowalni lub ewentualnego
            przedłużenia Państwa pobytu prosimy o wcześniejszy kontakt z
            recepcją.
          </p>
          <br /> <br /> <br />
          <h3>
            Hotel Miodowa dziękuje wszystkim Gościom za zapoznanie się z
            regulaminem i życzy Państwu udanego pobytu. W sprawie jakichkolwiek
            pytań nasz personel chętnie służy pomocą przez całą dobę.
          </h3>
        </div>
      ) : (
        <div className="content">
          <h2>
            The staff of Hotel Miodowa will highly appreciate your cooperation
            in compliance with these regulations, which is to ensure peace and
            the safe stay of our guests.
          </h2>
          <h3>
            I CHECK-IN <br /> <br /> § 1
          </h3>
          <p> 1. The apartment at Hotel Miodowa is rented for days. </p>
          <p>
            2. If the Guest did not specify the time of stay at check-in hotel,
            it is assumed that the apartment has been rented for one day.
          </p>
          <p>
            3. The hotel day starts at 2 p.m. and ends 12:00 the next day. Not
            leaving the apartment until 12:00 means extending the stay by
            another day.
          </p>
          <h3> § 2 </h3>
          <p>
            1. Wishes to extend the stay, the Guest should report to the
            reception desk time. 9.00 a.m.
          </p>
          <p>
            2. The hotel may not accept the request to extend the stay if is not
            availability.
          </p>
          <p>
            3. Before check in, we ask our guests to present photo ID (i.e. ID
            card, passport, law driving) and signing the registration card. Fee
            for staying in the hotel is charged in advance according to the
            prices quoted during booking a room and the applicable price list.
            In the case of failure to use the reservation for reasons beyond the
            control of the hotel, a payment for a specific reservation is not
            refundable. It is possible to use the deposit at a different date.
          </p>
          <p>
            4. The need to receive a VAT invoice for the stay at the hotel
            should be reported upon check-in. It can be issued at the latest in
            within 7 days from the date of payment (both the deposit and the
            amount due final), the above period is extended to 3 months when the
            invoice is to be issued to a person who does not conduct business
            economic. After the above-mentioned deadlines, the hotel will refuse
            issuing an invoice.
          </p>
          <p>
            5. When damage or destruction is found items entrusted by the hotel
            will be charged extra an appropriate fee: - room keys - PLN 150, -
            bed linen - PLN 100, - other - according to the price of repair or
            purchase of a new one devices.
          </p>
          <h3> § 3 </h3>
          <p>
            1. The hotel guest may not transfer the room to other people, even
            if the period for which the fee has been paid has not expired.
          </p>
          <p>
            2. Persons registered at the hotel inviting their guests should
            inform about it the receptionist and are fully responsible for any
            damage caused by them. Visits may last from 8.00 a.m. to 10.00 p.m.
            and guests staying at the hotel should make sure that these people
            left the facility by 22.00. Failure to do so may result in the
            removal of the guest from the hotel by the security service. {""}
          </p>
          <p>
            3. Hotel Miodowa may refuse to accept a Guest who during of the
            previous stay, grossly violated the regulations of Hotel Miodowa,
            causing damage to hotel property, the Guest, employees, people
            staying or otherwise disturbed the peace or functioning of Hotel
            Miodowa.
          </p>
          <h3> § 4 </h3>
          <p>
            1. Hotel Miodowa provides services in accordance with its category
            and accepted standard. {""}
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
            1. At the Guest's request, Hotel Miodowa provides free services the
            following services: - providing information related to the stay, -
            wake up at the scheduled time, - ordering a taxi, - rental of an
            iron and ironing board at the reception.
          </p>
          <h3> § 6 </h3>
          <p>
            1. For money, electronic equipment and more items left in the
            apartment or shared areas Hotel Miodowa is not responsible for any
            theft will be reported to the police.
          </p>
          <p>
            2. It is possible to deposit money and other valuable items in the
            deposit at the reception, for an additional fee.
          </p>
          <h3> § 7 </h3>
          <p>
            1. The curfew is valid in the hotel from 10.00 p.m. to 6.00 a.m.{" "}
            {""}
          </p>
          <p>
            2. The behavior of people using the hotel services should not
            disturb stay of other guests. Hotel Miodowa may refuse to continue
            providing services to a person who has breached this rule without
            return paid fees for the stay.
          </p>
          <h3> § 8 </h3>
          <p>
            1. Each time the Guest leaves the apartment, should check it close
            the door to apartment, and should leave the keys at the reception.
          </p>
          <p>
            2. The hotel guest is financially responsible for all the damage,
            act or omission, as well as the action people accompanying him.
          </p>
          <p>
            3. Guests of Hotel Miodowa have the right to use all of devices
            constituting the equipment of individual apartments, e.g. from
            televisions, kitchenette equipment, equipment bathrooms, as well as
            other devices located in the apartments. There is a possibility of
            free use wireless Wi-Fi network. {""}
          </p>
          <p>
            4. There is an absolute ban on smoking in the hotel rooms and parts
            generally accessible, except for the place intended for this, which,
            at your request, will be indicated by the reception staff. Breaking
            the ban may result in a fine of PLN 500, and they will also be
            charged with the costs of refreshing the room and the intervention
            of the Guard Fire.
          </p>
          <p>
            5. In the event of a refusal to pay the penalty, the hotel has the
            right to charge the Guest's credit card, and in the event of its
            failure to issue an invoice unpaid fee. {""}
          </p>
          <h3> § 9 </h3>
          <p>
            1. We invite you to breakfast from 7:30 to 10:00. Breakfast room of
            Hotel Miodowa is located on level -1. Down the breakfast room,
            please go through the reception (the elevator goes down only to
            level 0).
          </p>
          <p>
            2. In the evening hours (19:00 - 23:00 or until the last customer)
            we invite you to a drink bar, located on level 0.
          </p>
          <p>
            3. Please be careful when eating in the apartments, including
            drinking coffee and other drinks that may dirty bedding and
            mattresses. In case of contamination of the room equipment resulting
            from non-compliance with the above rules, you will burdened with the
            costs of cleaning, we expect a fine of PLN 300.
          </p>
          <p>
            4. We also ask you not to throw anything out of the window and don't
            sit on the window sills for reasons danger of falling out.
          </p>
          <h3>
            III CLEANING SERVICE <br /> <br /> § 10
          </h3>
          <p>
            1. Cleaning rooms where guests stay for more than 1 day, takes place
            daily UNTIL 2 PM.
          </p>
          <p>
            2. The cleaning service includes: throwing out rubbish, cleaning
            bathrooms, beds made.
          </p>
          <p>
            3. The cleaning service does NOT include washing dishes and cleaning
            of personal belongings of guests.
          </p>
          <p>
            4. Towels are replaced with clean ones after the third day of stay,
            unless that the Guest asks for an early replacement. Bed linen is
            provided only replaced during long stays (over 7 days) after four
            day of stay.
          </p>
          <h3> § 11 </h3>
          <p>
            1. In the absence of guests in the apartment, an employee of the
            Hotel Miodowa can enter the room to clean or fix the fault. If you
            do not wish this, please let know a receptionist during check-in or
            by hanging it up special DO NOT DISTURB pendant, which is located in
            apartment.
          </p>
          <h3> § 12 </h3>
          <p>
            1. Personal belongings left by the departing person can be sent back
            upon request Guest to the indicated address. {""}
          </p>
          <p>
            2. If such an instruction is not received, Hotel Miodowa store items
            for a period of 3 months from the date of check-out. The above rule
            does not apply to foods that are thrown away right after the guest's
            departure. {""}
          </p>
          <h3> § 13 </h3>
          <p>
            1. The staff of the Miodowa Hotel has the right to remove a guest
            who does not comply with the regulations and disturbs the order and
            peace of others. In this case, the accommodation fee will not be
            refunded.
          </p>
          <p>
            2. It is forbidden to move room furnishings without the consent of
            the reception or another service person.
          </p>
          <p>
            3. Each person checked into the hotel has their own keys to be
            returned upon check-out.
          </p>
          <p>
            4. When placing orders with vendors, eg pizza etc, please remember
            to inform the supplier of the room number.
          </p>
          <p>
            5. Hotel guests are required to read the instructions fire
            protection and to comply with it.
          </p>
          <p>
            {" "}
            6. The common areas of the hotel are monitored 24 hours a day.{" "}
          </p>
          <h3>
            IV MINORS <br /> <br /> § 14
          </h3>
          <p>
            1. All minors staying at the Miodowa Hotel must be under the care of
            an adult responsible for them.
          </p>
          <p>2. Persons under 18 years old can't consume alcohol.</p>
          <h3>
            V GROUPS <br /> <br /> § 15
          </h3>
          <p> 1. A group of more than 20 members is considered a GROUP. </p>
          <p>
            2. The group leader is fully responsible for the group during they
            stay at the Hotel Miodowa, as well as for possible damage hotel
            property.
          </p>
          <p>
            3. Upon check-in at the hotel, the group leader should present
            complete list of participants, giving their names and surnames, date
            birthday, place of residence, number of the certifying document
            identity.
          </p>
          <p>
            4. The leader is obliged to provide a contact telephone number to
            him/her as well as to other leaders.
          </p>
          <p>
            5. After checking in, the leader should sign the list of taking keys
            to the apartments, he undertakes the same obligation to return them
            in the amount indicated on the list and accepted the obligation to
            pay a specific cost in the event of non-return any of the keys and
            for any damage caused by the group.
          </p>
          <p>6. Check-out for group reservations ends at 10:00.</p>
          <p>
            7. The receptionist may ask the group leader to pay a deposit
            against possible damage and penalties for smoking in the rooms.
          </p>
          <h3>
            VI CHECK OUT <br /> <br /> § 16
          </h3>
          <p>
            1. Every guest leaving Hotel Miodowa is obliged to leaving the keys
            to the apartment at the reception.
          </p>
          <p>
            2. The hotel staff will be grateful if you leave everything tidy in
            rooms and bathrooms.
          </p>
          <p>
            3. In the matter of leaving the luggage in the storage room or
            possible to extend your stay, please contact us in advance
            reception.
          </p>
          <br /> <br /> <br />
          <h3>
            Hotel Miodowa would like to thank all guests for reading regulations
            and wish you a pleasant stay. If you have any questions, our staff
            will be happy to help you.
          </h3>
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
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
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
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #444;
    text-shadow: none;
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
